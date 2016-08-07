<template>
    <div>
      <h1>\{{ post.title }}</h1>
      <div v-html="post.content_html" v-linkable></div>
    </div>
</template>

<script>
  import BlogResource from 'resources/blog'

  module.exports = {
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
