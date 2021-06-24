<!--
 * @Author: your name
 * @Date: 2021-06-08 21:51:11
 * @LastEditTime: 2021-06-08 22:48:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-site\src\components\Empty\index.vue
-->
<template>
  <div class = 'empty-container'>
      <Icon type="empty" />
        <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon/index.vue'
export default {
    components:{
        Icon
    },
    props:{
        text:{
            type:String,
            default:'无数据'
        }
    }
}
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";
    @import "~@/styles/mixin.less";
    .empty-container{
        .self-position();
        color:@gray;
        text-align: center;
        .icon-container{
            font-size:75px;
            
        }
    }
    

</style>
