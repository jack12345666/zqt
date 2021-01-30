<template>
    <div>
        <HeaderLogo />
        <div class="detailBox">
            <div  class="detailContainer" :style="{'min-height': box_height}">
        <!-- 标题 -->
        <div  class="authDetaileTitle"><span>基本信息</span></div>
        <!-- 信息区域 -->
        <div class="detailInfo">
            <div class="item">
              <div class="label">投资主体:</div>
              <div class="value" v-if="!showInvestorsEdit">{{detailForm.investors}}</div>
              <div class="value" v-if="showInvestorsEdit">
                 <a-input v-model="detailForm.investors"></a-input>
              </div>
              <div class="btn">
                    <a-button type="primary" @click="showEditForm(1)" v-if="!showInvestorsConfirm">修改</a-button>
                    <a-button type="primary" @click="submitEdit" v-if="showInvestorsConfirm">确认修改</a-button>
                </div>
            </div>
            <div class="item">
              <div class="label">项目名称:</div>
              <div class="value" v-if="!showProjectEdit">{{detailForm.project}}</div>
              <div class="value" v-if="showProjectEdit">
                 <a-input v-model="detailForm.project"></a-input>
              </div>
              <div class="btn">
                    <a-button type="primary" @click="showEditForm(2)" v-if="!showProjectConfirm">修改</a-button>
                    <a-button type="primary" @click="submitEdit" v-if="showProjectConfirm">确认修改</a-button>
                </div>
            </div>
            <div class="item">
              <div class="label">行业:</div>
              <div class="value" v-if="!showIndustryEdit">{{detailForm.industry}}</div>
              <div class="value" v-if="showIndustryEdit">
                 <a-input v-model="detailForm.industry"></a-input>
              </div>
              <div class="btn">
                    <a-button type="primary" @click="showEditForm(3)" v-if="!showIndustryConfirm">修改</a-button>
                    <a-button type="primary" @click="submitEdit" v-if="showIndustryConfirm">确认修改</a-button>
                </div>
            </div>
            <div class="item">
              <div class="label">拟投资规模:</div>
              <div class="value" v-if="!showInvestmentScaleEdit">{{detailForm.investmentScale}}</div>
              <div class="value" v-if="showInvestmentScaleEdit">
                 <a-input v-model="detailForm.investmentScale"></a-input>
              </div>
              <div class="btn">
                    <a-button type="primary" @click="showEditForm(4)" v-if="!showInvestmentScaleConfirm">修改</a-button>
                    <a-button type="primary" @click="submitEdit" v-if="showInvestmentScaleConfirm">确认修改</a-button>
                </div>
            </div>
            <div class="item">
              <div class="label">年销售额目标:</div>
              <div class="value" v-if="!showTargetEdit">{{detailForm.target}}</div>
              <div class="value" v-if="showTargetEdit">
                 <a-input v-model="detailForm.target"></a-input>
              </div>
              <div class="btn">
                    <a-button type="primary" @click="showEditForm(5)" v-if="!showTargetConfirm">修改</a-button>
                    <a-button type="primary" @click="submitEdit" v-if="showTargetConfirm">确认修改</a-button>
                </div>
            </div>
            <div class="item">
              <div class="label">产品:</div>
              <div class="value" v-if="!showProductionEdit">{{detailForm.production}}</div>
              <div class="value" v-if="showProductionEdit">
                 <a-input v-model="detailForm.production"></a-input>
              </div>
              <div class="btn">
                    <a-button type="primary" @click="showEditForm(6)" v-if="!showProductionConfirm">修改</a-button>
                    <a-button type="primary" @click="submitEdit" v-if="showProductionConfirm">确认修改</a-button>
                </div>
            </div>
            <div class="item">
              <div class="label">产品特色:</div>
              <div class="value" v-if="!showFeaturesEdit">{{detailForm.features}}</div>
              <div class="value" v-if="showFeaturesEdit">
                 <a-input v-model="detailForm.features"></a-input>
              </div>
              <div class="btn">
                    <a-button type="primary" @click="showEditForm(7)" v-if="!showFeaturesConfirm">修改</a-button>
                    <a-button type="primary" @click="submitEdit" v-if="showFeaturesConfirm">确认修改</a-button>
                </div>
            </div>
            <div class="item">
              <div class="label">项目简介:</div>
              <div class="value" v-if="!showIntroductionEdit">{{detailForm.introduction}}</div>
              <div class="value" v-if="showIntroductionEdit">
                 <a-input type="textarea" rows="5" v-model="detailForm.introduction" class="textarea"></a-input>
              </div>
              <div class="btn">
                    <a-button type="primary" @click="showEditForm(8)" v-if="!showIntroductionConfirm">修改</a-button>
                    <a-button type="primary" @click="submitEdit" v-if="showIntroductionConfirm">确认修改</a-button>
                </div>
            </div>
            <div class="item">
                <div class="label">商业计划书:</div>
                <div class="value">
                    <span style="color:#1890ff;cursor:pointer;">点击下载附件</span>
                </div>
                <div class="btn">
                    <a-upload>
                        <a-button type="primary">重新上传</a-button>
                    </a-upload>
                </div>
            </div> 
            <div class="item">
              <div class="label">联系人:</div>
              <div class="value" v-if="!showContactsEdit">{{detailForm.contacts}}</div>
              <div class="value" v-if="showContactsEdit">
                 <a-input v-model="detailForm.contacts"></a-input>
              </div>
              <div class="btn">
                    <a-button type="primary" @click="showEditForm(9)" v-if="!showContactsConfirm">修改</a-button>
                    <a-button type="primary" @click="submitEdit" v-if="showContactsConfirm">确认修改</a-button>
                </div>
            </div>
            <div class="item">
              <div class="label">电子邮箱:</div>
              <div class="value" v-if="!showEmailEdit">{{detailForm.email}}</div>
              <div class="value" v-if="showEmailEdit">
                 <a-input v-model="detailForm.email"></a-input>
              </div>
              <div class="btn">
                    <a-button type="primary" @click="showEditForm(10)" v-if="!showEmailConfirm">修改</a-button>
                    <a-button type="primary" @click="submitEdit" v-if="showEmailConfirm">确认修改</a-button>
                </div>
            </div>
            <div class="item">
              <div class="label">手机号码:</div>
              <div class="value" v-if="!showPhoneEdit">{{detailForm.phone}}</div>
              <div class="value" v-if="showPhoneEdit">
                 <a-input v-model="detailForm.phone"></a-input>
              </div>
              <div class="btn">
                    <a-button type="primary" @click="showEditForm(11)" v-if="!showPhoneConfirm">修改</a-button>
                    <a-button type="primary" @click="submitEdit" v-if="showPhoneConfirm">确认修改</a-button>
                </div>
            </div>
            <div class="item">
                <a-button type="primary" class="again_btn">重新申请</a-button>
            </div>
        </div>
        </div>
        </div>
          <Footer />
    </div>
