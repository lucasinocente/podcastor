import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nowPlaying: {
      autoplay: false,
      image: "",
      title: "",
      audio: "",
    }
  },
  mutations: {
    updateNowPlaying (state, payload) {
      state.nowPlaying = payload;
    }
  }
})

export default store;