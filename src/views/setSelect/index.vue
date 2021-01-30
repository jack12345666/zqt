<template>
    <common-layout>
        <div slot="header">
           <HeaderPhone :checkId="3"/>
           <search-item />
        </div>
        <div slot="content">
        <div class="bgContainer">
            <div class="formBox">
                <div class="formTitle">委托选址</div>
                  <a-form-model :label-col="labelCol" :wrapper-col="wrapperCol" class="form"  :rules="rules"  ref="ruleFormRef" :model="setSelectForm">
                        <a-form-model-item label="目标区域" prop="targetArea">
                        <a-select v-model="setSelectForm.targetArea" placeholder="请选择">
                            <a-select-option value="shanghai">
                            Zone one
                            </a-select-option>
                            <a-select-option value="beijing">
                            Zone two
                            </a-select-option>
                        </a-select>
                        </a-form-model-item>
                         <a-form-model-item label="场地类型" prop="siteType">
                        <a-select v-model="setSelectForm.siteType" placeholder="请选择">
                            <a-select-option value="shanghai">
                            Zone one
                            </a-select-option>
                            <a-select-option value="beijing">
                            Zone two
                            </a-select-option>
                        </a-select>
                        </a-form-model-item>
                        <a-form-model-item label="场地面积" prop="area">
                        <a-select v-model="setSelectForm.area" placeholder="请选择">
                            <a-select-option value="shanghai">
                            Zone one
                            </a-select-option>
                            <a-select-option value="beijing">
                            Zone two
                            </a-select-option>
                        </a-select>
                        </a-form-model-item>
                        <a-form-model-item label="委托方名称" prop="name">
                            <a-input v-model="setSelectForm.name" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="委托方联系人" prop="contacts">
                            <a-input v-model="setSelectForm.contacts" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="职位" prop="position">
                            <a-input v-model="setSelectForm.position" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="电子邮箱" prop="email">
                            <a-input v-model="setSelectForm.email" placeholder="请输入"/>
                        </a-form-model-item>
                        <a-form-model-item label="手机号码" prop="phone">
                            <a-input v-model="setSelectForm.phone" placeholder="请输入"/>
                            <a-button type="primary" class="btn_code" :disabled='disabled' @click="getCode">{{btnTitle}}</a-button>
                        </a-form-model-item>
                        <a-form-model-item label="验证码">
                            <a-input v-model="setSelectForm.code" placeholder="请输入验证码"/>
                        </a-form-model-item>
                  </a-form-model>
                  <div class="sub_btn">
                      <a-button type="primary" @click="showCommission">立即委托</a-button>
                  </div>
                  <div class="problems">
                      <span>如遇问题，请拨打:188-8888-8888</span>
                  </div>
            </div>
        </div>
         <a-modal v-model="dialogVisible" title="委托选址" @ok="handleOk" centered class="myModal">
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
                setSelectForm:{
                    targetArea:'',
                    siteType:'',
                    area:'',
                    name:'',
                    contacts:'',
                    position:'',
                    email:'',
                    phone:'',
                    code:''
                },
                rules:{
                    targetArea:[
                        {  required: true, message: '请选择目标区域', trigger: 'change' }
                    ],
                    siteType:[
                        {  required: true, message: '请选择场地类型', trigger: 'change' }
                    ],
                    area:[
                        {  required: true, message: '请选择场地面积', trigger: 'change' }
                    ],
                    name:[
                        { required: true, message: '请输入委托方名称', trigger: 'blur' }
                    ],
                    contacts:[
                        { required: true, message: '请输入委托联系人', trigger: 'blur' }
                    ],
                    position:[
                        { required: true, message: '请输入职位', trigger: 'blur' }
                    ],
                    email:[
                        { required: true, message: '电子邮箱不能为空', trigger: 'blur' }
                    ],
                    phone:[
                        { required: true,message: '手机号码不能为空',trigger: 'blur'},
                        { pattern:/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/, message: "请输入合法手机号/电话号", trigger: "blur"}    
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