<template>
  <div id="app" class="app-container">
    <Layout>
      <template #left>
        <SiteAside/>
      </template>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout"
import SiteAside from "@/components/SiteAside";
export default{
  components:{
    Layout,
    SiteAside
  }
}
</script>

<style lang="less" scoped>
  @import '~@/styles/mixin.less';
  
  .app-container{
    .self-fill(fixed);
  }
</style>