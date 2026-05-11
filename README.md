# QSI Open API Playground

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd qsi-open-api-playground
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```
## Development

### Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Browser Setup

**Chromium-based browsers (Chrome, Edge, Brave, etc.):**
- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)

**Firefox:**
- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

### Development Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable Vue components
│   ├── blocks/           # Feature-specific components (blocks of code of a page)
│   │   ├── api-endpoint/    
│   │   ├── api-keys/        
│   │   ├── banners/         
│   │   └── sidebar/      # has the different menus component for sidebar
│   ├── common/           # Shared utility components
│   └── modals/           # Modal dialog components
├── layouts/              # Layout wrapper components
│   ├── SidebarLayout.vue     # Pages with header and sidebar
│   ├── DefaultLayout.vue # Pages with header only
│   ├── Header.vue       
│   └── Sidebar.vue      
├── pages/                # Page-level components (routes)
├── router.js             # Vue Router configuration
├── App.vue               # Root application component
└── main.js               # Application entry point

scss/                     # SCSS stylesheets
├── components/           # Component-specific styles
├── layouts/              # Layout-specific styles
├── utilities/            # Utility classes
└── style.scss            # Main stylesheet

public/                   # Static assets
└── images/               # Logos and icons
```

## 🎨 Component Usage

### Reusable Layout Wrappers

`SidebarLayout.vue`
- Used for pages that includes sidebar, header, and main content.

`DefaultLayout.vue`
- Used for pages without the sidebar. 
- Header and main content only.
### Form Validation
Add validation states to form inputs:
```vue
<!-- Multiple validation states -->
<div class="form-input is-success">  <!-- Green: valid input -->
<div class="form-input is-error">    <!-- Red: invalid input -->
<div class="form-input is-warning">  <!-- Yellow: warning state -->
```

**Form Components:**
- Input fields use UIKit classes (`uk-input input`)
- Buttons support multiple variants (`button--primary`, `button--default`, `button--soft`)
- Select dropdowns include custom chevron icons for better UX


### Notifications

Use the Notification component for user feedback:
```vue
<Notification
  type="success"
  body="Your password has been changed successfully."
/>

<Notification
  type="danger"
  title="Error"
  body="Failed to update profile."
/>
```

**Notification Logic:**
- **Dynamic Icons**: Component automatically selects icons based on type (CheckBadgeIcon for success, ExclamationTriangleIcon for warning, XCircleIcon for danger)
- **Computed Classes**: Uses Vue computed properties to generate UIKit classes (`uk-alert-${type}`) and custom notification classes
- **Default Titles**: If no title prop provided, automatically maps type to friendly names ("Success", "Warning", "Error")