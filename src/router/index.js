import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainLayout,
    children: [
      {
        path: '',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'arsip',
        component: () => import('../views/ArsipView.vue'),
      },
      {
        path: ':idKegiatan/:namaKegiatan',
        component: () => import('../views/DetailKegiatanView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
