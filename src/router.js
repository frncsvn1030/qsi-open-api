import { createRouter, createWebHistory } from 'vue-router'
import Index from './Pages/HomePage/Index.vue'
import DefaultLayout from './Layouts/DefaultLayout.vue'
import APIEndpoint from './Pages/Playground/ApiEndpoint.vue'

const routes = [
  { path: '/', name: 'Index', component: Index },
  { path: '/api-endpoint', name: 'APIEndpoint', component: APIEndpoint }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router