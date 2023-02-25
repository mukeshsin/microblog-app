<template>
<div>
    <form>
        <label>Search hashtag :</label>
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
            <template v-slot:hashTags>
                <div v-for="hashtag in blogData.hashtags" :key="hashtag">{{ hashtag }}</div>
            </template>
        </blogCard>
    </div>
</div>
</template>

<script>
import blogCard from "./components/cards.vue";
import debounce from 'lodash/debounce';

export default {
    name: "App",
    components: {
        blogCard
    },
    data() {
        return {
            blogDatas: [{
                    id: 1,
                    title: "Learning Vue js 3",
                    content: "I am Learning Vue js 3 with the composition API.it is great",
                    like: 5,
                    hashtags: ["#Vue", "#Javascript", "#CompositionApi"],
                },
                {
                    id: 2,
                    title: "Learning Vuex",
                    content: "vuex is a state management solution for Vue .its allows you to logically separate entities into Modules.",
                    like: 3,
                    hashtags: ["#Vue", "#Vuex", "#Flux"],
                },
                {
                    id: 3,
                    title: "Routing With Vue Router",
                    content: "I am creating complex front-end app using vue-router",
                    like: 1,
                    hashtags: ["#Vue", "#VueRouter"],
                },
                {
                    id: 4,
                    title: "Testing Vue Apps",
                    content: "I am writing Some Tests for My application using test utils. Testing is critical but often overlooked due to complexity or time constraints",
                    like: 1,
                    hashtags: ["#Vue", "#Javascript", "#Testing"],
                },
            ],

            searchTerm: "",
            selectedHashtag: null,

        };
    },
    computed: {
        filteredBlogDatas() {
            if (this.selectedHashtag) {
                return this.blogDatas.filter((blogData) =>
                    blogData.hashtags.includes(this.selectedHashtag)
                );
            } else {
                return this.blogDatas.filter((blogData) =>
                    blogData.hashtags.some((hashtag) =>
                        hashtag.includes(this.searchTerm)
                    )
                );
            }
        },
    },
    methods: {
        increaseLike(id) {
            const blogData = this.blogDatas.find((data) => data.id === id);
            blogData.like++;
        },

        debouncedSearch: debounce(function () {
            this.selectedHashtag = this.searchTerm;
        }, 500),

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
