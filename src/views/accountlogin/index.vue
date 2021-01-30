<template>
    <div>
        <div class="header">
            <slot name="header">
                <HeaderPhone />
            </slot>
        </div>
        <div class="content" :style="{ 'min-height': box_height }">
           <!-- 卡片视图区域 -->
           <a-card style="width: 460px;height:360px" class="card_box">
                <span class="title">账号密码登陆</span>
                <span class="toggleStyle" @click="goPhone">手机验证码登陆</span>

                        <!-- 表单 -->
                      <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules" class="login-form">
                            <a-form-model-item prop="account">
                                <a-input v-model="form.account" placeholder="请输入用户名/手机号/邮箱">
                                     <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
                                </a-input>
                            </a-form-model-item>
                            <a-form-model-item prop="password">
                                <a-input v-model="form.password" placeholder="请输入密码">
                                    <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
                                </a-input>
                            </a-form-model-item>
                            <a-form-model-item>
                                <a-button type="primary" class="login-form-button" >立即登陆</a-button>
                                  <div class="forget_register">
                                    <span class="login-form-forgot" @click="goForget">忘记密码？</span>
                                    <span class="register" @click="goRegister">现在去注册</span>
                                 </div>
                            </a-form-model-item>
                      </a-form-model>
                     <div class="problems">
                        <span>遇到问题？请拨打188-8888-8888</span>
                    </div>
            </a-card>
        </div>

        <div class="footer">
                <slot name="footer">
                    <Footer />
                </slot>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            box_height: 0,
            form:{
                account:'',
                password:''
            },
            rules:{
                account:[
                    { required: true, message: '请输入正确的账号', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请填写密码', trigger: 'blur' }
                ]
            }
        }
    },
    created(){
        this.getHeight()
    },
    methods:{
        //获取内容区域高度
        getHeight(){
            this.box_height=(window.innerHeight-40)+'px'
            console.log(this.box_height)
        },
        handleSubmit(){},
        goPhone(){
            this.$router.push('/phoneLogin')
        },
        goForget(){
            this.$router.push('/forgetPassword')
        },
        goRegister(){
            this.$router.push('/register')
        }
    }
}
</script>


<style lang="less" scope>

.content{
   
    .card_box{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-shadow: #dee1e6 0 0 20px;
        .title{
            font-size: 26px;
        }
        .toggleStyle{
            position: absolute;
            right: 25px;
            top: 32px;
            cursor: pointer;
        }
        .login-form{
            margin-top: 30px;
            .ant-input{
                height: 40px;
            }
            .ant-input-prefix{
                font-size: 16px;
            }
            
            input::-webkit-input-placeholder{
                padding-left: 5px;
                font-size:16px;
            }
            .login-form-button{
                width: 100%;
                height: 45px;
                font-size: 18px;
                background: #73c3e6;
                border: transparent;
            }
            .forget_register{
                display: flex;
                justify-content: space-between;
                .login-form-forgot{
                    width: 100px;
                    cursor: pointer;
                     color: #1890ff;
                }
                .register{
                    width: 100px;
                    cursor: pointer;
                     color: #1890ff;
                    
                }
            }
        }
        .problems{
            
            span{
                line-height: 20px;
                display: block;
                text-align: center;
                font-size: 12px;
                color: #bbbbbb;
            }
        }
    }


}
</style>