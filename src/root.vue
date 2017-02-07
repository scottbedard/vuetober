<!-- Pull in our global style sheet -->
<style lang="scss" src="global"></style>

<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
