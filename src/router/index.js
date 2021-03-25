import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/',
      component: () => import('@/Home.vue')
    },
    {
      name: 'CNY',
      path: '/cny',
      component: () => import('@/CNY.vue')
    },
    {
      name: 'USD',
      path: '/usd',
      component: () => import('@/USD.vue')
    },
    {
      name: 'HKD',
      path: '/hkd',
      component: () => import('@/HKD.vue')
    },
    {
      name: 'JPD',
      path: '/jpd',
      component: () => import('@/JPD.vue')
    }
  ]
})
