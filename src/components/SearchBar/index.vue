<template>
    <div :class="prefixCls">
        <div :class="`${prefixCls}-address`">{{address}}</div>
        <div :class="`${prefixCls}-search-box`">
            <div v-show="placeholder&&!isFocus&&!value" :class="`${prefixCls}-search-box-placeholder`">
                <img :class="`${prefixCls}-search-box-placeholder-icon`" src="./assets/search.png" alt="搜索">{{placeholder}}
            </div>
            <input @input="input" :value="value" @focus="isFocus=true" @blur="isFocus=false" ref="search"
                   type="search">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            prefixCls: {
                type: String,
                default: 'e8ui-search-bar'
            },
            address: String,
            placeholder: String,
            value: String
        },
        data () {
            return {
                isFocus: false
            }
        },
        methods: {
            input (event) {
                this.$emit('input', event.target.value)
            }
        }
    }
</script>

<style lang="scss">
    @import "../../styles/base/base";

    $prefixCls: 'e8ui-search-bar';
    .#{$prefixCls} {
        display: flex;
        align-items: center;
        flex: 0 0 100px;
        background-color: $cyan-color;
        padding: 0 25px; /*px*/
        &-address {
            color: #fff;
            font-size: 28px; /*px*/
        }
        &-search-box {
            flex: 1;
            position: relative;
            background-color: $cyan-1;
            border-radius: 750px;
            margin-left: 25px; /*px*/
            input[type=search] {
                padding: 15px 25px; /*px*/
                width: 100%;
                color: #fff;
                text-align: center;
                &::-webkit-search-cancel-button {
                    display: none;
                }
            }
            &-placeholder {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate3d(-50%, -50%, 0);
                color: #fff;
                display: flex;
                align-items: center;
                pointer-events: none;
                &-icon {
                    width: 35px;
                    margin-right: 15px; /*px*/
                    margin-left: -30px; /*px*/
                }
            }
        }
    }
</style>
