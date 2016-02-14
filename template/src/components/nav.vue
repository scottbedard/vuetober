<style lang="sass" scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

a {
    transition: all 0.5s ease;

    &.v-link-active {
        color: black;
        font-size: 28px;
    }
}

</style>

<template>
<nav>
    <ul>
        <li><a v-link="{ name: 'intro' }">Introduction</a></li>
        <li><a v-link="{ name: 'blog' }">Communicating with October</a></li>
        <li><a v-link="{ name: 'sandbox' }">Sandbox</a></li>
    </ul>
</nav>
</template>

<script>
module.exports = {

}
</script>
