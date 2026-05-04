import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/Index.vue'
import ApiEndpoint from '@/pages/ApiEndpoint.vue'
import ApiKeys from '@/pages/ApiKeys.vue'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/api-endpoint', name: 'ApiEndpoint', component: ApiEndpoint },
  { path: '/api-keys', name: 'ApiKeys', component: ApiKeys }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router