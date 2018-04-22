// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Commen from './assets/js/utils.js'


// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'

// Vue.use(ElementUI)

Vue.use(Commen)
Vue.use(MintUI)

import './assets/css/reset.css'

require('animate.css')

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
