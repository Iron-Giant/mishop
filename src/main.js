import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLazyLoad from "vue-lazyload";
import VueCookie from "vue-cookie";
import { Message, Icon, Form, FormItem, Input } from "element-ui";

Vue.use(VueAxios, axios);

Vue.use(VueLazyLoad, {
  loading: "/imgs/loading-svg/loading-bars.svg",
});

Vue.use(VueCookie);

Vue.use(Icon);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

Vue.prototype.$message = Message;

axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

// 接口错误拦截
axios.interceptors.response.use(
  response => {
    let res = response.data;
    if (res.status == 0) {
      return res.data;
    } else if (res.status == 10) {
      window.location.href = "/#/login";
      return Promise.reject(res);
    } else {
      Message.warning(res.msg);
      return Promise.reject(res);
    }
  },
  error => {
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error);
  }
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
