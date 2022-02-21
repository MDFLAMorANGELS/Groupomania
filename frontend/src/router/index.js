import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Accueil',
    name: 'Accueil',
    component: () => import('../views/Accueil.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
