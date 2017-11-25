const Index = (resolve) => {
    require(['@/pages/index.vue'], resolve)
}

export default {
    path: '/',
    component: Index,
    children: []
}
