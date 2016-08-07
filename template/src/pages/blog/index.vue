<template>
    <div>
        <h1>Communicating with the server</h1>
        <router-link to="/welcome">Return to the welcome page</router-link>
        <p>To demonstrate communicating with the server, this theme includes a very simple blog. In order for the blog to work, make sure you have the following plugins installed.</p>
        <ol>
            <li><a href="http://octobercms.com/plugin/rainlab-blog">RainLab.Blog</a></li>
            <li><a href="http://github.com/scottbedard/rainlab-blog-api">Bedard.RainLabBlogApi</a></li>
        </ol>
        <h2>Posts</h2>
        <h4 v-if="posts === null">Loading...</h4>
        <div v-else>
            <ul v-if="posts.length > 0">
                <li v-for="post in posts">
                    <router-link :to="{ name: 'blog/show', params: { slug: post.slug }}">{{ post.title }}</router-link>
                </li>
            </ul>
            <h4 v-else>There are no blog posts to display.</h4>
        </div>
    </div>
</template>

<script>
  import BlogResource from 'resources/blog'

  module.exports = {
    data () {
      return {
        posts: null
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
        const posts = BlogResource.getPosts()
        this.$resources({ posts })
      }
    }
  }
</script>
