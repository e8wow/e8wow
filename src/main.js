import 'core-js/es6/promise'
// import 'core-js/es6/object'
import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import axios from './config/axios/axios.config'

/* flexible */
import 'lib-flexible'
import './styles/flexible.css'

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
