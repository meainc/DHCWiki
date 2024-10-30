import { createRouter, createWebHistory } from 'vue-router'
import WikiHome from '../views/WikiHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WikiHome
    },
    {
      path: '/DHCDetails',
      name: 'DHCDetails',
      component: () => import('../views/DHCDetails.vue')
    },
    
  ]
})

export default router
