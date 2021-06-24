<!--
 * @Author: your name
 * @Date: 2021-06-08 21:04:36
 * @LastEditTime: 2021-06-08 21:47:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-site\src\components\Icon\test.vue
-->
<template>
  <div id="app"> 
      <div v-for="item in types" :key='item'>
          <Icon :type = "item" />
      </div>
      
  </div>
</template>

<script>
import Icon,{types} from './index.vue'
export default {
  components: {
    Icon
  },
  data(){
    return{
        types
    }
  },
  methods:{
  }
}
</script>



