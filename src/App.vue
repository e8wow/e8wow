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
        position: relative;
    }

    input {
        appearance: none;
        background-color: transparent;
        border-color: transparent;
    }

    ::selection {
        color: $cyan-color;
        background-color: $primary-color;
    }
</style>
