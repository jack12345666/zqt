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
                <span class="title">手机注册</span>

                        <!-- 表单 -->
                    <a-form-model :model="form" :rules="rules" class="login-form">
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
                        <a-button type="primary" html-type="submit" class="login-form-button" @click="fetchRegisterAccount">立即注册</a-button>
                     
                        </a-form-model-item>
                   </a-form-model>
                     <div class="problems">
                        <span>遇到问题？请拨打188-8888-8888</span>
                    </div>
            </a-card>
           
           <a-modal v-model="visible" title="验证码" ok-text="确认" cancel-text="取消" @ok="hideModal">
               <div class="visibleBox" style="display:flex">
                   <img :src="codeUrl" alt="" @click="changeCode" style="height:45px;width:160px">
                    <a-input style="width:200px;margin-left:100px" v-model="imageCode"></a-input>
               </div>
            </a-modal>

        </div>

        <div class="footer">
            <Footer />
        </div>
    </div>
</template>


<script>
import { checkAccount , getVertifyImage , getVertifySms , registerAccount } from '../../api/party'
import { BASEURL } from '../../utils/config'
import { message } from 'ant-design-vue'
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
            },
            checkConf:{
                action:'register'
            },
            visible: false,
            codeUrl: '',
            imageCode:'',
            picCode:''
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
        changeCode() {
            this.codeUrl = `${BASEURL}/qzt/getVertifyImage?t=` + +new Date()
        },
        hideModal() {
           
            this.fetchVertifySms()
        },
        handleSubmit(){},
        //获取验证码60s倒计时
        getCode(){
            if(this.form.phone === ''){
                return 
            }
            this.fetchCheckAccount()
            
        },
        //判断手机号是否存在
        async fetchCheckAccount(){
            this.checkConf.account = this.form.phone
            let rsp = await checkAccount(this.checkConf)
            console.log(rsp)
            if(rsp && rsp.code === '0'){
                //账号存在，可进行下一步操作
                this.fetchGetVertifyImage()
            }else if(rsp.code === '14'){
                //账号未注册，应提示用户前往注册
            }
        },
        //获取图片验证码
        async fetchGetVertifyImage(){
            let rsp = await getVertifyImage()
            if(rsp) {
                this.codeUrl = `${BASEURL}/qzt/getVertifyImage?t=` + +new Date()
                this.visible = true
            }
        },
        //获取短信验证码
        async fetchVertifySms(){
            let rsp = await getVertifySms({picCode: this.imageCode})
            console.log(rsp)
            if(rsp.code==='0'){
                //验证码输入正确
                 this.visible = false
                 message.success('短信验证码已下发,请注意接收')
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
            }else if(rsp.code ==='13'){
                // message.error('验证码输入错误请重新输入')
                this.changeCode()
            }
        },
        //短信验证码注册
        async fetchRegisterAccount(){
            let rsp = await registerAccount({vercode:this.form.code})
            console.log(rsp)
            if(rsp.code === '0'){
                message.success('注册成功！')
                this.$router.push('/phoneLogin')
            }
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

    .visibleBox{
        display: flex;
    }

}
</style>