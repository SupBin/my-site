<template>
  <div id="app">
    <Pager :current="current" @handleChangeNumber="changeNumber"/>
  </div>
</template>

<script>
import Pager from "./"
export default{
  components:{
    Pager
  },
  data(){
    return{
      current:1,
    }
  },
  methods:{
    changeNumber(newPage){
      this.current = newPage;
    }
  }
}
</script>

<style>

</style>