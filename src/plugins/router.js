import { createRouter, createWebHistory } from 'vue-router'

export const routes = Object.freeze([
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/components/Projects.vue')
  },
  {
    path: '/issues',
    name: 'Issues',
    component: () => import('@/components/Issues.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/projects'
  }
])

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    return { left: 0, top: 0 }
  },
  routes,
})

export default router
