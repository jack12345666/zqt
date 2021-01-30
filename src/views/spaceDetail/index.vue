<template>
  <common-layout>
      <div slot="header"></div>
      <div slot="content" id="main">
            <header-phone />
            <search-item :style="scroll > 40 ? fixedSearch : ''"/>
            <div class="header">
              <div class="headerBox">
                  <!-- <a-breadcrumb separator=">">
                    <a-breadcrumb-item href=""><span @click="goIndex">政企通</span></a-breadcrumb-item>
                    <a-breadcrumb-item href="" ><span @click="toBack">共享空间</span></a-breadcrumb-item>
                    <a-breadcrumb-item>杭州来福士中心租售</a-breadcrumb-item>
                  </a-breadcrumb> -->
                  <div class="namePrice">
                    <div class="name"> {{spaceDetail.name}} </div>
                    <div class="price">{{spaceDetail.propertyFeeInfo}}</div>
                 </div> 
                 <div class="address">
                     <a-icon type="environment" style="margin-right: 10px;"/>{{spaceDetail.address}}
                 </div> 
              </div>
          </div>
          <div class="content">
              <div class="contentBox">
                     <a-row :gutter="16">
                        <a-col :span="16">
                            <div class="bannerList">
                              <a-carousel arrows autoplay>
                              <div
                                slot="prevArrow"
                                class="custom-slick-arrow"
                                style="left: 10px;zIndex: 1;margin-top: -30px;"
                                >
                                <a-icon type="left-circle" />
                                </div>
                                <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px;margin-top: -30px;">
                                  <a-icon type="right-circle" />
                                </div>
                                <div v-for="item in bannerList" :key="item.id">
                                    <img :src="item.filePath | imgFormat" alt="图片"/>
                                </div>
                            </a-carousel> 
                             </div>
                        </a-col>
                         <a-col :span="8">
                             <amap />
                        </a-col>
                    </a-row>
                    <!-- <div :class="scroll > 590 ? 'guide guide-box-fixed' : 'guide'">
                       <div class="guideContent">
                            <div :class="item.isChecked ? 'maoItem checked' : 'maoItem'" v-for="(item, index) in guideList" :key="item.id" @click="checkGuide(item, index)">
                                {{item.name}}
                            </div>
                       </div>
                </div> -->
              </div>
          </div>
          <div class="bottomBox">
            <div class="bottomInfo">
                 <a-row :gutter="16">
                 <a-col :span="18">
                    <div class="bottomLeft">
                        <!-- 在租户型 -->
                      <div class="nowHouse">
                          <house-table  :houseList="venueDetail"/>
                      </div>
                        <!--服务顾问带看  -->
                        <!-- <div class="look">
                            <look-list />
                        </div> -->
                        <!-- 大厦详情 -->
                        <div class="houseDetail">
                            <space-introduce :spaceDetail="spaceDetail"/>
                        </div>
                    </div>
                </a-col>
                <a-col :span="6">
                    <div :class="scroll > 630 ? 'bottomRight fixed' : 'bottomRight'">
                       <div class="order">
                        <div class="title">立即预约</div>
                          <div class="focus">该商务中心近30天共有54人关注</div>
                          <a-input-number  v-model="phone" placeholder="手机号码" style="width: 100%;height: 40px;line-height: 40px;margin-bottom: 20px;"/>
                          <a-input  v-model="verCode" placeholder="验证码" style="width: 100%;height: 40px;line-height: 40px;margin-bottom: 20px;">
                               <div slot="addonAfter">获取验证码</div>
                          </a-input>
                         <a-button type="primary" block style="height: 45px;">预约看房</a-button> 
                    </div>
                    </div>
                </a-col>
              </a-row>
            </div>   
          </div>
         </div>
  </common-layout>
</template>

