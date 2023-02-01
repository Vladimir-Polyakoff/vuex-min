<script>
import { mapMutations } from 'vuex'

export default {
  name: 'PostForm ',
  data () {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    ...mapMutations(['createPost']),
    submit () {
      this.createPost({
        title: this.title,
        body: this.body,
        id: Date.now()
      })
      this.title = ''
      this.body = ''
    }
  }
}
</script>

<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="title" v-model="title">
    <input type="text" placeholder="body" v-model="body">
    <button type="submit">Создать пост</button>
  </form>
</template>

<style scoped>
  input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 10px;
    margin-block: 10px;
  }
</style>
