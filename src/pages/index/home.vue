<template>
    <div class="e8wow-home">
        <search-bar v-model="searchText" address="珠海" placeholder="搜索宠物种类/宠物名"/>
        <scroll-view ref="scrollView" bounce refreshMode loadMode @loading="loading" @refreshing="refreshing"
                     class="scroll-view-test">
            <p v-for="i in testData">{{i}}</p>
        </scroll-view>
    </div>
</template>

<script>
    import SearchBar from '../../components/SearchBar/index.vue'
    import ScrollView from '../../components/ScrollView/index.vue'

    export default {
        components: {SearchBar, ScrollView},
        data () {
            let testData = []
            for (let i = 0; i < 200; i++) {
                testData.push(i)
            }
            return {
                searchText: '',
                testData
            }
        },
        methods: {
            loading () {
                for (let i = 0; i < 10; i++) {
                    this.testData.push(this.testData.length)
                }
                this.$refs.scrollView.doneLoading()
            },
            refreshing () {
                this.testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                this.$refs.scrollView.doneRefresh()
            }
        }
    }
</script>

<style lang="scss">
    .e8wow-home {
        display: flex;
        flex-direction: column;
        .scroll-view-test {
            width: 100%;
        }
    }
</style>
