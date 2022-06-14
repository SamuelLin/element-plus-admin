import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/Layout.vue'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home.vue'),
        name: 'home',
        meta: { title: 'home', icon: 'dashboard', affix: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
