<template>
    <common-layout>
      <div slot="header">
            <HeaderPhone :checkId="5"/>
            <search-item />
      </div>
        <div slot="content">
            <div class="bgContainer">
            <div class="formBox">
                <div class="formTitle">投资计划提交</div>
                  <a-form-model :label-col="labelCol" :wrapper-col="wrapperCol" class="form"  :rules="rules"  ref="ruleFormRef" :model="hallForm">
                        <a-form-model-item label="投资主体" prop="investors">
                            <a-input v-model="hallForm.investors" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="项目名称" prop="projectName">
                            <a-input v-model="hallForm.projectName" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="行业" prop="industry">
                        <a-select v-model="hallForm.industry" placeholder="请选择">
                            <a-select-option value="shanghai">
                            Zone one
                            </a-select-option>
                            <a-select-option value="beijing">
                            Zone two
                            </a-select-option>
                        </a-select>
                        </a-form-model-item>
                         <a-form-model-item label="投资规模" prop="investment">
                             <a-input v-model="hallForm.investment" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="年销售额目标" prop="salesTarget">
                             <a-input v-model="hallForm.salesTarget" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="产品" prop="production">
                            <a-input v-model="hallForm.production" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="产品特色" prop="features">
                            <a-input v-model="hallForm.features" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="项目简介" prop="introduction">
                            <a-input type="textarea" rows="5" v-model="hallForm.introduction" placeholder="请输入" class="manyRow"/>
                        </a-form-model-item>
                        <a-form-model-item label="商业计划书">
                            <a-upload>
                                <a-icon type="cloud-upload" />
                                <span class="upload">点击上传附件</span>
                                </a-upload>
                        </a-form-model-item>
                        <a-form-model-item label="联系人" prop="contacts">
                            <a-input v-model="hallForm.contacts" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="电子邮箱" prop="email">
                            <a-input v-model="hallForm.email" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="手机号码" prop="phone">
                            <a-input v-model="hallForm.phone" placeholder="请输入"/>
                            <a-button type="primary" class="btn_code" :disabled='disabled' @click="getCode">{{btnTitle}}</a-button>
                        </a-form-model-item>
                        <a-form-model-item label="验证码">
                            <a-input v-model="hallForm.code" placeholder="请输入验证码"/>
                        </a-form-model-item>
                  </a-form-model>
                  <div class="sub_btn">
                      <a-button type="primary" @click="showCommission">立即提交</a-button>
                  </div>
                  <div class="problems">
                      <span>如遇问题，请拨打:188-8888-8888</span>
                  </div>
            </div>
        </div>

         <a-modal v-model="dialogVisible" title="委托选址" @ok="handleOk" centered class="myModal" okText="确认" cancelText="取消">
            <p>委托申请已发送，我们的客服人员可能会给您打电话或发邮件，请注意查收</p>
        </a-modal>

        </div>
        <Footer />
    </common-layout>
</template>

<script>
    export default{
        data(){
            return {
                dialogVisible:false,
                disabled:false,
                btnTitle:'获取验证码',
                labelCol:{span:6},
                wrapperCol:{span:14},
                hallForm:{
                    investors:'',//投资主体
                    projectName:'',//项目名称
                    industry:'',//行业
                    investment:'',//投资规模
                    salesTarget:'',//销售额目标
                    production:'',//产品
                    features:'',//产品特色
                    introduction:'',//产品简介
                    contacts:'',
                    email:'',
                    phone:'',
                    code:''
                },
                rules:{
                    investors:[
                        { required: true, message: '请填写投资的主体', trigger: 'blur' }
                    ],
                    projectName:[
                        { required: true, message: '请填写你的项目名称', trigger: 'blur' }
                    ],
                    industry:[
                        { required: true, message: '请选择你的行业', trigger: 'change' }
                    ],
                    investment:[
                        {  required: true, message: '请填写投资规模', trigger: 'blur' }
                    ],
                    salesTarget:[
                        {  required: true, message: '请填写年销售额目标', trigger: 'blur' }
                    ],
                    production:[
                        {  required: true, message: '请填写你的产品', trigger: 'blur' }
                    ],
                    features:[
                        { required: true, message: '请输入产品特色', trigger: 'blur' }
                    ],
                    introduction:[
                        { required: true, message: '请输入项目简介', trigger: 'blur' }
                    ],
                    contacts:[
                        { required: true, message: '请输入联系人姓名', trigger: 'blur' }
                    ],
                   
                    email:[
                        { required: true, message: '电子邮箱不能为空', trigger: 'blur' }
                    ],
                    phone:[
                        { required: true,message: '手机号码不能为空',trigger: 'blur'},
                        { pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: "请输入合法手机号/电话号", trigger: "blur"}    
                    ],
                     code:[
                        { required: true, message: '验证码不能为空', trigger: 'blur' }
                    ]
                }
            }
        },
        created(){},
        methods:{
            //获取验证码
            getCode(){
                let time = 59;
                let timer = setInterval(()=>{
                    if(time===0){
                        clearInterval(timer)
                        this.disabled=false
                        this.btnTitle='获取验证码'
                    }
                    else{
                        this.disabled=true
                        this.btnTitle=time+'秒后重试'
                        time--
                    }
                },1000)
            },
            //显示委托成功
            showCommission(){
                this.dialogVisible=true
            },
            handleOk(){
                this.dialogVisible=false
            }
        }
    }
</script>

<style lang="less">
.bgContainer{
    padding: 50px 0;
    background: #fafafa;
    .formBox{
        padding-top: 20px;
        background: #fff;
        width:620px;
        margin: 0 auto;
        box-shadow: #aaaaaa 0 0 10px;
        border-radius: 20px;
        .formTitle{
            font-size: 32px;
            color: #333;
            font-family: '微软雅黑';
            text-align: center;
            padding-bottom: 20px;
        }
        .form{
            .ant-input{
                height: 30px;
            }
            .manyRow{
               resize: none;
            }
            .upload{
                color: #b7b7b7;
                cursor: pointer;
                margin-left: 5px;
            }
            .btn_code{
                position: absolute;
                font-size: 12px;
                top: -5px;
                right: 0;
                height: 30px;
            }
        }
        .sub_btn{
            text-align: center;
            margin-bottom: 40px;
            button{
                width: 200px;
                height: 40px;
            }
        }
        .problems{
            height: 60px;
            line-height:60px;
            font-size: 12px;
            background: #f2f2f2;
            color: #aaaaaa;
            text-align: center;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
        }
    }
   
    
}
</style>