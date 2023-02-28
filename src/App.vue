<template>
<div>
    <form>
        <label>Search hashtag: #</label>
        <input class="inputField" type="text" v-model="searchTerm" @keyup="debounceSearch" />
    </form>
    <div class="cardWrapper">
        <blogCard v-for="blogData in filteredBlogDatas" :key="blogData.id">
            <template v-slot:title>{{ blogData.title }}</template>
            <template v-slot:content>{{ blogData.content }}</template>
            <template v-slot:likes>
                <div class="icon" @click="increaseLike(blogData.id)">
                    <i class="fa-sharp fa-solid fa-heart"></i>
                    <p class="numbLike">{{ blogData.like }}</p>
                </div>
            </template>
            <template v-slot:topics>
                <div v-for="topic in blogData.topics" :key="topic.id">
                    <span @click="hashTag(topic)"> {{ topic }}</span>
                </div>
            </template>
        </blogCard>
    </div>
</div>
</template>

<script>
import {
    computed
} from 'vue';
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
            selectedTopic,
            timer,
            increaseLike,
            debounceSearch
        } = blogData();

        const filteredBlogDatas = computed(() => {
            const searchTermLower = searchTerm.value.toLowerCase()
            if (selectedTopic.value) {
                return blogDatas.value.filter((blogData) =>
                    blogData.topics.includes(selectedTopic.value)
                );
            } else {
                return blogDatas.value.filter((blogData) =>
                    blogData.topics.some((topic) => topic.toLowerCase().includes(searchTermLower))
                );
            }
        });

        const hashTag = (topic) => {
            selectedTopic.value = topic;
            searchTerm.value = '';
        };

        return {
            blogDatas,
            searchTerm,
            selectedTopic,
            timer,
            increaseLike,
            debounceSearch,
            filteredBlogDatas,
            hashTag,
        };
    },
};
</script>

<style>
.cardWrapper {
    display: flex;

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
