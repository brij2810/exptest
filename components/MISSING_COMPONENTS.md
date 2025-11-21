# Missing Components List

## Summary
- **Total Components Found:** ~50+
- **Completed:** 21
- **Missing:** ~30+

---

## 🔴 High Priority (Form & Core UI)

1. **Input** (node-id: 1707:19302)
   - Form input with multiple variants (base, prefix, suffix, icons, number, etc.)
   - States: default, hover, focused, error, disabled
   - Sizes: 34px, 40px

2. **Date Picker** (node-id: 1566:275)
   - Date picker input (node-id: 1566:275)
   - Date picker calendar (node-id: 1690:440)
   - Calendar sidebar (node-id: 1690:439)
   - Calendar component (node-id: 3913:14280)

3. **Dropdown Form** (node-id: 1563:115)
   - Form dropdown variant

4. **Dropdown Action** (node-id: 1559:117)
   - Action dropdown variant

5. **Dropdown Menu** (node-id: 1552:332)
   - Menu dropdown variant

6. **Radio Button** (if exists in design)
   - Radio input component

7. **Select** (if exists in design)
   - Select dropdown component

8. **Textarea** (if exists in design)
   - Multi-line text input

---

## 🟡 Medium Priority (Interactive Components)

9. **Audio & Video**
   - Audio components (node-id: 1668:18185)
   - Audio player (node-id: 1668:18184)
   - Video player (node-id: 1668:18186)
   - Image component (node-id: 1661:18056)

10. **Authorization** (node-id: 1850:17395)
    - Authorization/auth component

11. **Capacity** (node-id: 1687:18022)
    - Capacity indicator/bar

12. **Carousels** (node-id: 1817:17520)
    - Carousel/slider component

13. **Charts** (node-id: 2024:9719)
    - Chart components (various chart types)

14. **Chat Components**
    - Chat attachment (node-id: 9087:18943)
    - Chat box (node-id: 9087:19012)
    - Chat loading (node-id: 9087:18933)

15. **Coupon** (node-id: 1540:386)
    - Coupon/discount component

16. **Color Swatch** (node-id: 1822:726)
    - Color picker/swatch component

17. **Cursor** (node-id: 1952:89)
    - Custom cursor component

18. **Drag** (node-id: 1686:18066)
    - Drag and drop component

19. **In Product Notification** (node-id: 1822:28)
    - In-app notification component

20. **Inset Text** (node-id: 1800:115)
    - Inset text component

21. **Map** (node-id: 1811:17432)
    - Map component

22. **Marketing Modals** (node-id: 1777:0)
    - Marketing modal variants
    - Marketing modal Subscription (node-id: 1777:1)

23. **Modals** (Additional variants)
    - Action modals (node-id: 1695:18208)
    - Message modal (node-id: 1695:18209)
    - Etc modals (node-id: 1696:17886)

24. **Merchandising Card** (node-id: 3854:13732)
    - Merchandising card variant

25. **Group Button** (node-id: 3028:12572)
    - Button group component

---

## 🟢 Lower Priority (Helper & Utility Components)

26. **Helpers**
    - Ruler (node-id: 2379:9409)
    - Label (node-id: 2379:9458)
    - Grid (node-id: 2379:9471)
    - Footnote (node-id: 2379:9658)
    - Note (node-id: 2379:9625)
    - Arrow (node-id: 2379:9629)

27. **Inline Alert** (node-id: 2379:10067)
    - Inline alert variant

28. **Breadcrumbs Extension** (node-id: 1685:0)
    - Extended breadcrumbs variant

29. **Avatar Stacked** (node-id: 1475:4)
    - Stacked avatar variant

30. **Dropdown Cards** (node-id: 1643:18369)
    - Dropdown with card layout

31. **Code Snippet Full** (node-id: 1686:18011)
    - Full-width code snippet variant

---

## 📋 Component Categories

### Form Components (Most Critical)
- Input ⏳
- Date Picker ⏳
- Dropdown Form ⏳
- Dropdown Action ⏳
- Dropdown Menu ⏳
- Radio Button (if exists)
- Select (if exists)
- Textarea (if exists)

### Media Components
- Audio ⏳
- Video ⏳
- Image ⏳

### Navigation Components
- Carousels ⏳
- Map ⏳

### Data Display
- Charts ⏳
- Capacity ⏳
- Color Swatch ⏳

### Feedback Components
- In Product Notification ⏳
- Inset Text ⏳
- Inline Alert ⏳

### Overlay Components
- Marketing Modals ⏳
- Additional Modal variants ⏳

### Interactive Components
- Drag ⏳
- Cursor ⏳
- Coupon ⏳

### Communication Components
- Chat Attachment ⏳
- Chat Box ⏳
- Chat Loading ⏳
- Authorization ⏳

### Utility Components
- Helpers (Ruler, Label, Grid, etc.) ⏳
- Group Button ⏳
- Merchandising Card ⏳

---

## 🎯 Recommended Order of Creation

### Phase 1: Core Forms (Critical)
1. Input
2. Date Picker
3. Dropdown Form
4. Dropdown Action
5. Dropdown Menu

### Phase 2: Essential UI
6. Radio Button (if exists)
7. Select (if exists)
8. Textarea (if exists)
9. Group Button

### Phase 3: Media & Data
10. Audio & Video
11. Charts
12. Image

### Phase 4: Interactive
13. Carousels
14. Drag
15. Map

### Phase 5: Communication
16. Chat components (Attachment, Box, Loading)
17. In Product Notification
18. Authorization

### Phase 6: Specialized
19. Marketing Modals
20. Additional Modal variants
21. Merchandising Card

### Phase 7: Utilities
22. Helpers (Ruler, Label, Grid, Footnote, Note, Arrow)
23. Inset Text
24. Inline Alert
25. Capacity
26. Color Swatch
27. Cursor
28. Coupon

---

## 📝 Notes

- Some components may have multiple variants (e.g., Dropdown has Form, Action, Menu variants)
- Check Figma design for any additional components not listed here
- Components marked with node-id can be fetched using `mcp_figma-desktop_get_design_context`
- All components should follow the same pattern as completed ones (React + TypeScript + CSS)

