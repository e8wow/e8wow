<template>
    <div class="e8wow-home">
        <search-bar v-model="searchText" address="珠海" placeholder="搜索宠物种类/宠物名"/>
        <scroll-view refreshMode loadMode class="scroll-view-test">
            <p v-for="i in 500">{{i}}</p>
        </scroll-view>
    </div>
</template>

<script>
    import SearchBar from '../../components/SearchBar/index.vue'
    import ScrollView from '../../components/ScrollView/index.vue'

    export default {
        components: {SearchBar, ScrollView},
        data () {
            return {
                searchText: ''
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
