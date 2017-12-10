<template>
    <swiper ref="swiper" :class="prefixCls" :options="options">
        <div :class="`${prefixCls}-refresh`">下拉刷新</div>
        <swiper-slide :class="`${prefixCls}-container`">
            <slot></slot>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        components: {swiper, swiperSlide},
        props: {
            prefixCls: {
                type: String,
                default: 'e8ui-scroll-view'
            }
        },
        computed: {
            swiper () {
                return this.$refs.swiper.swiper
            }
        },
        data () {
            return {
                options: {
                    slidesPerView: 'auto',
                    freeMode: true,
                    direction: 'vertical',
                    setWrapperSize: true,
                    roundLengths: true,
                    autoHeight: true,
                    scrollbar: {
                        el: '.swiper-scrollbar'
                    },
                    on: {
                        touchEnd: function () {
                            if (this.translate > window.lib.flexible.dpr * 0.5 * 120) {
                                this.setTransition(this.params.speed)
                                this.setTranslate(window.lib.flexible.dpr * 0.5 * 80)
                                this.touchEventsData.isTouched = false
                            }
                        },
                        touchStart: function () {},
                        momentumBounce: function () {}
                    }
                }
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    @import "../../styles/base/base";

    $prefixCls: 'e8ui-scroll-view';
    .#{$prefixCls} {
        background-color: #eee;
        &-refresh {
            position: absolute;
            line-height: 80px; /*px*/
            bottom: 100%;
            text-align: center;
            width: 100%;
        }
        &-container {
            height: 100%;
            background-color: #fff;
        }
        .swiper-scrollbar {
            border-radius: 0;
            background-color: transparent;
            right: 0;
            top: 0;
            height: 100%;
            &-drag {
                border-radius: 0;
                background-color: #ccc;
            }
        }
    }
</style>
