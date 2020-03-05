<template>
    <div class="Reprint">
        <div class="outerFrame" v-if="isLook">
            <el-button type="success" @click="type('reprint')">开始刷题</el-button>
            <el-button type="warning" @click="type('enter')">录入题库</el-button>
            <el-button type="danger" @click="type('error')">二刷错题</el-button>

            <div v-if="isType === 'enter'">
                <el-form label-width="80px" label-position="left">
                    <el-form-item label="题型" prop="type">
                        <el-select @change="types(form.type)" v-model="form.type" placeholder="请选择题型">
                            <el-option label="单选题" value="单选题"></el-option>
                            <el-option label="多选题" value="多选题"></el-option>
                            <el-option label="判断题" value="判断题"></el-option>
                            <el-option label="简答题" value="简答题"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="考试科目" prop="subject" v-if="form.type !== ''">
                        <el-select v-model="form.subject" placeholder="请选择考试科目">
                            <el-option label="信息技术导论" value="信息技术导论"></el-option>
                            <el-option label="信息安全技术概论" value="信息安全技术概论"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="题目" v-if="form.type !== ''">
                        <el-input type="textarea" v-model="form.name"></el-input>
                    </el-form-item>

                    <div v-if="form.type === '单选题'">
                        <el-form-item
                                v-for="(option, index) in form.multipleChoice"
                                :label="'选择' + (index+1)"
                        >
                            <el-input class="input" v-model="option.value"></el-input>
                            <el-button @click.prevent="removeOption(option,form.multipleChoice)">删除</el-button>
                        </el-form-item>

                        <el-form-item>
                            <el-button @click="addOption(form.multipleChoice)">新增题目</el-button>
                        </el-form-item>

                        <el-form-item label="正确答案">
                            <el-radio-group v-model="form.answer">
                                <el-radio v-for="(option, index) in form.multipleChoice" :label="index+1"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>

                    <div v-if="form.type === '多选题'">
                        <el-form-item
                                v-for="(option, index) in form.multipleChoice"
                                :label="'选择' + (index+1)"
                        >
                            <el-input class="input" v-model="option.value"></el-input>
                            <el-button @click.prevent="removeOption(option,form.multipleChoice)">删除</el-button>
                        </el-form-item>

                        <el-form-item>
                            <el-button @click="addOption(form.multipleChoice)">新增题目</el-button>
                        </el-form-item>

                        <el-form-item label="正确答案">
                            <el-checkbox-group v-model="form.answer">
                                <el-checkbox v-for="(option, index) in form.multipleChoice"
                                             :label="index+1"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </div>

                    <div v-if="form.type === '判断题'">
                        <el-form-item label="正确答案">
                            <el-radio-group v-model="form.answer">
                                <el-radio label="对"></el-radio>
                                <el-radio label="错"></el-radio>
                            </el-radio-group>
                        </el-form-item>

                        <el-form-item label="修正" v-if="form.answer === '错'">
                            <el-radio-group v-model="form.answer">
                                <el-input class="input" v-model="form.amend"></el-input>
                            </el-radio-group>
                        </el-form-item>
                    </div>

                    <div v-if="form.type === '简答题'">
                        <el-form-item label="正确答案">
                            <el-input type="textarea" v-model="form.answer"></el-input>
                        </el-form-item>
                    </div>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即录入</el-button>
                    </el-form-item>

                </el-form>
            </div>

        </div>
    </div>
</template>

<script>
    import {getCookie} from "../../units/cookies";

    export default {
        name: "Reprint",
        components: {},
        data() {
            return {
                isLook: false,
                isType: '',
                form: {
                    name: '',
                    subject: '',
                    type: '',
                    multipleChoice: [],
                    answer: '' || [],
                    amend: ''
                }
            }
        },
        methods: {
            // 初始化回调
            mounted() {
            },
            type(data) {
                this.isType = data;
            },
            // 提交表单
            onSubmit() {
                switch (this.form.type) {
                    case "单选题":
                    case "多选题":
                    case "判断题":
                    case "简答题":
                        if (this.form.name !== '' && this.form.subject !== '' && this.form.answer !== '') {
                            this.$message("cg");
                        } else {
                            this.$message.error("请检查题目");
                        }
                        break;
                }
                console.log(JSON.stringify(this.form));
            },
            // 添加题
            addOption(data) {
                data.push({
                    value: ''
                });
            },
            // 移除题
            removeOption(item, data) {
                var index = data.indexOf(item);
                if (index !== -1) {
                    data.splice(index, 1)
                }
            },
            // 检查创建题目时题型变化
            types(data) {
                if (data === "多选题") {
                    this.form.answer = [];
                } else {
                    this.form.answer = '';
                }

                // 清空值
                this.form.name = '';
                this.form.subject = '';
                this.form.multipleChoice = [];
                this.form.amend = '';
            }
        },
        mounted() {
            if (getCookie("id") === "2") {
                this.isLook = true;
            } else {
                this.$message("刷题功能暂不对外开放");
            }
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

            & > div {
                margin-top: 20px;
            }

            .input {
                width: 400px;
                margin-right: 10px;
            }
        }
    }
</style>