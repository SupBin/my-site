<!--
 * @Author: your name
 * @Date: 2021-04-04 09:39:10
 * @LastEditTime: 2021-04-18 16:08:18
 * @Description: 头像组件   url   size
 * @FilePath: \my-site\src\components\Avatar.vue
-->
<template>
    <img 
        class="avatar-container"
        :src="url" 
        :style="{
            width:size+'px' ,
            height:size+'px'
    }">
</template>

<script>
export default {
    props:{
        url:{
            type:String,
            require:true
        },
        size:{
            type:Number,
            default:150
        }
    }
}
</script>

<style scoped>
    .avatar-container{
        border-radius:50%;
        display: block;
    }
</style>