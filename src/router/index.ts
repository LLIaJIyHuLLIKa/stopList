import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import MainPage from '../components/MainPage.vue';
import StopList from '../components/StopList.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: MainPage,
    meta: {
      breadcrumbs: [{
        name: 'Главная'
      }]
    }
  },
  {
    path: '/stopList',
    name: 'Stop List',
    component: StopList,
    meta: {
      breadcrumbs: [
        {link: '/', name: 'Главная'},
        {name: 'Стоп-лист'}
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
