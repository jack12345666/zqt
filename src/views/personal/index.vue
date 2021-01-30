<template>
  <div>
    <div class="header">
      <div slot="header">
        <HeaderLogo :checkId="6" />
      </div>
    </div>
    <div class="content">
      <div class="content_box">
        <!-- 个人资料区域 -->
        <div class="personalInfo">
          <div class="personal_title">
            <span>个人资料</span>
          </div>

          <div class="item">
            <div class="label">账号</div>
            <div class="value" v-if="!showAccountEdit">{{infoForm.account}}</div>
            <div class="value" v-if="showAccountEdit">
              <a-input v-model="infoForm.account"></a-input>
            </div>
          </div>

          <div class="item">
            <div class="label">昵称</div>
            <div class="value" v-if="!showNickEdit">231231</div>
            <div class="value" v-if="showNickEdit">
              <a-input v-model="infoForm.name"></a-input>
            </div>
            <div class="btn">
              <a-button type="primary" @click="showNickEdit = true" v-if="!showNickEdit">修改</a-button>
              <a-button type="primary" @click="submitEdit(1)" v-if="showNickEdit">确认修改</a-button>
            </div>
          </div>

          <div class="item">
            <div class="label">邮箱</div>
            <div class="value" v-if="!showEmailEdit">231231</div>
            <div class="value" v-if="showEmailEdit">
              <a-input v-model="infoForm.email"></a-input>
            </div>
            <div class="btn">
              <a-button type="primary" @click="showEmailEdit = true" v-if="!showEmailEdit">修改</a-button>
              <a-button type="primary" @click="submitEdit(2)" v-if="showEmailEdit">确认修改</a-button>
            </div>
          </div>

          <div class="item">
            <div class="label">手机</div>
            <div class="value" v-if="!showPhoneEdit">231231</div>
            <div class="value" v-if="showPhoneEdit">
              <a-input v-model="infoForm.phone"></a-input>
            </div>
            <div class="btn">
              <a-button type="primary" @click="showPhoneEdit = true" v-if="!showPhoneEdit">修改</a-button>
              <a-button type="primary" @click="submitEdit(3)" v-if="showPhoneEdit">确认修改</a-button>
            </div>
          </div>

          <div class="item">
            <div class="label">密码</div>
            <div class="value" v-if="!showPwdEdit">231231</div>
            <div class="value" v-if="showPwdEdit">
              <a-input v-model="infoForm.password"></a-input>
            </div>
            <div class="btn">
              <a-button type="primary" @click="showPwdEdit = true" v-if="!showPwdEdit">修改</a-button>
              <a-button type="primary" @click="submitEdit(4)" v-if="showPwdEdit">确认修改</a-button>
            </div>
          </div>
        </div>
        <!-- 看房记录 -->
        <div class="houseWatch">
          <div class="houseWatch_title">
            <span>看房记录</span>
          </div>
          <!-- <div class="houseWatch_box">
                        <img src="../../img/house.png" alt="">
                        <div class="detailInfo">
                            <div class="infoContent">
                                <div class="infoTitle">江干-钱江新城 杭州来福士中心</div>
                                <div class="infoDistance">江干-西兴-诚高大厦  距离「4号线-江锦路站」约278米</div>
                                <div class="infoFloors">高区/共30层</div>
                            </div> 
                            <div class="area">1000㎡
                                <p>建筑面积</p>
                            </div>
                            <div class="price">2元/㎡/天
                               <p> 月租金 6万/月</p>
                            </div>
                        </div>
          </div>-->
          <house-item />
        </div>
        <!-- 提交审核 -->
        <div class="subReview">
          <div class="subReview_title">
            <span>我提交的审核</span>
          </div>
          <div class="subReview_item">
            <div class="title">
              委托选址
              <span class="time">申请时间: 2020年8月1日 16：00</span>
            </div>
            <div class="subContent">
              <div class="sub_left">
                <div class="contentArea">
                  场地区域
                  <p>江干区</p>
                </div>
                <div class="contentType">
                  场地类型
                  <p>厂房</p>
                </div>
                <div class="contentSquare">
                  场地面积
                  <p>1000㎡</p>
                </div>
              </div>
              <div class="sub_right">
                <div class="reviewing">审核中</div>
                <div class="review_btn">
                  <a-button type="preview" @click="toDetail">查看详情</a-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  data() {
    return {
      labelCol: { span: 2 },
      wrapperCol: { span: 6 },
      infoForm: {
        account: "123",
        name: "默认昵称",
        email: "123456789@163.com",
        phone: "188-8888-8888",
        password: "00000000",
      },
      showAccountEdit: false,
      showNickEdit: false,
      showEmailEdit: false,
      showPhoneEdit: false,
      showPwdEdit: false,
    };
  },
  methods: {
    submitEdit(index) {
      if (index === 1) {
        this.showNickEdit = false;
      } else if (index === 2) {
        this.showEmailEdit = false;
      } else if (index === 3) {
        this.showPhoneEdit = false;
      } else {
        this.showPwdEdit = false;
      }
    },
    toDetail() {
      this.$router.push("/authorizeDetail");
    },
  },
};
</script>

