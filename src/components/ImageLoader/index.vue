<template>
  <div>
    <img 
      :src="url" 
      @load="handleLoad"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    >
  </div>
</template>

<script>
export default {
  props:{
    url:{
      type:String,
      require:true
    },
    placeholder:{
      type:String,
      require:true
    },
    duration:{
      type:Number,
      default:3000
    },
  },
  data(){
    return{
      originLoaded:false, //原图是否加载成功
      everythingDone:false //所有的事情是否已经完成
    }
  },
  computed:{
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods:{
    handleLoad(){
      this.originLoaded = true;
      setTimeout(() => {
        this.everythingDone = true
      }, 3000);
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw);
  }
}
</style>