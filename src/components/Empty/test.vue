<template>
  <div class="test-container">
    <Empty/>
  </div>
</template>

<script>
import Empty from "./index";
export default {
  components: {
    Empty,
  },
};
</script>

<style>
  .test-container{
    width:500px;
    height:500px;
    position: relative;
  }
</style>