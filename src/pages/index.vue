<template>
    <div class="e8wow-index">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <tab-bar>
            <tab-bar-item>
                <img slot="icon" src="../assets/icons/home.png" alt="">
                首页
            </tab-bar-item>
            <tab-bar-item>
                <img slot="icon" src="../assets/icons/home.png" alt="">
                分类
            </tab-bar-item>
            <tab-bar-item>
                <img slot="icon" src="../assets/icons/home.png" alt="">
                消息
            </tab-bar-item>
            <tab-bar-item>
                <img slot="icon" src="../assets/icons/home.png" alt="">
                个人中心
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import { TabBar, TabBarItem } from '../components/TabBar/index'

    export default {
        components: {TabBar, TabBarItem}
    }
</script>

<style>
</style>
