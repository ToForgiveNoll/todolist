<!--这个组件实现使用情况统计页面-->

<template>
    <div class="UseCase">

        <div class="outerFrame">

            <p class="titleBig">使用情况统计 Usage Statistics</p>

            <div class="timesStatistics">

                <p class="titleSmall">使用次数</p>

                <el-card class="box-card">
                    <p>使用天数</p>
                    <p><span>0</span>天</p>
                </el-card>

                <el-card class="box-card">
                    <p>连续使用</p>
                    <p><span>0</span>天</p>
                </el-card>

                <el-card class="box-card">
                    <p>最后使用</p>
                    <p><span>0</span>天</p>
                </el-card>

                <el-tooltip class="item" effect="dark" content="开发中.." placement="left">
                    <p class="titleSmall">整体分析</p>
                </el-tooltip>

                <el-tooltip class="item" effect="dark" content="开发中.." placement="left">
                    <p class="titleSmall">周期统计</p>
                </el-tooltip>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "UseCase",
        data() {
            return {
                day: []
            }
        },
        methods: {},
        mounted() {
        }
    }
</script>

<style lang="scss">
    .UseCase {
        width: calc(100% - 250px);
        height: auto;
        float: left;

        .outerFrame {
            width: calc(100% - 120px);
            margin: {
                top: 30px;
                left: 60px;
            };

            .titleBig {
                font-size: 18px;
                font-weight: 600;
                color: #5c5c5c;
            }

            .titleSmall {
                font-size: 16px;
                font-weight: 600;
                margin-top: 10px;
                margin-bottom: 10px;
            }

            .box-card {
                display: inline-block;
                width: 150px;
                margin-right: 20px;
                background-image: linear-gradient(270deg, #5eb0ff 0%, #54d5ff 100%);

                p {
                    color: white;
                    font-size: 14px;
                }

                p:nth-child(1) {
                    font-size: 14px;
                }

                p:nth-child(2) {
                    margin-top: 10px;

                    & > span {
                        font-size: 20px;
                        font-weight: 900;
                    }
                }
            }
        }

    }
</style>