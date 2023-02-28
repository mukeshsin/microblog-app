import { ref, computed } from "vue";

export const blogData = () => {
  const fetchData = async () => {
    let res = await fetch(
      "https://mockend.com/meanstack9716/jsonAPIData/posts"
    );
    let data = await res.json();
    console.log(data);
    return data;
  };

  const blogDatas = ref([]);
  fetchData().then((data) => {
    blogDatas.value = data;
  });

  const searchTerm = ref("");
  const selectedHashtag = ref(null);
  const timer = ref(null);

  const filteredBlogDatas = computed(() => {
    const searchTermLower = searchTerm.value.toLowerCase();
    const selectedHashtagLower = selectedHashtag.value ? selectedHashtag.value.toLowerCase() : null;
  
    if (selectedHashtagLower !== null) {
      return blogDatas.value.filter((blogData) =>
        blogData.hashtag.toLowerCase().includes(selectedHashtagLower)
      );
    } else {
      return blogDatas.value.filter((blogData) =>
        blogData.hashtag.toLowerCase().includes(searchTermLower)
      );
    }
  });
  
  const hashTag = (key) => {
    selectedHashtag.value = key;
    searchTerm.value = "";
  };

  const increaseView = (key) => {
    blogDatas.value[key - 1].views += 1;
  };

  const debounceSearch = () => {
    clearTimeout(timer.value);
    timer.value = setTimeout(() => {
      selectedHashtag.value = null;
    }, 500);
  };

  return {
    blogDatas,
    searchTerm,
    selectedHashtag,
    timer,
    increaseView,
    debounceSearch,
    hashTag,
    filteredBlogDatas,
  };
};

