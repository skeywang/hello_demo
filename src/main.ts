import Vue from "vue";
// 全局引入ant-design
import Antd from "ant-design-vue";
import App from "./App.vue";
// 全局引入ant-design
import "ant-design-vue/dist/antd.less";
import router from "./router";
import store from "./store";
// 全局引入ant-design
Vue.use(Antd);
//按需引入ant-design
//import { Button, message } from 'ant-design-vue';

Vue.config.productionTip = false;
//按需引入ant-design
//Vue.use(Button);
//Vue.prototype.$message = message;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
