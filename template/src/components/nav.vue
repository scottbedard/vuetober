<style lang="sass" scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
            display: inline-block;
            padding: 15px;
        }
    }

    a {
        transition: all 0.5s ease;
        &.v-link-active { color: black }
    }
</style>

<template>
    <nav>
        <ul>
            <li><a v-link="{ name: 'intro' }">Introduction</a></li>
            <li><a v-link="{ name: 'blog' }">Blog example</a></li>
            <li><a href="https://github.com/scottbedard/oc-vuetober-theme">Git repo</a></li>
        </ul>
    </nav>
</template>

<!-- If your component is simple enough, you don't need to provide a script block! -->
