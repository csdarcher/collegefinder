import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CollegeList from '@/components/CollegeList'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, 
    {  
      path: '/CollegeList',
      name: 'CollegeList',
      component: CollegeList
    }
]
})