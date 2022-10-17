<template>
    <the-header>
        <search-bar ref="search" @keydown.enter="getWordInfo"></search-bar>
        <div class="btn header__btn" @click="getWordInfo">Search</div>
    </the-header>
    <main>
        <the-dictionary
            :word-response="wordResponse"
            :error-response="errorResponse"
        ></the-dictionary>
    </main>
</template>

<script>
import TheDictionary from "@/components/TheDictionary";
import TheHeader from "@/components/Header/TheHeader";
import SearchBar from "@/components/SearchBar";

export default {
    name: 'App',
    components: {
        TheDictionary,
        TheHeader,
        SearchBar
    },
    data() {
        return {
            wordResponse: [],
            errorResponse: '',
        }
    },
    methods: {
        getWordInfo() {
            this.axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/' + this.$refs.search.$el.value)
                .then(response => {
                    this.errorResponse = '';
                    this.wordResponse = response.data[0];
                })
                .catch(error => {
                    this.errorResponse = 'Bad Request :(';
                    throw new Error(error.message);
                })
        }
    },
}
</script>

<style lang="scss">
@import "assets/scss/style.scss";
</style>
