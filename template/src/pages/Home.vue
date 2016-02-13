<style>
.home {
    padding: 30px;
    text-align: center;
}
</style>

<template>
    <div class="home page">
        <img src="./../assets/october.png">
        <img src="./../assets/vue.png">
        <h1>oc-vuetober-theme</h1>
        <p>
            <a href="https://github.com/scottbedard/oc-vuetober-theme">Repository</a>
            <span>-</span>
            <a v-link="{ name: 'sandbox' }">Sandbox</a>
        </p>
    </div>
</template>

<script>
//
// Home page
//
export default {

    /**
     * @return {Object}
     */
    data () {
        return { }
    }
}
</script>
