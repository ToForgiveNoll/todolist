<!--这个页面实现主页面-->

<template>
    <div class="home" v-loading="loading">
        <m-head @event="change"></m-head>
        <m-left-list @event="change"></m-left-list>
        <UseCase v-if="page === 'UseCase'" @event="change"></UseCase>
        <Team v-if="page === 'Team'" @event="change"></Team>
    </div>
</template>

<script>
    import MHead from "../components/mHead";
    import MLeftList from "../components/mLeftList";
    import UseCase from "../components/page/UseCase";
    import {keyChainCheck} from "../units/keyChainCheck";
    import Team from "../components/page/Team";

    export default {
        name: 'Home',
        components: {Team, UseCase, MLeftList, MHead},
        data() {
            return {
                loading: true,
                page: "UseCase"
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
            },
            // 控制页面跳转
            change(data) {
                this.page = data;
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