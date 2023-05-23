import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/Home.vue')
    },
    {
      path: '/alkohol',
      name: 'alkohol',
      component: () => import('../pages/Alkohol.vue')
    }
  ],
  linkActiveClass: 'activated-link',
})

export default router
