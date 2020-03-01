<template>
    <div class="mHead">
        <p class="title">ToDoList</p>
        <div class="el-icon-s-tools"></div>

        <el-badge :value="el_badge_value" :max="9" class="item" :hidden="el_badge_hidden">
            <div class="el-icon-message-solid"></div>
        </el-badge>

        <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>

    </div>
</template>

<script>
    export default {
        name: "mHead",
        data() {
            return {
                el_badge_hidden: false,
                el_badge_value: 0
            }
        },
        methods: {},
        mounted() {
            // 如果没有通知则关闭提示
            if (this.el_badge_value === 0) {
                this.el_badge_hidden = true;
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/main";

    .mHead {
        width: 100%;
        background-color: #ff715a;
        height: 60px;

        .title {
            display: inline-block;
            font-size: 20px;
            font-weight: 600;
            line-height: 60px;
            margin-left: 20px;
            color: white;
        }

        .el-icon-s-tools {
            float: right;
            color: white;
            margin-right: 20px;
            line-height: 60px;
        }

        .el-icon-s-tools:before{
            font-size: 20px;
        }

        .el-icon-message-solid {
            color: white;
        }

        .el-icon-message-solid:before{
            font-size: 20px;
        }

        .item {
            color: white;
            margin-right: 20px;
            margin-top: 20px;
            float: right;
        }

        .el-avatar {
            float: right;
            margin-top: 15px;
            margin-right: 20px;
        }

    }
</style>