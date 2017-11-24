<template>
    <div id="app">1
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style lang="scss">
    @import "styles/base/base";

    html, body {
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
