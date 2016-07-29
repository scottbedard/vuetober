<style lang="scss" scoped>
    .v-welcome {
        text-align: center;
    }
</style>

<template>
    <div class="v-welcome">
        <div>
            <img src="../assets/vue.png" alt="Vue.js">
            <img src="../assets/october.png" alt="October CMS">
        </div>
        <h1>Your single page application is ready to go!</h1>
        <p>It's time to build something amazing, here are some demos to get you started.</p>
        <div class="demos">
            <router-link to="/alternate-layout">Using an alternate layout</router-link>
            <router-link to="/blog">Communicating with the server</router-link>
        </div>
    </div>
</template>
