<template>
    <div class="e8wow-home">
        <search-bar v-model="searchText" address="珠海" placeholder="搜索宠物种类/宠物名"/>
    </div>
</template>

<script>
    import SearchBar from '../../components/SearchBar/index.vue'

    export default {
        components: {SearchBar},
        data () {
            return {
                searchText: ''
            }
        }
    }
</script>

<style>

</style>
