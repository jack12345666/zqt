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
                <span class="title">设置新密码</span>

                        <!-- 表单 -->
                    <a-form-model ref="ruleForm" :model="form" :rules="rules"  class="login-form">
                        <a-form-model-item has-feedback  prop="pass">
                        <a-input v-model="form.pass" type="password" autocomplete="off" placeholder="请输入新密码"/>
                        </a-form-model-item>
                        <a-form-model-item has-feedback  prop="checkPass">
                        <a-input v-model="form.checkPass" type="password" autocomplete="off" placeholder="请再次输入新密码"/>
                        </a-form-model-item>

                        <a-form-model-item>
                        <a-button type="primary" html-type="submit" class="login-form-button">确认</a-button>
                        
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
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.pass) {
        callback(new Error("两次输入的密码不一致!"));
      } else {
        callback();
      }
    };
        return {
            box_height:0,
            form:{
                pass:'',
                checkPass:''
            },
            rules:{
               pass: [{ validator: validatePass, trigger: 'change' }],
                checkPass: [{ validator: validatePass2, trigger: 'change' }]
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
                height:40px;
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