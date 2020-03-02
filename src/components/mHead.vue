<!--这个组件实现头部-->

<template>
    <div class="mHead">
        <p class="title">待办事项清单</p>
        <el-tooltip class="item" effect="dark" content="设置" placement="bottom">
            <div class="el-icon-s-tools" @click="NewsOpen('设置')"></div>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="消息" placement="bottom">
            <el-badge :value="el_badge_value" :max="9" class="item" :hidden="el_badge_hidden">
                <div class="el-icon-message-solid" @click="NewsOpen('消息')"></div>
            </el-badge>
        </el-tooltip>

        <el-tooltip class="item" effect="dark" content="头像" placement="bottom">
            <div @click="NewsOpen('头像')" class="avatar">
                <el-avatar :size="30"
                           src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
        </el-tooltip>

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
        methods: {
            // 消息提示
            NewsOpen(Spring) {
                this.$message(Spring + '功能暂未开放');
            }
        },
        mounted() {
            // 如果没有通知则关闭提示
            if (this.el_badge_value === 0) {
                this.el_badge_hidden = true;
            }
        }
    }
</script>

<style lang="scss">
    .mHead {
        width: 100%;
        background-color: #5eb0ff;
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
            margin-top: 20px;
        }

        .el-icon-s-tools:before {
            font-size: 20px;
        }

        .el-icon-message-solid {
            color: white;
        }

        .el-icon-message-solid:before {
            font-size: 20px;
        }

        .item {
            color: white;
            margin-right: 20px;
            margin-top: 20px;
            float: right;
        }

        .avatar {
            float: right;
            margin-top: 15px;
            margin-right: 20px;
        }

    }
</style>