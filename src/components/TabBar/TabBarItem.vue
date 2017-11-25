<template>
    <div @click="go" :class="prefixCls">
        <div v-if="$slots.icon" :class="`${prefixCls}-icon`">
            <slot name="icon"></slot>
        </div>
        <span :class="labelCls">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            prefixCls: {
                type: String,
                default: 'e8ui-tab-bar-item'
            },
            path: {
                type: [String, Object]
            },
            replace: Boolean
        },
        computed: {
            labelCls () {
                return [
                    `${this.prefixCls}-label`,
                    {'active': this.$route.path === this.path}
                ]
            }
        },
        methods: {
            go () {
                this.$router[this.replace ? 'replace' : 'push'](this.path)
            }
        }
    }
</script>

<style lang="scss">
    @import "../../styles/base/base";

    $prefixCls: 'e8ui-tab-bar-item';
    .#{$prefixCls} {
        display: flex;
        text-align: center;
        flex-direction: column;
        flex: 1 1;
        &-icon img {
            width: 60px;
            height: 60px;
        }
        &-label {
            margin-top: -10px; /*px*/
            color: $font-primary-color;
            font-size: 20px; /*px*/
            &.active {
                color: $cyan-color;
            }
        }
    }

</style>
