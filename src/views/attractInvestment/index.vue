<template>
  <common-layout>
    <div slot="header">
      <HeaderPhone :checkId="4"/>
      <search-item />
    </div>

    <div slot="content">
      <div class="bgContainer">
        <div class="formBox">
          <div class="formTitle">委托招商</div>
          <a-form-model
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            class="form"
            :rules="rules"
            ref="ruleFormRef"
            :model="attractForm"
          >
            <a-form-model-item label="省" prop="targetArea">
              <a-select v-model="attractForm.targetArea" placeholder="请选择">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item label="市" prop="siteType">
              <a-select v-model="attractForm.siteType" placeholder="请选择">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item label="县/区" prop="area">
              <a-select v-model="attractForm.area" placeholder="请选择">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item label="项目名称" prop="projectName">
              <a-input v-model="attractForm.projectName" placeholder="请输入" />
            </a-form-model-item>
            <a-form-model-item label="场地类型" prop="fieldType">
              <a-input v-model="attractForm.fieldType" placeholder="请输入" />
            </a-form-model-item>
            <a-form-model-item label="项目体量" prop="volume">
              <a-input v-model="attractForm.volume" placeholder="请输入" />
            </a-form-model-item>
            <a-form-model-item label="目标行业" prop="industries">
              <a-select v-model="attractForm.industries" placeholder="请选择">
                <a-select-option value="shanghai">Zone one</a-select-option>
                <a-select-option value="beijing">Zone two</a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item label="目标企业" prop="enterprise">
              <a-input v-model="attractForm.enterprise" placeholder="请输入" />
            </a-form-model-item>
            <a-form-model-item label="委托主题名称" prop="theme">
              <a-input v-model="attractForm.theme" placeholder="请输入" />
            </a-form-model-item>
            <a-form-model-item label="联系人" prop="contacts">
              <a-input v-model="attractForm.contacts" placeholder="请输入" />
            </a-form-model-item>
            <a-form-model-item label="职位" prop="position">
              <a-input v-model="attractForm.position" placeholder="请输入" />
            </a-form-model-item>
            <a-form-model-item label="电子邮箱" prop="email">
              <a-input v-model="attractForm.email" placeholder="请输入" />
            </a-form-model-item>
            <a-form-model-item label="手机号码" prop="phone">
              <a-input v-model="attractForm.phone" placeholder="请输入" />
              <a-button
                type="primary"
                class="btn_code"
                :disabled="disabled"
                @click="getCode"
              >{{btnTitle}}</a-button>
            </a-form-model-item>
            <a-form-model-item label="验证码">
              <a-input v-model="attractForm.code" placeholder="请输入验证码" />
            </a-form-model-item>
          </a-form-model>
          <div class="commission">
            佣金
            <p>悬赏一定比例佣金会更快促进成交，成交后支付</p>
            <div class="commissionBox">
              <div
                :class="item.isChecked ? 'commissionItem checked' : 'commissionItem'"
                v-for="(item, index) in commissionList"
                :key="item.id"
                @click="checkItem(item, index)"
              >{{item.name}}</div>
            </div>
          </div>
          <div class="sub_btn">
            <a-button type="primary" @click="showCommission">立即委托</a-button>
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
export default {
  data() {
    return {
      commissionList: [
        { id: 1, name: "无", isChecked: true},
        { id: 2, name: "0.5个月", isChecked: false },
        { id: 3, name: "1个月", isChecked: false },
        { id: 4, name: "1.5个月", isChecked: false },
        { id: 5, name: "2个月", isChecked: false },
      ],
      dialogVisible: false,
      disabled: false,
      btnTitle: "获取验证码",
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
      attractForm: {
        projectName: "", //项目名称
        fieldType: "", //场地类型
        volume: "", //体量
        industries: "", //行业
        enterprise: "", //企业
        theme: "", //主题
        contacts: "", //联系人
        position: "", //职位
        email: "", //电子邮箱
        phone: "", //手机号码
        code: "",
      },
      rules: {
        targetArea: [
          { required: true, message: "请选择目标区域", trigger: "change" },
        ],
        siteType: [
          { required: true, message: "请选择场地类型", trigger: "change" },
        ],
        area: [
          { required: true, message: "请选择场地面积", trigger: "change" },
        ],
        projectName: [
          { required: true, message: "请填写项目名称", trigger: "blur" },
        ],
        fieldType: [
          { required: true, message: "请输入场地类型", trigger: "blur" },
        ],
        volume: [
          { required: true, message: "请输入项目体量", trigger: "blur" },
        ],
        industries: [
          { required: true, message: "请选择目标行业", trigger: "change" },
        ],
        enterprise: [
          { required: true, message: "请填写目标企业", trigger: "blur" },
        ],
        theme: [{ required: true, message: "请填写主题名称", trigger: "blur" }],
        contacts: [
          { required: true, message: "请填写联系人", trigger: "blur" },
        ],
        position: [{ required: true, message: "请输入职位", trigger: "blur" }],
        email: [
          { required: true, message: "电子邮箱不能为空", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "手机号码不能为空", trigger: "blur" },
          {
            pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
            message: "请输入合法手机号/电话号",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {},
  methods: {
    //获取验证码
    getCode() {
      let time = 59;
      let timer = setInterval(() => {
        if (time === 0) {
          clearInterval(timer);
          this.disabled = false;
          this.btnTitle = "获取验证码";
        } else {
          this.disabled = true;
          this.btnTitle = time + "秒后重试";
          time--;
        }
      }, 1000);
    },
    //显示委托成功
    showCommission() {
      this.dialogVisible = true;
    },
    handleOk() {
      this.dialogVisible = false;
    },
    checkItem(item, index) {
      this.commissionList.map(item => item.isChecked = false)
      this.commissionList[index].isChecked = true
    }
  }
}
</script>

<style lang="less">
.bgContainer {
  padding: 50px 0;
  background: #fafafa;
  .formBox {
    padding-top: 20px;
    background: #fff;
    width: 620px;
    margin: 0 auto;
    box-shadow: #aaaaaa 0 0 10px;
    border-radius: 20px;
    .formTitle {
      font-size: 32px;
      color: #333;
      font-family: "微软雅黑";
      text-align: center;
      padding-bottom: 20px;
    }
    .form {
      .ant-input {
        height: 30px;
      }
      .btn_code {
        position: absolute;
        font-size: 12px;
        top: -5px;
        right: 0;
        height: 30px;
      }
    }
    .commission {
      margin-left: 100px;
      font-size: 14px;
      color: #333;
      p {
        font-size: 12px;
        color: #aaaaaa;
      }
      .commissionBox {
        display: flex;
        .commissionItem {
          width: 70px;
          height: 42px;
          border: 1px solid #169bd5;
          border-radius: 5px;
          text-align: center;
          line-height: 42px;
          margin-right: 5px;
          margin-bottom: 15px;
          &:hover {
            cursor: pointer;
          }
        }
        .checked {
          background-color: #169bd5 !important;
          color: #fff !important;
           &:hover {
            cursor: pointer;
          }
        }
      }
    }
    .sub_btn {
      text-align: center;
      margin-top: 20px;
      margin-bottom: 40px;
      button {
        width: 200px;
        height: 40px;
      }
    }
    .problems {
      height: 60px;
      line-height: 60px;
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