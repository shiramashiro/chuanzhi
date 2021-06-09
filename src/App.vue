<template>
    <div id="app">
        <owl-navigation />
        <router-view />
        <owl-cust-footer />
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="css" scoped>
@import 'colorui/main.css';
@import 'colorui/icon.css';
@import 'owlui/main.css';
</style>
