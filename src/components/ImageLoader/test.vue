<template>
  <div class="test-container">
    <ImageLoader :url="url" :placeholder="placeholder"/>
  </div>
</template>

<script>
import ImageLoader from "./index";
export default {
  data(){
    return{
      url:"https://img2.woyaogexing.com/2023/01/09/23c11cc8f2a11a20c0460fe3b47cda3b.jpeg",
      placeholder:"https://img2.woyaogexing.com/2023/01/09/e09a084baf58d9e4c1581b51f39b8b66.jpeg",
      duration:"2000"
    }
  },
  components: {
    ImageLoader,
  },
};
</script>

<style>
</style>