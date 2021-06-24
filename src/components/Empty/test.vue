<!--
 * @Author: your name
 * @Date: 2021-06-08 21:51:18
 * @LastEditTime: 2021-06-08 22:32:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-site\src\components\Empty\test.vue
-->
<template>
  <div class="container"> 
      <Empty />
  </div>
</template>

<script>
import Empty from './'
export default {
  components: {
    Empty
  },
  data(){
  },
  methods:{
    
  }
}
</script>
<style scoped>
 .container{
     width:800px;
     height:500px;
     border:1px solid gray;
     position: relative;
     margin: 0 auto;
 }
</style>
