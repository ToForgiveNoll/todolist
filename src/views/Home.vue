<!--这个页面实现主页面-->

<template>
    <div class="home">
        <m-head></m-head>
        <m-left-list></m-left-list>
    </div>
</template>

<script>
    import MHead from "../components/mHead";
    import MLeftList from "../components/mLeftList";

    export default {
        name: 'Home',
        components: {MLeftList, MHead}
    }
</script>

<style lang="scss">
    @import "../assets/scss/main";


</style>