</template>

<script>
export default {
    data(){
        return {
            detailForm:{
                investors:'xx企业',
                project:'xx项目',
                industry:'新销售',
                investmentScale:'2000万',
                target:'100万',
                production:'彩护',
                features:'特色',
                introduction:'简单快速简单克拉的接口逻辑思考了多久啊简单快速简单克拉的接口逻辑思考了多久啊简单快速简单克拉的接口逻辑思考了多久啊简单快速简单克拉的接口逻辑思考了多久啊简单快速',
                contacts:'王老五',
                email:'123456789@163.com',
                phone:'188-8888-8888'
            },
            showInvestorsEdit:false,
            showInvestorsConfirm:false,
            showProjectEdit:false,
            showProjectConfirm:false,
            showIndustryEdit:false,
            showIndustryConfirm:false,
            showInvestmentScaleEdit:false,
            showInvestmentScaleConfirm:false,
            showTargetEdit:false,
            showTargetConfirm:false,
            showProductionEdit:false,
            showProductionConfirm:false,
            showFeaturesEdit:false,
            showFeaturesConfirm:false,
            showIntroductionEdit:false,
            showIntroductionConfirm:false,
            showContactsEdit:false,
            showContactsConfirm:false,
            showEmailEdit:false,
            showEmailConfirm:false,
            showPhoneEdit:false,
            showPhoneConfirm:false
        }
    },
    created(){
        this.getHeight()
    },
    methods:{
        showEditForm(index){
            console.log(index)
            if(index===1){
                this.showInvestorsEdit=true
                this.showInvestorsConfirm=true
            }
            else if(index===2){
                this.showProjectEdit=true
                this.showProjectConfirm=true 
            }
             else if(index===3){
                this.showIndustryEdit=true
                this.showIndustryConfirm=true 
            }
            else if(index===4){
                this.showInvestmentScaleEdit=true
                this.showInvestmentScaleConfirm=true 
            }
            else if(index===5){
                this.showTargetEdit=true
                this.showTargetConfirm=true 
            }
            else if(index===6){
                this.showProductionEdit=true
                this.showProductionConfirm=true 
            }
            else if(index===7){
                this.showFeaturesEdit=true
                this.showFeaturesConfirm=true 
            }
            else if(index===8){
                this.showIntroductionEdit=true
                this.showIntroductionConfirm=true 
            }
            else if(index===9){
                this.showContactsEdit=true
                this.showContactsConfirm=true 
            }
            else if(index===10){
                this.showEmailEdit=true
                this.showEmailConfirm=true 
            }
            else if(index===11){
                this.showPhoneEdit=true
                this.showPhoneConfirm=true 
            }
        },
        //获取内容区域高度
        getHeight(){
            this.box_height=(window.innerHeight-80)+'px'
            console.log(this.box_height)
        }
    }
}
</script>

<style lang="less" scope>
.detailBox{
    background: #f9f9f9;
.detailContainer{
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    .authDetaileTitle{
            border-bottom: 2px solid #169bd5;
            margin-bottom: 15px;
            span{
                padding: 5px;
                display: block;
                background: #169bd5;
                color: #fff;
                text-align: center;
                line-height: 38px;
                font-size: 18px;
                width: 100px; 
            }
    }
    .detailInfo{
        .item{
            justify-content: center;
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            margin-top: 20px;
            .label{
                width: 150px;
                font-size: 18px;
                color: #7f7f7f;
                margin-right: 50px;
                text-align: right;
            }
            .value {
                color: #333333;
                font-size: 16px;
                width: 300px;
                margin-right: 30px;
                .textarea{
                    resize:none
                }
            }
            .again_btn{
                width:276px;
                height:40px;
                font-size: 16px;
                background:#1890ff;
                margin: 50px 0;
            }
            
        }
    }
}
}
</style>