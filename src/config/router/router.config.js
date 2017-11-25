import Vue from 'vue'
import Router from 'vue-router'

import index from './modules/index'

Vue.use(Router)

export default new Router({
    routes: [index],
    mode: 'history',
    scrollBehavior () {
        return {x: 0, y: 0}
    }
})
