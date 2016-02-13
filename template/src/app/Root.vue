<style lang="sass">
@import './../style';
</style>

<style lang="sass" scoped>
header {
    text-align: center;
}
</style>

<template>
    <div>
        <header>
            <img src="./../assets/october.png">
            <img src="./../assets/vue.png">
            <h1>oc-vuetober-theme</h1>
            <v-nav></v-nav>
        </header>
        <router-view transition="fade" transition-mode="out-in"></router-view>
    </div>
</template>

<script>
import Nav from './../components/nav';

export default {

    components: {
        'v-nav': Nav,
    },
}
</script>
