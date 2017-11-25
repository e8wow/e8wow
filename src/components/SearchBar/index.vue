<template>
    <div :class="prefixCls">
        <div :class="`${prefixCls}-address`">珠海</div>
        <div :class="`${prefixCls}-search-box`">
            <div v-if="!isFocus&&!text" :class="`${prefixCls}-search-box-placeholder`" @click="$refs.search.focus()">
                <img :class="`${prefixCls}-search-box-placeholder-icon`" src="./assets/search.png" alt="">搜索宠物种类/宠物名
            </div>
            <input v-model="text" @focus="focus" @blur="blur" ref="search" type="search">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            prefixCls: {
                type: String,
                default: 'e8ui-search-bar'
            }
        },
        data () {
            return {
                isFocus: false,
                text: ''
            }
        },
        methods: {
            focus () {
                this.isFocus = true
            },
            blur () {
                this.isFocus = false
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
        height: 100px;
        background-color: $cyan-color;
        padding: 0 25px; /*px*/
        &-address {
            color: #fff;
            font-size: 28px; /*px*/
        }
        &-search-box {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background-color: $cyan-1;
            border-radius: 750px;
            margin-left: 25px; /*px*/
            input[type=search] {
                padding: 15px 25px;
                width: 100%;
                color: #fff;
                text-align: center;
                &::-webkit-search-cancel-button {
                    display: none;
                }
            }
            &-placeholder {
                position: absolute;
                color: #fff;
                display: flex;
                align-items: center;
                &-icon {
                    width: 35px;
                    margin-right: 10px; /*px*/
                }
            }
        }
    }
</style>
