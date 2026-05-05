import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import GenerateApikey from '@/pages/GenerateApiKey.vue'
import MyProfile from './pages/MyProfile.vue'
import ApiEndpoint from '@/pages/ApiEndpoint.vue'
import ApiKeys from '@/pages/ApiKeys.vue'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/generate-api-key', name: 'GenerateApikey', component: GenerateApikey },
  { path: '/my-profile', name: 'MyProfile', component: MyProfile },
  { path: '/api-endpoint', name: 'ApiEndpoint', component: ApiEndpoint },
  { path: '/api-keys', name: 'ApiKeys', component: ApiKeys }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router