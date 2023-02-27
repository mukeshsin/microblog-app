import { ref } from "vue";

export const blogData = () => {
  const blogDatas = ref([
    {
      id: 1,
      title: "Learning Vue js 3",
      content: "I am Learning Vue js 3 with the composition API.it is great",
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
  ]);

  const searchTerm = ref("");
  const selectedHashtag = ref(null);
  const timer = ref(null);

  const increaseLike = (id) => {
    const blogData = blogDatas.value.find((data) => data.id === id);
    blogData.like++;
  };

  const debounceSearch = () => {
    clearTimeout(timer.value);
    timer.value = setTimeout(() => {
      selectedHashtag.value = searchTerm.value;
    }, 500);
  };

  return {
    blogDatas,
    searchTerm,
    selectedHashtag,
    timer,
    increaseLike,
    debounceSearch,
  };
};
