<!--这个页面实现登录及注册-->

<template>
    <div class="LogAndReg" v-loading="loading">
        <p class="Watermark">图片均来源网络 如果侵犯了您的利益 请联系我下架</p>

        <div class="card">
            <el-tooltip class="item" effect="dark" content="第一次登录视为注册" placement="bottom">
                <p class="title">注册与登录</p>
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="请输入你的邮箱 后期会对邮箱可用性进行校对" placement="right">
                <input ref="email" placeholder="邮箱"/>
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="密码为8-16位" placement="right">
                <input ref="password" type="password" placeholder="密码"/>
            </el-tooltip>

            <button @click="submit">提交</button>

            <p class="forget" @click="message">忘记密码</p>
        </div>
    </div>
</template>

<script>
    import {ajax} from "../units/ajax";
    import {setCookie} from "../units/cookies";
    import {keyChainCheck} from "../units/keyChainCheck";

    export default {
        name: "LogAndReg",
        data() {
            return {
                loading: true
            }
        },
        methods: {
            // 提交表单
            submit() {
                let email = this.$refs.email.value;
                let password = this.$refs.password.value;
                // 校验账号密码
                if (email.length < 36 && email.length > 8) {
                    if (password.length < 16 && password.length > 8) {
                        this.loading = true;
                        // 发送请求
                        let json = {};
                        json["className"] = "com.Alan.todolist.LogAndReg";
                        json["methodName"] = "LogAndRegAchieve";
                        json["email"] = email;
                        json["password"] = password;
                        ajax(this.submitCallback, "data=" + JSON.stringify(json));
                    } else {
                        this.$message("密码格式不正确");
                    }
                } else {
                    this.$message("邮箱格式不正确");
                }
            },
            // 提交表单回调
            submitCallback(data) {
                this.loading = false;
                // 判断处理状态
                if (data !== '0') {
                    this.$message({
                        message: '登陆成功',
                        type: 'success'
                    });
                    setCookie("keyChain", data);
                    this.$router.push({'name': 'Home', params: {key: 1}});// 跳转首页
                } else {
                    this.$message.error("密码错误");
                    this.$refs.password.value = '';
                }
            },
            // 初始化回调
            mountedCallback(data) {
                this.loading = false;
                if (data !== "0") {
                    this.$message({
                        message: '欢迎回来',
                        type: 'success'
                    });

                    setCookie("id", data);
                    this.$router.push({'name': 'Home', params: {key: 1}});// 跳转首页
                }
            },
            message() {
                this.$message("功能暂未开放");
            }
        },
        mounted() {
            keyChainCheck(this.mountedCallback); // 验证keyChain
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

            button:hover {
                background-color: #eee;
                color: #999;
            }
        }
    }
</style>