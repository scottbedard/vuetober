<style lang="sass" scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    display: inline-block;
    padding: 10px;
}
</style>

<template>
<nav>
    <ul>
        <li><a v-link="{ name: 'intro' }">Introduction</a></li>
        <li><a v-link="{ name: 'sandbox' }">Sandbox</a></li>
    </ul>
</nav>
</template>

<script>
module.exports = {

}
</script>
