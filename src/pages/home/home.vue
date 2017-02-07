<style lang="scss" scoped>@import 'core';
    .home-page {
        align-items: center;
        display: flex;
        font-weight: 300;
        height: 100%;
        justify-content: center;
        text-align: center;
        padding: 20px;
        width: 100%;

        img {
            padding: 20px;
        }

        h1,
        h2 {
            font-weight: 300;
        }

        a {
            display: block;
            font-size: 1.5rem;
            margin: 10px;
        }
    }
</style>

<template>
    <div class="home-page">
        <div>
            <img src="../../assets/vue.png" alt="Vue.js" />
            <img src="../../assets/october.png" alt="October CMS" />
            <h1>Welcome to your new Vuetober theme!</h1>
            <h2>It's time to build something amazing.</h2>
            <a href="#" @click.prevent>Getting started video series</a>
            <a href="https://github.com/scottbedard/oc-vuetober-theme">GitHub Repository</a>
        </div>
    </div>
</template>
