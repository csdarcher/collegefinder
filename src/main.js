// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './Router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGraduationCap, faGlasses, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAnalytics from 'vue-analytics'
import es6Promise from 'es6-promise' 

// IE 11 code
es6Promise.polyfill()

library.add(faGraduationCap, faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-125015556-1',
  autotracking: {
    exception: true
  },
  router
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
