<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <tab-bar>
            <tab-bar-item>1</tab-bar-item>
            <tab-bar-item>2</tab-bar-item>
            <tab-bar-item>3</tab-bar-item>
            <tab-bar-item>4</tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import { TabBar, TabBarItem } from './components/TabBar/index'

    export default {
        name: 'app',
        components: {TabBar, TabBarItem}
    }
</script>

<style lang="scss">
    @import "styles/base/base";

    html, body {
        width: 100%;
        height: 100%;
    }

    #app {
        min-height: 100%;
    }

    ::selection {
        color: #00a9b6;
        background-color: $primary-color;
    }
</style>
