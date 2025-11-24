# Primary Colors Usage Guide

## Complete Primary Color Palette

All primary colors are defined in `tokens/colors.css`:

| Color Variable | Hex Code | Color Name | Usage |
|---------------|----------|------------|-------|
| `--color-primary-1` | `#312E81` | Dark Indigo | Darkest shade |
| `--color-primary-2` | `#3730A3` | Deep Indigo | Very dark |
| `--color-primary-3` | `#4338CA` | Dark Indigo | Dark |
| `--color-primary-4` | `#4F46E5` | **Indigo** | **Main/Default** ⭐ |
| `--color-primary-5` | `#6366F1` | Medium Indigo | Medium |
| `--color-primary-6` | `#818CF8` | Light Indigo | Light |
| `--color-primary-7` | `#A5B4FC` | Lighter Indigo | Very light |
| `--color-primary-8` | `#C7D2FE` | Pale Indigo | Border/Focus |
| `--color-primary-9` | `#E0E7FF` | Very Pale Indigo | Hover states |
| `--color-primary-10` | `#EEF2FF` | Lightest Indigo | Backgrounds |
| `--color-primary-11` | `#F3F6FF` | Almost White | Subtle backgrounds |

---

## Primary Color Usage by Page

### 🎯 **Usage Page** (`Usage/Usage.css`)

**Primary Colors Used:**
- **`--color-primary-4`** (`#4F46E5`) - **Main color**
  - Progress bars in stat cards
  
- **`--color-primary-6`** (`#818CF8`) - **Secondary color**
  - Chart legend dot (Current Duration indicator)

**Summary:** Uses 2 primary colors (primary-4, primary-6)

---

### 📄 **Invoices Page** (`Invoices/Invoices.css`)

**Primary Colors Used:**
- **`--color-primary-4`** (`#4F46E5`) - **Main color**
  - Download button text color
  - Active pagination page border and text
  
- **`--color-primary-8`** (`#C7D2FE`) - **Focus/Border color**
  - Focus box-shadow for pagination buttons
  - Focus box-shadow for per-page selector
  
- **`--color-primary-9`** (`#E0E7FF`) - **Hover state**
  - Download button active state background
  
- **`--color-primary-10`** (`#EEF2FF`) - **Background color**
  - Download button hover state background
  - Pagination arrow hover state background
  - Pagination page hover state background
  - Per-page selector hover state background

**Summary:** Uses 4 primary colors (primary-4, primary-8, primary-9, primary-10)

---

### 💳 **Subscription Page** (`Subscription/Subscription.css` & `Subscription.tsx`)

**Primary Colors Used:**
- **`--color-primary-1`** (`#312E81`) - **Dark shade**
  - Manage button background (default state)
  
- **`--color-primary-3`** (`#4338CA`) - **Dark indigo**
  - Manage button hover state background
  
- **`--color-primary-4`** (`#4F46E5`) - **Main color**
  - Chevron icon color when expanded
  - Contact Support button text color
  
- **`--color-primary-8`** (`#C7D2FE`) - **Border color**
  - Contact Support button border (right and bottom)
  
- **`--color-primary-9`** (`#E0E7FF`) - **Hover state**
  - Contact Support button hover background
  
- **`--color-primary-10`** (`#EEF2FF`) - **Background color**
  - Contact Support button default background

**Summary:** Uses 6 primary colors (primary-1, primary-3, primary-4, primary-8, primary-9, primary-10)

---

## 🎨 Most Commonly Used Primary Colors Across All Pages

1. **`--color-primary-4`** (`#4F46E5`) - ⭐ **Used in ALL pages**
   - Main brand color
   - Primary actions, text, borders
   - **This is the main primary color**

2. **`--color-primary-10`** (`#EEF2FF`) - Used in 2 pages
   - Backgrounds, hover states
   - Invoices & Subscription

3. **`--color-primary-8`** (`#C7D2FE`) - Used in 2 pages
   - Focus states, borders
   - Invoices & Subscription

4. **`--color-primary-9`** (`#E0E7FF`) - Used in 2 pages
   - Hover states
   - Invoices & Subscription

5. **`--color-primary-6`** (`#818CF8`) - Used in 1 page
   - Chart indicators
   - Usage page only

6. **`--color-primary-1`** (`#312E81`) - Used in 1 page
   - Dark button backgrounds
   - Subscription page only

7. **`--color-primary-3`** (`#4338CA`) - Used in 1 page
   - Button hover states
   - Subscription page only

---

## 📊 Quick Reference

### Main Primary Color (Used Everywhere)
**`--color-primary-4`** = `#4F46E5` (Indigo)
- This is the **default primary color** used across all pages

### Supporting Primary Colors
- **Light backgrounds**: `primary-10`, `primary-9`
- **Borders/Focus**: `primary-8`
- **Dark buttons**: `primary-1`, `primary-3`
- **Accents**: `primary-6`

---

## 💡 Best Practices

1. **Use `primary-4`** for main actions, links, and primary elements
2. **Use `primary-8`** for focus states and subtle borders
3. **Use `primary-9`** for hover states
4. **Use `primary-10`** for light backgrounds
5. **Use `primary-1` or `primary-3`** for dark button variants
6. **Use `primary-6`** for chart colors and accents

---

**Last Updated:** Based on current codebase analysis

