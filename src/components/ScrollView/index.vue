<template>
    <swiper ref="swiper" :class="prefixCls" :options="options">
        <div v-if="refreshMode" :class="`${prefixCls}-refresh`">下拉刷新</div>
        <swiper-slide :class="`${prefixCls}-container`">
            <slot></slot>
            <div v-if="loadMode" :class="`${prefixCls}-load`">加载中...</div>
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
            },
            refreshMode: Boolean,
            loadMode: Boolean
        },
        computed: {
            swiper () {
                return this.$refs.swiper.swiper
            }
        },
        data () {
            const load = () => {
                if (this.loadMode && this.swiper.wrapperEl.clientHeight + this.swiper.translate - this.swiper.height - window.lib.flexible.dpr * 0.5 * 80 <= 0) {
                    console.log('//TODO 加载...')
                    this.$emit('loading')
                }
            }
            return {
                options: {
                    slidesPerView: 'auto',
                    freeMode: true,
                    direction: 'vertical',
                    setWrapperSize: true,
                    roundLengths: true,
                    autoHeight: true,
                    freeModeMomentumBounce: false,
                    scrollbar: {
                        el: '.swiper-scrollbar'
                    },
                    on: {
                        touchEnd: () => {
                            if (this.refreshMode && this.swiper.translate > window.lib.flexible.dpr * 0.5 * 120) {
                                this.$emit('refreshing')
                                this.swiper.setTransition(this.swiper.params.speed)
                                this.swiper.setTranslate(window.lib.flexible.dpr * 0.5 * 80)
                                this.swiper.touchEventsData.isTouched = false
                            }
                        },
                        touchMove: load,
                        transitionStart: load
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
        &-load {
            line-height: 80px; /*px*/
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
