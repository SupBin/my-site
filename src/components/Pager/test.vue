<!--
 * @Author: your name
 * @Date: 2021-06-08 20:45:39
 * @LastEditTime: 2021-06-08 20:54:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-site\src\components\Pager\test.vue
-->


<template>
  <div id="app"> 
    <Pager  :current = current :total="100" :visibleNumber="6"  :limit="10" @changePage="handleChangePage($event)"/>
  </div>
</template>

<script>
import Pager from './index.vue'
export default {
  components: {
    Pager
  },
  data(){
    return{
      current:2
    }
  },
  methods:{
    //改变当前页面
    handleChangePage(index){
      this.current = index;
    }
  }
}
</script>


