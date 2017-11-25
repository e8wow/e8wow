<template>
    <div :class="prefixCls">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            prefixCls: {
                type: String,
                default: 'e8ui-tab-bar'
            }
        }
    }
</script>

<style lang="scss">
    $prefixCls: 'e8ui-tab-bar';
    .#{$prefixCls} {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 90px;
        background-color: #eee;
        border-top: 1px solid #ccc; /*px*/
    }
</style>
