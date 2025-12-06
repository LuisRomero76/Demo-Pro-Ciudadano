import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import DetalleTramiteView from '../views/DetalleTramiteView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/tramite/licencia',
      name: 'tramite-licencia',
      component: DetalleTramiteView,
      props: { id: 'licencia' },
    },
    {
      path: '/tramite/permiso-evento',
      name: 'tramite-permiso-evento',
      component: DetalleTramiteView,
      props: { id: 'permiso_evento' },
    },
    {
      path: '/tramite/certificado-estrato',
      name: 'tramite-certificado-estrato',
      component: DetalleTramiteView,
      props: { id: 'certificado_estrato' },
    },
    {
      path: '/tramite/:id',
      name: 'detalle-tramite',
      component: DetalleTramiteView,
    },
  ],
})

export default router
