<!--
 * @Author: your name
 * @Date: 2021-04-04 11:04:28
 * @LastEditTime: 2021-06-08 21:48:02
 * @LastEditors: Please set LastEditors
 * @Description: type 传入图标名称
 * @FilePath: \my-site\src\components\Icon.vue
-->

<template>
  <i class="iconfont icon-container" :class="iconType"></i>
</template>

<script>

const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export const types = Object.keys(classMap);
export default {
    props:{
        type:{
            type:String,
            require:true
        }
    },
    computed:{
        iconType(){
            return classMap[this.type];
        }
    }

    
}
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
    .iconfont{
        color: inherit;       /* 组件继承父组件的颜色和大小 */
        font-size: inherit;
    }
</style>