<style lang="less" scope>
.content {
  background: #f9f9f9;
  .content_box {
    width: 1200px;
    // height: 1000px;
    margin: 0 auto;
    background: #fff;
  }
  .personalInfo {
    height: 600px;
    padding: 50px 20px;
    .personal_title {
      border-bottom: 2px solid #169bd5;
      margin-bottom: 25px;
      span {
        display: block;
        background: #169bd5;
        color: #fff;
        text-align: center;
        line-height: 38px;
        font-size: 16px;
        width: 100px;
      }
    }
    .item {
      display: flex;
      align-items: center;
      margin: 20px 25px;
      .label {
        width: 80px;
        font-size: 20px;
        color: #7f7f7f;
        margin-right: 50px;
      }
      .value {
        color: #333333;
        font-size: 18px;
        width: 300px;
        margin-right: 30px;
      }
    }

    .infoForm {
      margin-top: 20px;
      label {
        font-size: 20px;
      }
      .ant-input {
        height: 40px;
        border: none;
        font-size: 20px;
      }
      .ant-btn {
        position: absolute;
        right: -85px;
        top: -10px;
        background: #fff;
        color: #17a1e6;
      }
    }
  }
  .houseWatch {
    // height: 280px;
    padding: 50px 20px;
    .houseWatch_title {
      border-bottom: 2px solid #169bd5;
      margin-bottom: 15px;
      span {
        display: block;
        background: #169bd5;
        color: #fff;
        text-align: center;
        line-height: 38px;
        font-size: 16px;
        width: 100px;
      }
    }
    .houseWatch_box {
      display: flex;
      img {
        width: 300px;
        height: 170px;
      }
      .detailInfo {
        display: flex;
        flex: 1;
        justify-content: space-between;
        .infoContent {
          margin-left: 15px;

          .infoTitle {
            font-size: 20px;
            font-weight: 700;
          }
          .infoDistance {
            margin-top: 45px;
            font-size: 16px;
            font-weight: 400;
            color: #7f7f7f;
          }
          .infoFloors {
            margin-top: 20px;
            font-size: 16px;
            font-weight: 400;
            color: #7f7f7f;
          }
        }
        .area {
          align-self: center;
          font-size: 20px;
          color: #7f7f7f;
        }
        .price {
          align-self: center;
          font-size: 20px;
          color: #ff552e;
          p {
            color: #7f7f7f;
          }
        }
      }
    }
  }
  .subReview {
    height: 600px;
    padding: 50px 20px;
    .subReview_title {
      border-bottom: 2px solid #169bd5;
      margin-bottom: 15px;
      span {
        display: block;
        background: #169bd5;
        color: #fff;
        text-align: center;
        line-height: 38px;
        font-size: 16px;
        width: 100px;
      }
    }
    .subReview_item {
      .title {
        font-size: 20px;
        color: #333333;
        font-weight: 700;
        .time {
          margin-left: 40px;
          font-size: 16px;
          color: #7f7f7f;
          font-weight: normal;
        }
      }
      .subContent {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        .sub_left {
          display: flex;
          .contentArea {
            margin-right: 90px;
            color: #7f7f7f;
            font-size: 20px;
            p {
              font-size: 16px;
            }
          }
          .contentType {
            margin-right: 90px;
            color: #7f7f7f;
            font-size: 20px;
            p {
              font-size: 16px;
            }
          }
          .contentSquare {
            margin-right: 90px;
            color: #7f7f7f;
            font-size: 20px;
            p {
              font-size: 16px;
            }
          }
        }
        .sub_right {
          display: flex;
          .reviewing {
            margin-right: 100px;
            font-size: 16px;
            color: #4ad1d1;
            align-self: center;
          }
          .review_btn {
            align-self: center;
            button {
              margin-right: 20px;
              width: 120px;
              height: 40px;
              color: #fff;
              background: #4ad1d1;
            }
          }
        }
      }
    }
  }
}
</style>