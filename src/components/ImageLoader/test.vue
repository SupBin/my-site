<!--
 * @Author: your name
 * @Date: 2021-06-09 22:05:26
 * @LastEditTime: 2021-06-09 22:48:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-site\src\components\ImageLoader\test.vue
-->

<template>
  <div class="container"> 
      <ImagerLoader 
        src="https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/72f082025aafa40f2982756baa64034f78f0193b.jpg"
        placeholder="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F587040f21f9c1.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625841408&t=6eb4be0cc4754022e18f92c6a400c3fa"
        
      />
  </div>
</template>

<script>
import ImagerLoader from '@/components/ImageLoader/index.vue'
export default {
  components: {
    ImagerLoader
  },
  data(){
    return{
        
    }
  },
  methods:{
      
  }
}
</script>
<style scoped lang="css">
    .container{
        border:1px solid gray;
        width:400px;
        height:500px;
        margin:0 auto;
    }
</style>



