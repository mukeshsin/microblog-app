<template>
  <div>
    <form>
      <h1 class="searchTag">Search hashtag</h1>
      <input class="inputField" type="text" v-model="searchTerm" />
    </form>
    <div class="cardWrapper">
      <blogCard v-for="blogData in blogDatas" :key="blogData.id">
        <template v-slot:title>{{ blogData.title }}</template>
        <template v-slot:description>{{ blogData.description }}</template>
        <template v-slot:footer>
          <div class="likes">
            <div class="icon" @click="increaseLike(blogData.id)">
              <i class="fa-sharp fa-solid fa-heart"></i>
            </div>
            <p>{{ blogData.like }}</p>
          </div>
          <div v-for="hashtag in blogDatas.hashtags" :key="hashtag">{{ hashtag }}</div>
        </template>
      </blogCard>
    </div>
  </div>
</template>

<script>

import  blogCard  from "./components/cards.vue";

export default {
  name: "App",
  components: {
    blogCard
  },
  data() {
    return {
      blogDatas: [
          {
            id: 1,
            title: "Learning Vue js 3",
            content:
              "I am Learning Vue js 3 with the composition API.it is great",
            like: 5,
            hashtags: ["#Vue", "#Javascript", "#CompositionApi"],
          },
          {
            id: 2,
            title: "Learning Vuex",
            content:
              "vuex is a state management solution for Vue .its allows you to logically separate entities into Modules.",
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
            content:
              "I am writing Some Tests for My application using test utils. Testing is critical but often overlooked due to complexity or time constraints",
            like: 1,
            hashtags: ["#Vue", "#Javascript", "#Testing"],
          },
        ],
      searchTerm: "",
    };
  },
 
};
</script>

<style>
.cardWrapper {
  border: 2px solid black;
  width: 200px;
  height: 300px;
}
</style>
