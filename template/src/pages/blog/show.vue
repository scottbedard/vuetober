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
  import BlogResource from 'src/resources/blog'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  export default {
    data{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
      return {
        post: {}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    created{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
      this.fetchData(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    watch: {
      {{#if_eq lintConfig "standard"}}'{{/if_eq}}$route{{#if_eq lintConfig "standard"}}'{{/if_eq}}: 'fetchData'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    },
    methods: {
      fetchData{{#if_eq lintConfig "standard"}} {{/if_eq}}() {
        const post = BlogResource.getPost(this.$route.params){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        this.$resources({ post }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
