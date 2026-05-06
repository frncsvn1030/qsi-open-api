import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import GenerateApikey from '@/pages/GenerateApiKey.vue'
import MyProfile from './pages/MyProfile.vue'
import ApplicationTokenManager from './pages/ApplicationTokenManager.vue'
import Orders from './pages/Orders.vue'
import ApiEndpoint from '@/pages/ApiEndpoint.vue'
import ApiKeys from '@/pages/ApiKeys.vue'
import ResetPassword from '@/pages/ResetPassword.vue'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/generate-api-key', name: 'GenerateApikey', component: GenerateApikey },
  { path: '/my-profile', name: 'MyProfile', component: MyProfile },
  { path: '/application-token-manager', name: 'ApplicationTokenManager', component: ApplicationTokenManager },
  { path: '/orders', name: 'Orders', component: Orders },
  { path: '/api-endpoint', name: 'ApiEndpoint', component: ApiEndpoint },
  { path: '/api-keys', name: 'ApiKeys', component: ApiKeys },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPassword },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router