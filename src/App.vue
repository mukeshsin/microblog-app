<template>
<div>
    <form>
        <label>Search hashtag: #</label>
        <input class="inputField" type="text" v-model="searchTerm" @keyup="debounceSearch" />
    </form>
    <div class="cardWrapper">
        <blogCard v-for="blogData in filteredBlogDatas" :key="blogData.id">
            <template v-slot:title>{{ blogData.title }}</template>
            <template v-slot:body>{{ blogData.body }}</template>
            <template v-slot:view>
                <div class="icon" @click="increaseView(blogData.id)">
                    <i class="fa-sharp fa-solid fa-heart"></i>
                    <p class="numbLike">{{ blogData.views }}</p>
                </div>
            </template>
            <template v-slot:hashtag>
                <span @click="hashTag(blogData.hashtag)">#{{ blogData.hashtag }}</span>
            </template>
        </blogCard>
    </div>
</div>
</template>

<script>
import {
    blogData
} from './components/microblog.js';
import blogCard from './components/cards.vue';

export default {
    name: 'App',
    components: {
        blogCard,
    },
    setup() {
        const {
            blogDatas,
            searchTerm,
            selectedHashtag,
            timer,
            increaseView,
            debounceSearch,
            filteredBlogDatas,
            hashTag,
        } = blogData();

        return {
            blogDatas,
            searchTerm,
            selectedHashtag,
            timer,
            increaseView,
            debounceSearch,
            filteredBlogDatas,
            hashTag

        };
    },
};
</script>

<style>
.cardWrapper {
    display: flex;
    flex-wrap: wrap;
}

.adjustInput {
    margin-left: 30px;
    margin-bottom: 50px;
}

.inputField {
    border: none;
    border-bottom: 2px solid black;
}

.searchTag {
    font-size: 20px;
    font-family: Arial;
    margin-top: 20px;
}

.icon i {
    color: red;
}

form {
    margin-left: 10px;
    margin-top: 10px;
    font-weight: bold;
}

label {
    font-size: 18px;
}

input {
    border: none;
    border-bottom: 1px solid black;
    height: 18px;
    margin-left: 5px;
    font-size: 15px
}
</style>