<script>
import { getVenueInfo , searchVenueDetails } from '../../api/party'
export default {
    data() {
        return {
             bannerList: [],
            scroll:'',
            fixedSearch: {
                position: 'fixed',
                marginTop: '-40px',
                zIndex: 1
            },
            phone: '',
            verCode: '',
            guideList: [
                { id: 1, name: '在租户型', isChecked: true },
                { id: 2, name: '服务顾问带看', isChecked: false },
                { id: 3, name: '商务中心简介', isChecked: false },
                { id: 4, name: '10分钟步行圈', isChecked: false },
                { id: 5, name: '周边商务中心', isChecked: false }
            ],
            venueId:'',
            spaceDetail:{},
            searchVenueDetails:{
                pageIndex:1,
                pageSize:100,
            },
            venueDetail:[]
        }
    },
    created(){
        this.venueId = this.$route.params.id
        console.log(this.venueId)
        this.fetchVenueInfo()
        this.fetchSearchVenueDetails()
    },
    mounted(){
      document.getElementById('main').parentElement.addEventListener("scroll", this.handleScroll);
    }, 
    destroyed(){
     document.getElementById('main').parentElement.removeEventListener('scroll', this.handleScroll)
    }, 
    methods: {
        goIndex() {
            this.$router.push('/')
        },
        toBack() {
            this.$router.go(-1)
        },
       handleScroll(){
        this.scroll = document.getElementById('main').parentElement.scrollTop
     },
     checkGuide(item, index) {
         this.guideList.map(item => item.isChecked = false)
         this.guideList[index].isChecked = true
     },
     //获取大楼厂房详情
     async fetchVenueInfo(){
         let rsp = await getVenueInfo({venueId: this.venueId})
         if(rsp && rsp.code==='0'){
             this.bannerList = rsp.files
             this.spaceDetail = rsp.data
             this.$store.commit('party/changeVenusDetail', this.spaceDetail)
         }
     },
     //获取大楼、厂房里的出租信息列表
     async fetchSearchVenueDetails(){
         this.searchVenueDetails.venueId = this.venueId
         let rsp = await searchVenueDetails(this.searchVenueDetails)
         if(rsp && rsp.code==='0'){
             this.venueDetail = rsp.datas
         }
     }
    }
}
</script>
<style scoped>
.ant-carousel >>> .custom-slick-arrow {
  width: 60px;
  height: 60px;
  font-size: 60px;
  color: #fff;
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.7;
}
span >>> .ant-input-group-addon {
    background-color: #fff;
}
span >>> .ant-input {
    border-right: none;
}
span >>> .ant-input:hover {
    border-color: #d8d8d8;
}
span >>> .ant-input-group-addon:hover {
    cursor: pointer;
}
.ant-btn-primary {
    background-color: #17a1e6;
    border: none;
}
</style>
<style lang='less' scoped>
.header {
    background-color: #fff;
    .headerBox {
        width: 1200px;
        margin: 0 auto;
        padding: 10px 0;
        .namePrice {
            display: flex;
            align-items: center;
            justify-content: space-between;
           .name {
            font-size: 22px;
            font-weight: 700;
            margin: 10px 0;
         }
         .price {
             color: #ff552e;
             font-size: 20px;
         }
         .address {
             color: #7f7f7f;
         }
        } 
    }
}
.content { 
     background-color: #fff;
    .contentBox {
        width: 1200px;
        margin: 0 auto;
        padding: 10px 0;
        .bannerList {
            background-color: #fff;
            padding: 10px;
            img {
                width: 100%;
                height: 460px;
                border-radius: 5px;
            }
        }
        .guide {
            width: 100%;
            background-color: #fff;
            padding-left: 10px;
            .guideContent {
                width: 1200px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                font-size: 16px;
                 .maoItem {
                   margin-right: 50px;
                   padding: 10px 0;
                   cursor: pointer;
                }
                .checked {
                    border-bottom: 2px solid #17a1e6;
                    color: #17a1e6;
                }
            }
        }
        .guide-box-fixed { 
            position: fixed;
            left: 0;
            top: 86px;
            z-index: 10;
            border-bottom: 1px solid rgba(0,0,0,0.1);
        }
    }
}
.bottomBox {
    width: 100%;
    .bottomInfo {
        width: 1200px;
        margin: 20px auto 20px auto;
        .bottomLeft {
           
            .nowHouse {
                padding: 0 25px;
                 background-color: #fff;
            }
            .look {
                padding: 0 25px;
                background-color: #fff;
                margin-top: 20px;
            }
            .houseDetail {
                 padding: 0 25px;
                background-color: #fff;
                margin-top: 20px;
            }
        }
        .bottomRight {
            background-color: #fff;
            .order {
            background-color: #fff;
            padding: 15px;
            .focus {
                margin-bottom: 20px; 
                color: #838383;
                font-size: 14px;
            }
            .title {
                margin-bottom: 5px;
                color: #000;
                font-size: 16px;
             }
            }
        }
       }
       .fixed {
            width: 290px;
            position: fixed;
            left: 1200;
            top: 93px;
            z-index: 10;
       }
    }

</style>