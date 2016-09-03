<style lang="scss" scoped>@import 'core';
    h1 {
        font-weight: 300;
    }
</style>

<template>
    <div>
      <h1>\{{ post.title }}</h1>
      <div v-html="post.content_html" v-linkable></div>
    </div>
</template>

<script>
  import BlogResource from 'src/resources/blog'

  export default {
    data () {
      return {
        post: {}
      }
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        let post = BlogResource.getPost(this.$route.params)
        this.$resources({ post })
      }
    }
  }
</script>
