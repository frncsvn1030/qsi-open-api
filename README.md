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
## 🛠️ Development

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
│   ├── AppLayout.vue     # Pages with header and sidebar
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

### Layout Components

**AppLayout.vue**
- Includes collapsible sidebar, header, and main content area

**DefaultLayout.vue**
- Used for pages (signup, reset password, generate api key, etc.)
- Simple header-only layout without sidebar navigation

### Form Components

**Form Validation**
Add validation states to form inputs:
```vue
<div class="form-input is-success">  <!-- Green border + validation text -->
<div class="form-input is-error">    <!-- Red border + validation text -->
<div class="form-input is-warning">  <!-- Yellow border + validation text -->
```

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
Note: adding the **title** prop is not necessary as it updates based on its type by default unless you want different title message
