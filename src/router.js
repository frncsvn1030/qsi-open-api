import { createRouter, createWebHistory } from 'vue-router'
import Index from './Pages/HomePage/Index.vue'
import ApiEndpoint from './Pages/Playground/ApiEndpoint.vue'
import ApiKeys from './Pages/ApiKeys/ApiKeys.vue'

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