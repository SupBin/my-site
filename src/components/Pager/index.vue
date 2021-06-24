<!--
 * @Author: your name
 * @Date: 2021-04-18 18:58:31
 * @LastEditTime: 2021-06-08 20:39:19
 * @LastEditors: Please set LastEditors
 * @Description: current 当前页  total 总条数  limit 页面显示条数  visibleNumber显示页码条数
 * @FilePath: \my-site\src\components\Pager.vue
-->

<template>
  <div class="pager-container" v-if="total > 0">
    <a href="#" @click="handle(1)" :class="{disable:current === 1}">&lt;&lt;</a>
    <a href="#"  @click="handle(current - 1)" :class="{disable:current === 1}">&lt;</a>

    <a href="#" @click="handle(item)" v-for="(item,index) in VisiblrArr" 
                :key="index" :class="{active:current == item}">{{item}}</a>

    <a href="#" @click="handle(current + 1)" :class="{disable : current === countPage}">&gt;</a>
    <a href="#" @click="handle(countPage)" :class="{disable : current === countPage}">&gt;&gt;</a>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
//   data(){
//       return{
//           VisiblrArr:[]
//       }
//   },
//   created(){
//       console.log(this.VisiblrArr);
//       for (let i = 1; i <= this.visibleNumber; i++) {
//           this.VisiblrArr.push(i);
//       }
//       console.log(this.VisiblrArr);
//   },
//   watch:{
//       VisiblrArr:{
//           handler(){
//             if(this.maxPage === this.countPage){
//               return
//             }else{
//                 let arr = [];
//                 for (let i = this.minPage; i <= this.maxPage; i++) {
//                     arr.push(i);
//                     }
//                 this.VisiblrArr = arr ;
//             }
//           },deep:true
          
//       }
//   },
  computed: {
    //   current 当前页  total 总条数  limit 页面显示条数  visibleNumber显示页码条数

    // 总页数
    countPage() {
      return Math.ceil(this.total / this.limit);
    },

    //得到显示最小的数字
    minPage(){
        let min = this.current - Math.floor(this.visibleNumber/2)
        if(min < 1){
            min = 1
        }
        return min;
    },
    //得到显示最大的数字
    maxPage(){
        let max = this.minPage + this.visibleNumber -1
        if(max > this.countPage){
            max = this.countPage
        }
        return max;
    },

    VisiblrArr(){
        let arr = [];
        for (let i = this.minPage; i <= this.maxPage; i++) {
            arr.push(i);
        }
        return arr;
    }

    
  },
  methods:{
      handle(newPage){
          if(newPage<1){
              newPage = 1
          }
          if(newPage > this.countPage){
              newPage = this.countPage
          }
          if(newPage === this.current){
              return
          }
          this.$emit("changePage",newPage)
      }
  }

};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
.pager-container {
  display: flex;
  justify-content: center;
  a {
    margin: 5px;
    &.disable {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      font-weight: bold;
    }
  }
}
</style>

