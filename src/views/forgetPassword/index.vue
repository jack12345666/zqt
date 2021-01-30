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
                <span class="title">验证账户</span>

                        <!-- 表单 -->
                    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules" class="login-form">
                        <a-form-model-item prop="phone">
                        <a-input
                            v-model="form.phone"
                            placeholder="请输入手机号码"
                        >
                            <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                        <a-button type="primary" class="code" :disabled='disabled' @click="getCode">{{btnTitle}}</a-button>
                        </a-form-model-item>
                        <a-form-model-item prop="code">
                        <a-input
                            v-model="form.code"
                            placeholder="请输入验证码"
                            
                        >
                            <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                        </a-form-model-item>
                        <a-form-model-item>
                        <a-button type="primary" html-type="submit" class="login-form-button">立即登陆</a-button>
                        
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
            btnTitle:'获取验证码',
            disabled:false,//发送验证码是否可以点击
            box_height:0,
            form:{
                phone:'',
                code:''
            },
            rules:{
                phone:[
                     { required: true,message: '请输入手机号码',trigger: 'blur'},
                     { pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: "请输入合法手机号/电话号", trigger: "blur"}
                ],
                code:[
                    { required: true,message: '请输入手机验证码',trigger: 'blur'}
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
        //获取验证码60s倒计时
        getCode(){
            let time = 59;
            let timer = setInterval(()=>{
                if(time==0){
                    clearInterval(timer)
                    this.disabled=false
                    this.btnTitle = "获取验证码";
                }
                else{
                    this.btnTitle=time+'秒后重试'
                    this.disabled=true
                    time--
                }
            },1000)
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
            .code{
                height: 40px;
                position:absolute;
                right: 1px;
                top: -10px;
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
                color: #73c3e6;
                .login-form-forgot{
                    width: 100px;
                }
                .register{
                    width: 100px;
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