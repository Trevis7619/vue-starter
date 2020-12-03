<template>
    <div>
        <el-container>
            <el-header></el-header>
            <el-main>
                <el-row type="flex" justify="center">
                    <el-col :span="12" style="text-align: center">
                        <span style="font-size: 50px"><strong> KH002'S Website</strong></span>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="12" style="text-align: center">
                        <span style="font-size: 30px"> <strong>This is Rating Predictor</strong></span>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="12" style="text-align: center">
                        <span style="font-size: 30px"><strong>Still UnderConstruction</strong></span>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center">
                    <el-col :span="12" style="text-align: center">
                        <span style="font-size: 20px"><strong>Supported Category: Pets, Auto Repair ...</strong></span>
                    </el-col>
                </el-row>

                <el-row type="flex" justify="center" style="margin-top: 15px">
                    <el-col :span="12">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="category:">
                                <el-input v-model="form.category"></el-input>
                            </el-form-item>

                            <el-form-item label="Review:">
                                <el-input autosize type="textarea" v-model="form.review"></el-input>
                            </el-form-item>

                            <el-form-item v-if="status" label="Rating:">
                               <strong>{{form.rating}}</strong>
                            </el-form-item>

                            <el-form-item style="text-align: center">
                                <el-button style="margin-left: -20px" type="primary" @click="onsubmit">submit
                                </el-button>
                                <el-button type="info" @click="clear">clear</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import axios from 'axios';//this.axios使用

    export default {
        name: 'app',
        components: {},
        data() {
            return {
                form: {
                    category: '',
                    review: '',
                    rating: ''
                },
                status: false

            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },

            onsubmit() {
                if(this.form.category==='' || this.form.review==='' ){
                    this.$message('input cannot be empty');
                    return false;
                }


                axios({
                    method: 'post',
                    url: 'sub',
                    data: {
                        "category":this.form.category,
                        "review":this.form.review
                    }
                }).then(res => {
                    console.log("r")
                    let result = res.data
                    if(result.msg==="error"){
                        this.$message(result.tips);
                    }else{
                        this.status = true;
                        this.form.rating =result.data;
                    }
                })

            },

            clear() {
                this.status = false;
                this.form = {
                    category: '',
                    review: '',
                    rating: ''
                }
            }
        },


    }
</script>

<style>

</style>
