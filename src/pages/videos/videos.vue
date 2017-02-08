<style lang="scss" scoped>@import 'core';
    .videos-page {
        text-align: center;
    }

    h1 {
        border-bottom: 1px solid #ccc;
        margin: 0 auto;
        max-width: 500px;
        padding-bottom: 12px;
    }

    a {
        display: block;
        padding: 12px 0;
    }

    p {
        font-size: 24px;
        font-weight: 300;
        strong { font-weight: 400 }
    }
</style>

<template>
    <div class="videos-page">
        <h1>Videos</h1>
        <p><strong>Note:</strong> These videos have not been created yet.</p>
        <a href="#" @click.prevent>Getting started &amp; creating pages</a>
        <a href="#" @click.prevent>Creating global components</a>
        <a href="#" @click.prevent>Communicating with the backend</a>
        <a href="#" @click.prevent>Customizing the build setup</a>
        <a href="#" @click.prevent>The basics of unit testing</a>
        <a href="#" @click.prevent>Continuous integration and code coverage</a>
        <a href="#" @click.prevent>Bundle splitting</a>
        <a href="#" @click.prevent>State management with Vuex</a>
    </div>
</template>
