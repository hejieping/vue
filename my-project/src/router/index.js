import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Element from '@/components/Element'
import Adminlte from '@/components/Adminlte'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Adminlte',
      component: Adminlte
    }
  ]
})
