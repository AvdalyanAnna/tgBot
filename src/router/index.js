import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import pinia from '@/stores/store';
import {useCityStore} from '@/stores/city'
import {useUserStore} from '@/stores/user'

const baseUrl = import.meta.env.BASE_URL
const history = import.meta.env.SSR ? createMemoryHistory(baseUrl) : createWebHistory(baseUrl)

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path:'/order',
      component: () => import('../views/MyOrder.vue'),
    },
    {
      path:'/history',
      component: () => import('../views/PageHistory.vue'),
    },
    {
      path:'/payments',
      component: () => import('../views/PagePayments.vue'),
    }
    // {
    //   path: "/:catchAll(.*)",
    //   component: () => import('../views/NotFound.vue'),
    // },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth'}
  },
})

router.beforeEach((to, from) => {
  const cityStore = useCityStore(pinia)
  const isCurrentAccount = from.path.includes("account") ? true : false
  const isTargetPathAccount = to.path.includes("account") ? true : false
  if( isCurrentAccount != isTargetPathAccount) {
    const userStore = useUserStore(pinia)
    userStore.updateLoginStatus(isTargetPathAccount)
  }
  // if (!cityStore.isLoggedIn && isTargetPathAccount) {
  //   to.path = "/"
  // }
})

export default router
