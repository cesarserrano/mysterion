import Vue from 'vue'
import Router from 'vue-router'
import mysterion from '@/components/mysterion'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mysterion',
      component: mysterion
    }
  ]
})
