import "./mock";

import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less";
Vue.config.productionTip = false;
import router from "@/components/router";
import showMessage from "./utils/showMessage";

Vue.prototype.$showMessage = showMessage;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
