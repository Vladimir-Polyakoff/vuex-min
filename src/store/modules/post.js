export default {
  state: {
    posts: []
  },
  getters: {
    getPost (state) {
      return state.posts
    },
    postsCount (state) {
      return state.posts.length
    }
  },
  mutations: {
    //первый параметр state второй то что передаем из action
    updatePosts (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    // fetch возвращает promes мы его ждем await и заносим в константу
    async fetchPosts({ commit }, limit = 3) {
      //первый параметр это контекст
      const res  = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)

    const posts = await res.json()

    commit('updatePosts', posts)
    }
  }
}