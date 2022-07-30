import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bancos',
      name: 'Bancos',
    
      component: () => import('../views/BancosView.vue')
    },
    {
      path: '/solicitacoes',
      name: 'Solicitações',
    
      component: () => import('../views/SolicitacaoView.vue')
    },
    {
      path: '/parcelas',
      name: 'Parcelas',
    
      component: () => import('../views/ParcelasView.vue')
    },
  ]
})

export default router
