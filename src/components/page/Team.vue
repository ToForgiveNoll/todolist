<template>
    <div class="Team">
        <div class="outerFrame">
            <p class="title">您暂时没有团队</p>
            <el-button type="success" class="button">加入</el-button>
            <el-button type="warning" class="button">创建</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Team",
        data() {
            return {}
        }
    }
</script>

<style lang="scss">
    .Team {
        width: calc(100% - 250px);
        height: auto;
        float: left;

        .outerFrame {
            width: calc(100% - 120px);
            margin: {
                top: 30px;
                left: 60px;
            };

            .title {
                font-size: 18px;
                font-weight: 600;
            }

            .button {
                margin: {
                    top: 40px;
                    right: 20px;
                }
            }
        }
    }
</style>