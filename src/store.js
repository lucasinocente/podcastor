import Vue from 'vue';
import Vuex from 'vuex';
import NowPlaying from './lib/NowPlaying';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    autoplay: false,
    nowPlaying: new NowPlaying({}),
  },
  mutations: {
    updateAutoplay (state, payload) {
      state.autoplay = payload;
    },
    updateNowPlaying (state, payload) {
      state.nowPlaying = new NowPlaying(payload);
    },
  },
  actions: {
    playEpisode(context, payload) {
      context.commit('updateAutoplay', true);
      context.commit('updateNowPlaying', payload);
    }
  }
})

export default store;