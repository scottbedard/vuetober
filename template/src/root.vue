<style lang="sass">
    @import 'elements/containers';
    @import 'elements/ui';
    @import 'transitions';
</style>

<style lang="sass" scoped>
    img {
        max-height: 120px;
        padding: 10px;
        width: auto;
    }
</style>

<template>
    <div>
        <header>
            <img src="./assets/vue.png">
            <img src="./assets/october.png">
            <h1>oc-vuetober-theme</h1>
            <v-nav></v-nav>
        </header>
        <router-view transition="fade" transition-mode="out-in"></router-view>
    </div>
</template>

<script>
    import NavComponent from 'components/nav';

    export default {
        components: {
            'v-nav': NavComponent,
        },
    }
</script>
