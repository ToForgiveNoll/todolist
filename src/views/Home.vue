<!--这个页面实现主页面-->

<template>
    <div class="home" v-loading="loading">
        <m-head></m-head>
        <m-left-list></m-left-list>
        <SignIn></SignIn>
    </div>
</template>

<script>
    import MHead from "../components/mHead";
    import MLeftList from "../components/mLeftList";
    import SignIn from "../components/page/SignIn";
    import {keyChainCheck} from "../units/keyChainCheck";

    export default {
        name: 'Home',
        components: {SignIn, MLeftList, MHead},
        data() {
            return {
                loading: true
            }
        },
        methods: {
            // 初始化回调
            mountedCallback(data) {
                this.loading = false;
                if (data !== "1") {
                    this.$router.push({'name': 'LogAndReg'});// 跳转登录
                } else {
                    this.$message({
                        message: '欢迎回来',
                        type: 'success'
                    });
                }
            }
        },
        mounted() {
            // 判断keyChain是否经过验证
            if (this.$route.params.key == null) {
                keyChainCheck(this.mountedCallback); // 验证keyChain
            } else {
                this.loading = false;
            }
        }
    }
</script>

<style lang="scss">
    .home {
        width: 100%;
        height: 100vh;
    }
</style>