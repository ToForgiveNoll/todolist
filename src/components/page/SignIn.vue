<!--这个组件实现签到页面-->

<template>
    <div class="SignIn">

        <div class="outerFrame">

            <p class="titleBig">使用情况统计 Usage Statistics</p>

            <div class="timesStatistics">

                <p class="titleSmall">使用次数</p>

                <el-card class="box-card">
                    <p>签到天数</p>
                    <p>20天</p>
                </el-card>

                <el-card class="box-card">
                    <p>最长连续签到</p>
                    <p>15天</p>
                </el-card>

                <el-card class="box-card">
                    <p>距离上一次</p>
                    <p>0天</p>
                </el-card>

                <p class="titleSmall">整体签到分析</p>

            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "SignIn"
    }
</script>

<style lang="scss">
    .SignIn {
        width: calc(100% - 250px);
        height: auto;
        float: left;

        .outerFrame{
            width: calc(100% - 120px);
            margin: {
                top:30px;
                left: 60px;
            };

            .titleBig {
                font-size: 18px;
                font-weight: 600;
                color: #5c5c5c;
            }

            .titleSmall{
                font-size: 16px;
                font-weight: 600;
                margin-top: 10px;
                margin-bottom: 10px;
            }

            .box-card{
                display: inline-block;
                width: 150px;
                margin-right: 20px;
                background-image: linear-gradient(270deg, #5eb0ff 0%, #54d5ff 100%);
                p{
                    color: white;
                }

                p:nth-child(1){
                    font-size: 14px;
                }

                p:nth-child(2){
                    font-size: 20px;
                    margin-top: 10px;
                    font-weight: 600;
                }
            }
        }

    }
</style>