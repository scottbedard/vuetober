<style lang="scss" scoped>@import 'core';
    h1, h2, p {
        font-weight: 300;
    }

    a {
        color: $vue-green;
        text-decoration: none;
        transition: color 200ms;

        &:hover {
            color: darken($vue-green, 10%);
        }
    }
</style>

<template>
    <div>
        <h1>Blog example</h1>
        <p>To see the blog example in action, make sure you have the following plugins installed.</p>
        <ol>
            <li><a href="https://octobercms.com/plugin/rainlab-blog">RainLab.Blog</a></li>
            <li><a href="https://github.com/scottbedard/rainlab-blog-api">Bedard.RainLabBlogApi</a></li>
        </ol>
        <h2>Posts</h2>
        <ul>
            <li v-for="post in posts">
                <router-link :to="{ name: 'blog/show', params: { slug: post.slug }}">
                    \{{ post.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import BlogResource from 'src/resources/blog'

    export default {
      data () {
        return {
          posts: []
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
