import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/monitoring',
      name: 'monitoring',
      component: () => import('../views/monitoring/Monitoring.vue')
    },
    {
      path: '/',
      name: 'gestion_licencias',
      component: () => import('../views/GestionLicencias/GestionLicencias.vue')
    },
  ]
})

export default router
