export default {
  state: {
    posts: []
  },
  getters: {
    validPosts (state) {
      return state.posts.filter(post => {
        return post.title && post.body
      })
    },
    getPost (state) {
      return state.posts
    },
    postsCount (state, getters) {
      return getters.validPosts.length
    }
  },
  mutations: {
    //первый параметр state второй то что передаем из action
    updatePosts (state, posts) {
      state.posts = posts
    },
    createPost (state, newPost) {
      state.posts.unshift(newPost)
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