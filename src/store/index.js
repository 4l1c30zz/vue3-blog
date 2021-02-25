import { createStore } from 'vuex';

export default createStore({
  state: {
    homePage: null,
    blog: null,
  },
  mutations: {
    setHome(state, { homePage }) {
      state.homePage = homePage;
    },
    setBlog(state, { blog }) {
      state.blog = blog;
    },
  },
  getters: {
    getHomePage({ homePage }) { return homePage; },
    getBlog({ blog }) { return blog; },
  },
  actions: {
  },
});
