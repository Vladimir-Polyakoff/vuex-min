<template>
  <div id="app">
    <h1>{{ postsCount }}</h1>
    <div class="post" v-for="post in getPost" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  // computed: {
  //   allPost () {
  //     return this.$store.getters.getPost
  //   }
  // },
  // Гетер функция принимает массив строкой название из Vuex
  computed: mapGetters(['getPost', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  async mounted () {
    this.fetchPosts()
    // this.$store.dispatch('fetchPosts') ЛИБО ТАК либо через methods + import
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}
.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>
