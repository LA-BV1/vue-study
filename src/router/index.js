import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import ListPage from '@/components/ListPage.vue'
import EditPage from '@/components/EditPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/list',
      name: 'ListPage',
      component: ListPage
    },
    {
      path: '/edit/:id',
      name: 'EditPage',
      component: EditPage
    },
    {
      path: '/create',
      name: 'EditPage',
      component: EditPage
    }
  ]
})
