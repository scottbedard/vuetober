<style lang="scss" scoped>@import 'core';
    .v-welcome {
        text-align: center;
    }

    h1, h2 {
        font-weight: 300;
    }

    a {
        color: $vue-green;
        display: block;
        font-size: 24px;
        font-weight: 300;
        text-decoration: none;
        transition: color 200ms;
        padding: 6px 0px;

        &:hover {
            color: darken($vue-green, 10%);
        }
    }
</style>

<template>
    <div class="v-welcome">
        <div class="logos">
            <img src="../assets/vue.png" alt="Vue">
            <img src="../assets/october.png" alt="October CMS">
        </div>
        <h1>Welcome to your new Vuetober theme!</h1>
        <h2>It's time to build something amazing.</h2>
        <div>
            <router-link to="/blog">RainLab.Blog example</router-link>
            <a href="https://github.com/scottbedard/oc-vuetober-theme">GitHub Repository</a>
        </div>
    </div>
</template>
