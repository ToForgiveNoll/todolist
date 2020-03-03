<template>
    <div class="Reprint">
        <div class="outerFrame">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Reprint",
        data() {
            return {}
        },
        methods: {},
        mounted() {
            this.$message("刷题功能暂不对外开放");
        }
    }
</script>

<style lang="scss">
    .Reprint {
        width: calc(100% - 250px);
        height: auto;
        float: left;

        .outerFrame {
            width: calc(100% - 120px);
            margin: {
                top: 30px;
                left: 60px;
            };
        }
    }
</style>