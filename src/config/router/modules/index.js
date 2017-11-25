const Index = (resolve) => { require(['@/pages/index.vue'], resolve) }
const Home = (resolve) => { require(['@/pages/index/home.vue'], resolve) }

export default {
    path: '/',
    component: Index,
    redirect: {name: 'home'},
    children: [{
        name: 'home',
        path: 'home',
        component: Home
    }]
}
