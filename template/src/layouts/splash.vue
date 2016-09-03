<style lang="scss" scoped>
    .v-splash {
        align-items: center;
        bottom: 0;
        display: flex;
        justify-content: center;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
    }
</style>

<template>
    <div class="v-splash">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
