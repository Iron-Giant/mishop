import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  username: "", //登录用0
  cartCount: 0, //购物车商品数量
};

const mutations = {
  saveUserName(state, username) {
    state.username = username;
  },
  saveCartCount(state, count) {
    state.cartCount = count;
  },
};

const actions = {
  saveUserName(context, username) {
    context.commit("saveUserName", username);
  },
  saveCartCount(context, count) {
    context.commit("saveCartCount", count);
  },
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
});
