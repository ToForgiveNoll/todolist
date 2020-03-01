<!--这个组件实现左边列表-->

<template>
    <div class="mLeftList">
        <div class="topList">
            <div>
                <div class="el-icon-date"></div>
                <p>签到</p>
            </div>
            <div @click="NewsOpen('收件箱')">
                <div class="el-icon-news"></div>
                <p>收件箱</p>
                <p>0</p>
            </div>
            <div @click="NewsOpen('重要')">
                <div class="el-icon-warning-outline"></div>
                <p>重要</p>
                <p>0</p>
            </div>
            <div @click="NewsOpen('今天')">
                <div class="el-icon-sunny"></div>
                <p>今天</p>
                <p>0</p>
            </div>
            <div @click="NewsOpen('本周')">
                <div class="el-icon-cloudy-and-sunny"></div>
                <p>本周</p>
                <p>0</p>
            </div>
        </div>

        <div class="dividingLine"></div>

        <div class="label">
            <p>Beta 0.0.1</p>
            <p class="github" @click="ToGithub"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mLeftList",
        methods: {
            // 跳转至github
            ToGithub() {
                window.location.href = "https://github.com/ToForgiveNoll/todolist";
            },
            // 消息提示
            NewsOpen(Spring) {
                this.$message(Spring + '功能暂未开放');
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/main";

    .mLeftList {
        float: left;
        width: 250px;
        height: calc(100vh - 60px);
        background-color: #f5f5f5;

        .topList {
            margin-top: 30px;
            margin-left: 30px;
            margin-bottom: 15px;

            & > div {
                height: 30px;
                border-radius: 5px;

                & > div {
                    float: left;
                    display: inline-block;
                    line-height: 30px;
                    margin-left: 10px;
                }

                & > div:nth-child(1):before {
                    float: left;
                    font-size: 22px;
                    color: cornflowerblue;
                }

                & > p {
                    float: left;
                    display: inline-block;
                    line-height: 30px;
                }

                & > p:nth-child(2) {
                    font-size: 14px;
                    color: #5c5c5c;
                    margin-left: 10px;
                    font-weight: 600;
                }

                & > p:nth-child(3) {
                    font-size: 14px;
                    color: #aaa;
                    margin-left: 6px;
                }
            }

            & > div:hover {
                background-color: #fefefe;
            }
        }

        .dividingLine{
            margin-left: 40px;
            width: 210px;
            height: 1px;
            background-color: #e3e3e3;
            border-radius: 2px;
        }

        .label {
            width: 250px;
            font-size: 14px;
            position: absolute;
            bottom: 5px;
            text-align: center;
            color: #5c5c5c;

            .github {
                width: 20px;
                height: 20px;
                background: {
                    repeat: no-repeat;
                    image: url("https://github.githubassets.com/favicon.ico");
                    size: 20px;
                };
                margin-left: 115px;
            }
        }
    }
</style>