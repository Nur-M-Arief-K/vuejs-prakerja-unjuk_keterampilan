import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layout/MainLayout.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'mainLayout',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'homeView',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'arsip',
        name: "arsipView",
        component: () => import('../views/ArsipView.vue'),
      },
      {
        path: ':kategoriKegiatan/:indexKegiatan',
        name: "detailKegiatanView",
        component: () => import('../views/DetailKegiatanView.vue'),
      },
      {
        path: ':catchAll(.*)',
        redirect: to => {
          return { path: '/' }
        },
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (to.name == 'detailKegiatanView') {
    if (typeof store.getters.getItemKegiatan({ kategoriKegiatan: to.params.kategoriKegiatan, indexKegiatan: to.params.indexKegiatan }) == 'undefined') {
      return "/"
    }
  }
})

export default router
