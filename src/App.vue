<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
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
