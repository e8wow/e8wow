<template>
    <div class="e8wow-index">
        <keep-alive>
            <router-view class="content"></router-view>
        </keep-alive>
        <tab-bar>
            <tab-bar-item path="/home">
                <img slot="icon" src="../assets/icons/home.png" alt="">
                首页
            </tab-bar-item>
            <tab-bar-item path="/classification">
                <img slot="icon" src="../assets/icons/home.png" alt="">
                分类
            </tab-bar-item>
            <tab-bar-item path="/message">
                <img slot="icon" src="../assets/icons/home.png" alt="">
                消息
            </tab-bar-item>
            <tab-bar-item path="/personal-center">
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

<style lang="scss">
    .e8wow-index {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        .content {
            flex: 1;
        }
    }
</style>
