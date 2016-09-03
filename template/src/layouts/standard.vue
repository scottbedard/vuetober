<style lang="scss" scoped>@import 'core';
    .v-standard {
        padding: 20px;
    }
</style>

<template>
    <div class="v-standard">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
