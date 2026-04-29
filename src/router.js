import { createRouter, createWebHistory } from 'vue-router'
import Index from './Pages/Index.vue'

const routes = [
  { path: '/', name: 'Index', component: Index }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router