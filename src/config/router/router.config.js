import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        //     {
        //     path: '/',
        //     component: (resolve) => {
        //         require(['@/pages/index.vue'], resolve)
        //     },
        //     children: []
        // }
    ],
    mode: 'history',
    scrollBehavior () {
        return {x: 0, y: 0}
    }
})
