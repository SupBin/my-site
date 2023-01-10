<template>
  <div class="site-aside-container">
    <Avatar :url="person" />
    <h1 class="title">Dd</h1>
    <Menu />
    <Contact />
    <p class="footer">
      粤ICP备88888888号
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import person from "@/assets/person.jpg";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  data(){
    return{
      person,
    }
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container img{
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
