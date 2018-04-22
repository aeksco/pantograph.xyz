import Vue from 'vue'
import Router from 'vue-router'
import MainHome from '@/containers/main_home'

// Vue Router setup
Vue.use(Router)

// Exports new Router instance
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: MainHome
  }]
})
