<template>
    <div class="e8wow-tab-bar">
        <slot></slot>
    </div>
</template>

<script>

</script>

<style lang="scss">
    @import "../../styles/base/base";

    .e8wow-tab-bar {
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 70px;
        padding: 20px 0;
        background-color: #eee;
        border-top: 1px solid #ccc; /*px*/
    }
</style>
