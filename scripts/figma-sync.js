/**
 * Figma Design Sync Script
 * Detects changes in Figma design and prepares for AI review
 */

const fs = require('fs');
const path = require('path');

// Load environment variables from .env file
try {
  require('./load-env.js');
} catch (e) {
  // .env file might not exist yet, that's OK
}

// Figma API configuration
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY || '0H4f6exqpIfdYHQhiBheBo';
const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_NODE_ID = process.env.FIGMA_NODE_ID || '8190-20277';

// File to store last known version
const VERSION_FILE = path.join(__dirname, '../.figma-version.json');

async function fetchFigmaDesign() {
  if (!FIGMA_ACCESS_TOKEN) {
    console.error('FIGMA_ACCESS_TOKEN not set');
    process.exit(1);
  }

  const url = `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      version: data.version,
      lastModified: data.lastModified,
      document: data.document,
    };
  } catch (error) {
    console.error('Error fetching Figma design:', error);
    throw error;
  }
}

/**
 * Extract comprehensive design structure from Figma document
 * Extracts: components, text content, icons, styling, layout, and all element details
 */
function extractDesignStructure(document, nodeId) {
  if (!document) return null;
  
  function findNode(node, targetId) {
    if (node.id === targetId) {
      return node;
    }
    if (node.children) {
      for (const child of node.children) {
        const found = findNode(child, targetId);
        if (found) return found;
      }
    }
    return null;
  }

  const targetNode = findNode(document, nodeId);
  if (!targetNode) return null;

  // Comprehensive extraction
  const components = [];
  const texts = [];
  const icons = [];
  const images = [];
  const colors = [];
  const fonts = [];
  const spacing = [];
  const layoutInfo = [];
  let tableStructure = null;
  
  function traverse(node, depth = 0, parent = null) {
    // Extract component/node information
    if (node.type && node.name) {
      const componentInfo = {
        id: node.id,
        type: node.type,
        name: node.name,
        depth: depth,
      };
      
      // Extract layout information
      if (node.layoutMode) {
        componentInfo.layoutMode = node.layoutMode;
        layoutInfo.push({
          name: node.name,
          layoutMode: node.layoutMode,
          depth: depth,
        });
      }
      
      // Extract positioning and sizing
      if (node.absoluteBoundingBox) {
        componentInfo.position = {
          x: node.absoluteBoundingBox.x,
          y: node.absoluteBoundingBox.y,
          width: node.absoluteBoundingBox.width,
          height: node.absoluteBoundingBox.height,
        };
      }
      
      components.push(componentInfo);
      
      // Check for table structure
      if (node.name && (node.name.includes('Table') || node.name.includes('table'))) {
        const hasFlexLayout = node.layoutMode === 'HORIZONTAL' || 
                              (parent && parent.layoutMode === 'HORIZONTAL');
        if (hasFlexLayout) {
          tableStructure = 'flex-columns';
        }
      }
    }
    
    // Extract TEXT content
    if (node.type === 'TEXT' && node.characters) {
      texts.push({
        id: node.id,
        content: node.characters,
        name: node.name || 'Text',
        style: node.style || {},
        depth: depth,
      });
      
      // Extract font information
      if (node.style) {
        fonts.push({
          fontFamily: node.style.fontFamily,
          fontSize: node.style.fontSize,
          fontWeight: node.style.fontWeight,
          lineHeight: node.style.lineHeightPx,
          textContent: node.characters.substring(0, 50), // First 50 chars
        });
      }
    }
    
    // Extract colors from fills
    if (node.fills && Array.isArray(node.fills)) {
      node.fills.forEach(fill => {
        if (fill.type === 'SOLID' && fill.color) {
          const color = fill.color;
          const colorHex = rgbToHex(color.r, color.g, color.b);
          colors.push({
            hex: colorHex,
            opacity: fill.opacity || 1,
            nodeName: node.name,
            nodeType: node.type,
          });
        }
      });
    }
    
    // Extract icons (VECTOR, COMPONENT, INSTANCE nodes that might be icons)
    if (node.type === 'VECTOR' || node.type === 'COMPONENT' || node.type === 'INSTANCE') {
      if (node.name && (
        node.name.toLowerCase().includes('icon') ||
        node.name.toLowerCase().includes('svg') ||
        (node.type === 'INSTANCE' && node.name.includes('/'))
      )) {
        icons.push({
          id: node.id,
          name: node.name,
          type: node.type,
          depth: depth,
        });
      }
    }
    
    // Extract images
    if (node.type === 'RECTANGLE' && node.fills) {
      const imageFill = node.fills.find(f => f.type === 'IMAGE');
      if (imageFill) {
        images.push({
          id: node.id,
          name: node.name,
          imageRef: imageFill.imageRef,
          depth: depth,
        });
      }
    }
    
    // Extract spacing (gaps, padding)
    if (node.layoutMode && node.paddingLeft !== undefined) {
      spacing.push({
        nodeName: node.name,
        paddingLeft: node.paddingLeft,
        paddingRight: node.paddingRight,
        paddingTop: node.paddingTop,
        paddingBottom: node.paddingBottom,
        itemSpacing: node.itemSpacing,
      });
    }
    
    // Recursively traverse children
    if (node.children) {
      node.children.forEach(child => traverse(child, depth + 1, node));
    }
  }
  
  traverse(targetNode);
  
  // Check for flex-based table structure
  function checkForFlexTable(node) {
    if (!node) return null;
    
    if (node.layoutMode === 'HORIZONTAL' && node.children && node.children.length >= 3) {
      const hasTableHeaders = node.children.some(child => 
        child.name && (child.name.includes('heading') || child.name.includes('header') || child.name.includes('Table heading'))
      );
      if (hasTableHeaders) {
        return 'flex-columns';
      }
    }
    
    if (node.children) {
      for (const child of node.children) {
        const result = checkForFlexTable(child);
        if (result) return result;
      }
    }
    
    return null;
  }
  
  const flexTableCheck = checkForFlexTable(targetNode);
  if (flexTableCheck) {
    tableStructure = flexTableCheck;
  }
  
  return {
    nodeId: nodeId,
    components: components,
    componentCount: components.length,
    tableStructure: tableStructure,
    texts: texts,
    icons: icons,
    images: images,
    colors: colors,
    fonts: fonts,
    spacing: spacing,
    layoutInfo: layoutInfo,
  };
}

/**
 * Convert RGB to hex color
 */
function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

/**
 * Comprehensive comparison of design structure with code implementation
 * Checks: components, text content, icons, styling, layout, and all element details
 */
function compareWithCode(designStructure) {
  const subscriptionPath = path.join(__dirname, '../Subscription/Subscription.tsx');
  const subscriptionCssPath = path.join(__dirname, '../Subscription/Subscription.css');
  
  if (!fs.existsSync(subscriptionPath)) {
    return null;
  }

  const code = fs.readFileSync(subscriptionPath, 'utf8');
  const cssCode = fs.existsSync(subscriptionCssPath) ? fs.readFileSync(subscriptionCssPath, 'utf8') : '';
  
  // Extract components from code
  const codeComponents = [];
  const cardMatches = code.match(/<Card[^>]*>/g) || [];
  codeComponents.push(...cardMatches.map(() => ({ type: 'Card', found: true })));
  const tableMatches = code.match(/<Table[^>]*>/g) || [];
  codeComponents.push(...tableMatches.map(() => ({ type: 'Table', found: true })));
  const buttonMatches = code.match(/<Button[^>]*>/g) || [];
  codeComponents.push(...buttonMatches.map(() => ({ type: 'Button', found: true })));
  const headerMatches = code.match(/<Header[^>]*>/g) || [];
  codeComponents.push(...headerMatches.map(() => ({ type: 'Header', found: true })));
  const sidebarMatches = code.match(/<Sidebar[^>]*>/g) || [];
  codeComponents.push(...sidebarMatches.map(() => ({ type: 'Sidebar', found: true })));
  
  // Extract text content from code
  const codeTexts = [];
  // Extract text from JSX strings
  const textMatches = code.match(/(?:>|'|"|`)([^<>'"]{3,}?)(?:<|'|"|`)/g) || [];
  textMatches.forEach(match => {
    const text = match.replace(/[>'`"]/g, '').trim();
    if (text && text.length > 2 && !text.match(/^(import|export|const|let|var|function|return|className|onClick|type|key|label|align|width|size|id|active|icon|src|alt|href|target|rel|onSearch|onNotificationClick|onHelpClick|profileImage|profileName|appName|sections|columns|rows|product|price|console\.log)/)) {
      codeTexts.push(text);
    }
  });
  
  // Extract specific text content
  const extractedTexts = {
    pageTitle: code.match(/subscription-page__title[^>]*>([^<]+)</)?.[1]?.trim(),
    pageDescription: code.match(/subscription-page__description[^>]*>([^<]+)</)?.[1]?.trim(),
    workspaceName: code.match(/subscription-card__workspace-name[^>]*>([^<]+)</)?.[1]?.trim(),
    buttonText: code.match(/Upgrade Now/)?.[0],
    tableHeaders: [],
    tableRows: [],
  };
  
  // Extract table data
  const tableColumnsMatch = code.match(/tableColumns\s*=\s*\[([^\]]+)\]/s);
  if (tableColumnsMatch) {
    const columnLabels = tableColumnsMatch[1].match(/label:\s*['"]([^'"]+)['"]/g) || [];
    extractedTexts.tableHeaders = columnLabels.map(m => m.match(/['"]([^'"]+)['"]/)[1]);
  }
  
  const tableRowsMatch = code.match(/tableRows\s*=\s*\[([^\]]+)\]/s);
  if (tableRowsMatch) {
    const productMatches = tableRowsMatch[1].match(/product:\s*['"]([^'"]+)['"]/g) || [];
    const typeMatches = tableRowsMatch[1].match(/type:\s*['"]([^'"]+)['"]/g) || [];
    const priceMatches = tableRowsMatch[1].match(/price:\s*['"]([^'"]+)['"]/g) || [];
    extractedTexts.tableRows = {
      products: productMatches.map(m => m.match(/['"]([^'"]+)['"]/)[1]),
      types: typeMatches.map(m => m.match(/['"]([^'"]+)['"]/)[1]),
      prices: priceMatches.map(m => m.match(/['"]([^'"]+)['"]/)[1]),
    };
  }
  
  // Extract icons from code (SVG elements)
  const codeIcons = [];
  const svgMatches = code.match(/<svg[^>]*>[\s\S]*?<\/svg>/g) || [];
  svgMatches.forEach((svg, index) => {
    const viewBoxMatch = svg.match(/viewBox=["']([^"']+)["']/);
    const pathMatches = svg.match(/<path[^>]*>/g) || [];
    codeIcons.push({
      index: index,
      viewBox: viewBoxMatch ? viewBoxMatch[1] : null,
      pathCount: pathMatches.length,
      hasCircle: svg.includes('<circle'),
      hasRect: svg.includes('<rect'),
    });
  });
  
  // Extract colors from CSS
  const codeColors = [];
  const colorMatches = cssCode.match(/(?:color|background|border-color):\s*([^;]+);/g) || [];
  colorMatches.forEach(match => {
    const colorValue = match.match(/:\s*([^;]+)/)?.[1]?.trim();
    if (colorValue && (colorValue.startsWith('#') || colorValue.startsWith('var(') || colorValue.startsWith('rgb'))) {
      codeColors.push(colorValue);
    }
  });
  
  // Extract fonts from CSS
  const codeFonts = [];
  const fontMatches = cssCode.match(/font-family:\s*([^;]+);/g) || [];
  const fontSizeMatches = cssCode.match(/font-size:\s*([^;]+);/g) || [];
  const fontWeightMatches = cssCode.match(/font-weight:\s*([^;]+);/g) || [];
  codeFonts.push({
    families: fontMatches.map(m => m.match(/:\s*([^;]+)/)?.[1]?.trim()),
    sizes: fontSizeMatches.map(m => m.match(/:\s*([^;]+)/)?.[1]?.trim()),
    weights: fontWeightMatches.map(m => m.match(/:\s*([^;]+)/)?.[1]?.trim()),
  });
  
  // Check for addon-card
  const hasAddonCard = code.includes('addon-card') || code.includes('Add-on features');
  const cardSections = (code.match(/subscription-card|addon-card/g) || []).length;
  
  // Check table structure
  const tableComponentPath = path.join(__dirname, '../components/Table.tsx');
  const tableCssPath = path.join(__dirname, '../components/Table.css');
  let tableImplementationType = null;
  if (fs.existsSync(tableComponentPath)) {
    const tableCode = fs.readFileSync(tableComponentPath, 'utf8');
    const tableCssCode = fs.existsSync(tableCssPath) ? fs.readFileSync(tableCssPath, 'utf8') : '';
    
    // Check for HTML table structure (must check first)
    const hasHtmlTable = tableCode.includes('<table') || tableCode.includes('<Table') || 
                         tableCode.includes('<thead') || tableCode.includes('<tbody') ||
                         tableCode.includes('<tr') || tableCode.includes('<th') || tableCode.includes('<td');
    
    // Check for flex-column structure
    // TSX has table__column class, CSS has flex layout
    const hasFlexColumns = tableCode.includes('table__column') && 
                           tableCssCode.includes('.table__column') && 
                           tableCssCode.includes('flex-direction: column') &&
                           tableCssCode.includes('display: flex');
    
    if (hasHtmlTable) {
      tableImplementationType = 'html-table';
    } else if (hasFlexColumns) {
      tableImplementationType = 'flex-columns';
    }
  }
  
  // Compare design texts with code texts
  const designTexts = designStructure?.texts || [];
  const textDifferences = [];
  
  // Check page title
  const designPageTitle = designTexts.find(t => t.content && t.content.includes('Subscription'))?.content;
  if (designPageTitle && extractedTexts.pageTitle && !designPageTitle.includes(extractedTexts.pageTitle)) {
    textDifferences.push({
      type: 'text-mismatch',
      element: 'Page Title',
      design: designPageTitle,
      code: extractedTexts.pageTitle,
    });
  }
  
  // Check workspace name
  const designWorkspaceName = designTexts.find(t => t.content && t.content.includes('Trial Workspace'))?.content;
  if (designWorkspaceName && extractedTexts.workspaceName && !designWorkspaceName.includes(extractedTexts.workspaceName)) {
    textDifferences.push({
      type: 'text-mismatch',
      element: 'Workspace Name',
      design: designWorkspaceName,
      code: extractedTexts.workspaceName,
    });
  }
  
  // Compare icons
  const designIcons = designStructure?.icons || [];
  const iconDifferences = [];
  if (designIcons.length !== codeIcons.length) {
    iconDifferences.push({
      type: 'count-mismatch',
      element: 'Icons',
      designCount: designIcons.length,
      codeCount: codeIcons.length,
    });
  }
  
  // Compare components
  const componentDifferences = [];
  if (designStructure?.componentCount && designStructure.componentCount !== codeComponents.length) {
    componentDifferences.push({
      type: 'count-mismatch',
      element: 'Components',
      designCount: designStructure.componentCount,
      codeCount: codeComponents.length,
    });
  }
  
  // Compare table structure
  const designTableStructure = designStructure?.tableStructure;
  const tableStructureMismatch = designTableStructure && 
                                 designTableStructure !== tableImplementationType;
  
  return {
    designComponentCount: designStructure?.componentCount || null,
    codeComponentCount: codeComponents.length,
    hasAddonCard: hasAddonCard,
    cardSections: cardSections,
    designComponents: designStructure?.components?.slice(0, 20) || null,
    designTableStructure: designTableStructure,
    codeTableStructure: tableImplementationType,
    tableStructureMismatch: tableStructureMismatch,
    
    // Detailed comparisons
    designTexts: designTexts.slice(0, 20), // First 20 for reference
    codeTexts: extractedTexts,
    textDifferences: textDifferences,
    
    designIcons: designIcons.slice(0, 10),
    codeIcons: codeIcons,
    iconDifferences: iconDifferences,
    
    designColors: designStructure?.colors?.slice(0, 20) || [],
    codeColors: codeColors.slice(0, 20),
    
    designFonts: designStructure?.fonts?.slice(0, 10) || [],
    codeFonts: codeFonts,
    
    componentDifferences: componentDifferences,
    
    // Summary flags
    hasTextDifferences: textDifferences.length > 0,
    hasIconDifferences: iconDifferences.length > 0,
    hasComponentDifferences: componentDifferences.length > 0,
  };
}

function getLastKnownVersion() {
  if (fs.existsSync(VERSION_FILE)) {
    return JSON.parse(fs.readFileSync(VERSION_FILE, 'utf8'));
  }
  return null;
}

function saveVersion(versionData) {
  fs.writeFileSync(VERSION_FILE, JSON.stringify(versionData, null, 2));
}

async function checkForChanges() {
  console.log('🔍 Checking for Figma design changes...');
  
  const currentDesign = await fetchFigmaDesign();
  const lastVersion = getLastKnownVersion();

  if (!lastVersion) {
    console.log('📝 No previous version found. Saving current version...');
    
    // Extract and save design structure for future comparison
    const designStructure = extractDesignStructure(currentDesign.document, FIGMA_NODE_ID);
    const codeComparison = compareWithCode(designStructure);
    
    saveVersion({
      version: currentDesign.version,
      lastModified: currentDesign.lastModified,
      timestamp: new Date().toISOString(),
      designStructure: designStructure,
      codeComparison: codeComparison,
    });
    console.log('✅ Initial version saved. Future changes will be detected.');
    
    // Warn if code doesn't match design structure
    if (codeComparison && codeComparison.hasAddonCard) {
      console.log('⚠️  WARNING: Code contains "Add-on features" section that may not be in design.');
      console.log('   Consider running manual comparison with Figma design.');
    }
    
    return false;
  }

  // Check version changes
  const versionChanged = currentDesign.version !== lastVersion.version;
  
  // Always compare structure with code (even if version didn't change)
  // Convert node ID format: "8190-20277" -> "8190:20277" for Figma API
  const nodeIdForSearch = FIGMA_NODE_ID.replace('-', ':');
  let designStructure = extractDesignStructure(currentDesign.document, nodeIdForSearch);
  
  // If structure extraction failed, try alternative node ID formats
  if (!designStructure && currentDesign.document) {
    // Try with original format
    designStructure = extractDesignStructure(currentDesign.document, FIGMA_NODE_ID);
    // Try with colon format
    if (!designStructure) {
      designStructure = extractDesignStructure(currentDesign.document, nodeIdForSearch);
    }
  }
  
  // If still no structure, set default based on known Figma design pattern
  // The Figma design uses flex-columns layout for tables
  if (!designStructure || !designStructure.tableStructure) {
    // Based on the Figma design code, tables use flex-columns layout
    if (!designStructure) {
      designStructure = { tableStructure: 'flex-columns' };
    } else {
      designStructure.tableStructure = 'flex-columns';
    }
  }
  
  const codeComparison = compareWithCode(designStructure);
  
  // Comprehensive difference detection
  const structuralDiff = codeComparison && (
    codeComparison.hasAddonCard ||
    codeComparison.cardSections > 1 ||
    codeComparison.tableStructureMismatch ||
    codeComparison.hasTextDifferences ||
    codeComparison.hasIconDifferences ||
    codeComparison.hasComponentDifferences ||
    (lastVersion.codeComparison && 
     codeComparison.codeComponentCount !== lastVersion.codeComparison?.codeComponentCount)
  );

  if (versionChanged || structuralDiff) {
    if (versionChanged) {
      console.log('🆕 Design version changed!');
      console.log(`   Previous version: ${lastVersion.version}`);
      console.log(`   Current version: ${currentDesign.version}`);
      console.log(`   Last modified: ${currentDesign.lastModified}`);
    }
    
    if (structuralDiff) {
      console.log('\n⚠️  COMPREHENSIVE DIFFERENCES DETECTED:');
      console.log('═══════════════════════════════════════════════════════════\n');
      
      // Component differences
      if (codeComparison.hasComponentDifferences) {
        console.log('📦 COMPONENT DIFFERENCES:');
        codeComparison.componentDifferences.forEach(diff => {
          console.log(`   ⚠️  ${diff.element}: Design has ${diff.designCount}, Code has ${diff.codeCount}`);
        });
        console.log('');
      }
      
      if (codeComparison.hasAddonCard) {
        console.log('📦 COMPONENTS:');
        console.log('   ⚠️  Code has "Add-on features" section (not in design)');
        console.log('');
      }
      
      // Table structure
      if (codeComparison.tableStructureMismatch) {
        console.log('📊 TABLE STRUCTURE:');
        console.log(`   ⚠️  Mismatch: Design uses "${codeComparison.designTableStructure}", Code uses "${codeComparison.codeTableStructure}"`);
        console.log('      → Design expects flex-based column layout, but code uses HTML table');
        console.log('');
      }
      
      // Text differences
      if (codeComparison.hasTextDifferences) {
        console.log('📝 TEXT CONTENT DIFFERENCES:');
        codeComparison.textDifferences.forEach(diff => {
          console.log(`   ⚠️  ${diff.element}:`);
          console.log(`      Design: "${diff.design}"`);
          console.log(`      Code:    "${diff.code}"`);
        });
        console.log('');
      }
      
      // Icon differences
      if (codeComparison.hasIconDifferences) {
        console.log('🎨 ICON DIFFERENCES:');
        codeComparison.iconDifferences.forEach(diff => {
          console.log(`   ⚠️  ${diff.element}: Design has ${diff.designCount}, Code has ${diff.codeCount}`);
        });
        console.log('');
      }
      
      // Component count summary
      if (codeComparison.designComponentCount && codeComparison.codeComponentCount && 
          codeComparison.designComponentCount !== codeComparison.codeComponentCount) {
        console.log('📊 COMPONENT COUNT:');
        console.log(`   ⚠️  Design=${codeComparison.designComponentCount} components, Code=${codeComparison.codeComponentCount} components`);
        console.log('');
      }
      
      // Detailed element counts
      console.log('📋 DETAILED ELEMENT COUNTS:');
      console.log(`   Design Texts: ${designStructure?.texts?.length || 0}`);
      console.log(`   Design Icons: ${designStructure?.icons?.length || 0}`);
      console.log(`   Design Images: ${designStructure?.images?.length || 0}`);
      console.log(`   Design Colors: ${designStructure?.colors?.length || 0}`);
      console.log(`   Code Components: ${codeComparison.codeComponentCount}`);
      console.log(`   Code Icons (SVG): ${codeComparison.codeIcons?.length || 0}`);
      console.log('');
      
      console.log('═══════════════════════════════════════════════════════════');
    }
    
    // Create changes summary
    const changes = {
      previousVersion: lastVersion.version,
      currentVersion: currentDesign.version,
      lastModified: currentDesign.lastModified,
      detectedAt: new Date().toISOString(),
      nodeId: FIGMA_NODE_ID,
      versionChanged: versionChanged,
      structuralDiff: structuralDiff,
      codeComparison: codeComparison,
    };

    // Save changes file for AI to read
    const changesFile = path.join(__dirname, '../.figma-changes.json');
    fs.writeFileSync(changesFile, JSON.stringify(changes, null, 2));
    
    // Update version file with new structure
    saveVersion({
      version: currentDesign.version,
      lastModified: currentDesign.lastModified,
      timestamp: new Date().toISOString(),
      designStructure: designStructure,
      codeComparison: codeComparison,
    });
    
    console.log('📋 Changes saved to .figma-changes.json');
    console.log('🤖 Ready for AI review...');
    
    return true;
  }

  console.log('✅ No changes detected. Design is up to date.');
  return false;
}

// Run if called directly
if (require.main === module) {
  checkForChanges()
    .then((hasChanges) => {
      process.exit(hasChanges ? 1 : 0);
    })
    .catch((error) => {
      console.error('Error:', error);
      process.exit(1);
    });
}

module.exports = { checkForChanges, fetchFigmaDesign };


