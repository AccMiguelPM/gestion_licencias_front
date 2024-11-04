import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/monitoring',
      name: 'monitoring',
      component: () => import('../views/monitoring/Monitoring.vue')
    },
  ]
})

export default router
