import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

// UIKit
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'

// Global styles
import '/css/style.css'

createApp(App).use(router).mount('#app')
