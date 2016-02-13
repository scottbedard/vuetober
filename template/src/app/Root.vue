<style lang="sass">
html {
    font-family: 'Open Sans', sans-serif;

    .fade-transition {
        transition: opacity .2s ease;
    }

    .fade-enter, .fade-leave {
        opacity: 0;
    }
}
</style>

<template>
    <div>
        <router-view transition="fade" transition-mode="out-in"></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return { }
    }
}
</script>
