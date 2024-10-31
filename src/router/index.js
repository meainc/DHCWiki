import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import WikiHome from '../views/WikiHome.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
    {
      path: '/YangXuan',
      name: 'YangXuan',
      component: () => import('../views/YangXuan.vue')
    },
    
    
  ]
})

export default router
