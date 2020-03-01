<!--这个页面实现登录及注册-->

<template>
    <div class="LogAndReg">
        <p class="Watermark">图片均来源百度 如果侵犯了您的利益 请联系我下架</p>

        <div class="card">
            <el-tooltip class="item" effect="dark" content="第一次登录视为注册" placement="bottom">
                <p class="title">注册与登录</p>
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="昵称最多支持12个字符 不可输入特殊符号" placement="right">
                <input placeholder="昵称"/>
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="密码为8-16位" placement="right">
                <input type="password" placeholder="密码"/>
            </el-tooltip>

            <button>提交</button>

            <p class="forget" @click="message">忘记密码</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LogAndReg",
        methods: {
            data() {
                return {

                }
            },
            message() {
                this.$message("功能暂未开放");
            }
        }
    }
</script>

<style lang="scss">
    .LogAndReg {
        width: 100%;
        height: 100vh;
        background: {
            repeat: no-repeat;
            size: 100% 100vh;
            image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583103054131&di=d5607e35c09d71660834dd5c4b29e0f1&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201408%2F18%2F140240hjmn1fkaxs1mssns.jpg");
        }

        .Watermark {
            font-size: 12px;
            position: absolute;
            bottom: 5px;
            right: 5px;
            color: rgba(255, 255, 255, 0.75);
        }

        .card {
            text-align: center;
            width: 450px;
            height: 300px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            position: absolute;
            top: calc((100vh - 300px) / 2);
            left: calc((100% - 450px) / 2);

            .title {
                font-size: 30px;
                font-weight: 600;
                margin: {
                    top: 20px;
                    bottom: 30px;
                };
            }

            input {
                text-align: center;
                display: block;
                border: none;
                width: 70%;
                height: 40px;
                margin: {
                    left: 15%;
                    top: 15px;
                };
                border-radius: 30px;
                background-color: rgba(255, 255, 255, 0.9);
            }

            .forget {
                font-size: 12px;
                font-weight: 600;
                margin-top: 20px;
            }

            button {
                border: none;
                background-color: #999;
                height: 30px;
                margin-top: 20px;
                width: 30%;
                border-radius: 50px;
                color: #eee;
            }

            button:hover{
                background-color: #eee;
                color: #999;
            }
        }
    }
</style>