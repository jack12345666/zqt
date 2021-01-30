<template>
  <common-layout>
      <div slot="header">
          <header-phone />
          <search-item />
          <div class="header">
              <div class="headerBox">
                  <!-- <a-breadcrumb separator=">">
                    <a-breadcrumb-item href=""><span @click="goIndex">政企通</span></a-breadcrumb-item>
                    <a-breadcrumb-item href="" ><span @click="toBack">共享空间</span></a-breadcrumb-item>
                    <a-breadcrumb-item>杭州来福士中心租售</a-breadcrumb-item>
                  </a-breadcrumb>   -->
                  <div class="title">{{venueDetailInfo.name}}</div> 
              </div>
          </div>
      </div>
      <div slot="content">
          <div class="content">
              <div class="contentBox">
                  <div class="bannerInfo">
                      <a-row>
                        <a-col :span="16">
                           <a-carousel arrows autoplay v-if="bannerList.length > 0">
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
                                        <img :src="item.filePath | imgFormat" alt="图片" />
                                    </div>
                            </a-carousel>
                                <div v-else>
                                       <img :src="require('@/img/img_preparing.jpg')"  />
                                </div>
                        </a-col>
                        <a-col :span="8">
                           <div class="rightInfo">
                               <div class="item">
                                   <div class="yearPrice">月租:{{venueDetailInfo.monthRent}}</div>
                                   <div class="dayPrice">单价</div>
                               </div>
                               <div class="item">
                                   <div class="square">
                                       <div class="value">{{venueDetailInfo.buildingArea}}㎡</div>
                                       <div class="label">建筑面积</div>
                                   </div>
                                    <div class="square">
                                       <div class="value">{{venueDetailInfo.workingPositionLow}}-{{venueDetailInfo.workingPositionHigh}}人</div>
                                       <div class="label">可容纳工位数</div>
                                   </div>
                               </div>
                               <div class="address">
                                   <div class="direction">
                                       <div class="label">窗面朝向</div>
                                       <div class="value">{{venueDetailInfo.oriention}}</div>
                                    </div>
                                    <div class="direction">
                                       <div class="label">地理位置</div>
                                       <div class="value">{{party.venusDetail.address}}</div>
                                    </div>      
                               </div>
                               <!-- <div class="item" style="border: none;">
                                   <div class="avatar">
                                         <a-avatar :size="64" icon="user" />
                                   </div>
                                   <div class="personInfo">
                                       <div class="name">李先生</div>
                                       <div class="title">来福士中心租售负责人</div>
                                       <div class="phone">免费预约:188-8888-8888</div>
                                   </div>
                               </div>
                               <div class="contact">
                                    <a-button type="primary" block style="height: 45px;">立即联系他</a-button>
                               </div> -->
                           </div>
                        </a-col>
                    </a-row>   
                  </div>
               <a-row :gutter="16">
                <a-col :span="16">
                   <div class="moreInfo">
                       <div class="titleComponent">
                           <div class="sign"></div>
                           <div class="title">基本信息</div>
                       </div>
                       <div class="item">
                           <div class="label">房源编号</div>
                           <div class="value">{{venueDetailInfo.no}}</div>
                       </div>
                       <div class="item">
                           <div class="label">更新时间</div>
                           <div class="value">{{venueDetailInfo.updateTime.time | timeFormat}}</div>
                       </div>
                       <div class="item">
                           <div class="label">免租时间</div>
                           <div class="value">{{venueDetailInfo.freeDays}}</div>
                       </div>
                       <div class="item">
                           <div class="label">最短租期</div>
                           <div class="value">{{venueDetailInfo.shortestLease}}</div>
                       </div>
                       <div class="item">
                           <div class="label">物业费用</div>
                           <div class="value">{{venueDetailInfo.propertyFee}}</div>
                       </div>
                       <div class="item">
                           <div class="label">空调费用</div>
                           <div class="value">{{venueDetailInfo.airConditioningCost}}</div>
                       </div>
                       <div class="item">
                           <div class="label">停车费用</div>
                           <div class="value">{{venueDetailInfo.parkingFee}}</div>
                       </div>
                        <div class="item">
                           <div class="label">楼层信息</div>
                           <div class="value">
                               {{venueDetailInfo.floorInfo}}
                           </div>
                       </div>
                   </div>
                </a-col>
                <a-col :span="8">
                    <div class="order">
                        <div class="title">预约看房</div>
                         <a-input-number  v-model="phone" placeholder="手机号码" style="width: 100%;height: 40px;line-height: 40px;margin-bottom: 20px;"/>
                         <a-button type="primary" block style="height: 45px;">立即预约</a-button> 
                        <div class="tips">我们承诺仅将你的联系方式用于找房服务</div>
                    </div>
                </a-col>
            </a-row> 
            <a-row :gutter="16">
            <a-col :span="16">
                <div class="budilingInfo">
                <div class="budiling_title">
                    <div class="budiling_tit">{{party.venusDetail.name}}</div>
                    <div class="budiling_more" @click="toVenus">查看大厦详情 ></div>
                </div>  
                <div class="budilingContent">
                    <div class="text">
                        <div class="text_item">
                            大厦均价:
                            <span style="color:#cc2929">-</span>
                        </div>
                        <div class="text_item">
                            竣工时间:
                            <span>{{party.venusDetail.completionDate}}</span>
                        </div>
                        <div class="text_item">
                            车位数量:
                            <span>{{party.venusDetail.parkingSpace}}</span>
                        </div>
                        <div class="text_item">
                            物业公司:
                            <span>{{party.venusDetail.propertyManagementCompany}}</span>
                        </div>
                        <div class="text_item">
                            在租户型:
                            <span style="color:#17a1e6">-</span>
                        </div>
                    </div>
                    <div class="budilingImg">
                        <img :src="party.venusDetail.coverPicPath | imgFormat" alt="">
                    </div>
                </div>
                </div>  
            </a-col> 
            <a-col :span="8"></a-col>
            </a-row>
          </div>
        </div>
      </div>
  </common-layout>
</template>

<script>
import { getVenueDetailInfo } from '../../api/party'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            bannerList: [],
            phone: null,
            VenueDetails:{
                pageIndex:1,
                pageSize:10,
                venueId:''
            },
            venueDetailId:null,
            venueDetailInfo:{},
            infoFromStore:[]
        }
    },
    computed: {
      ...mapState(['party'])  
    },
    created(){
        this.venueDetailId = this.$route.params.id
        this.fetchGetVenueDetailInfo()
        console.log(this.party.venusDetail)
    },
    methods: {
        goIndex() {
            this.$router.push('/')
        },
        toBack() {
            this.$router.go(-1)
        },
        toVenus() {
           this.$router.go(-1)
        },
        async fetchGetVenueDetailInfo(){
            let rsp = await getVenueDetailInfo({venueDetailId: this.venueDetailId})
            console.log(rsp)
            if(rsp && rsp.code === '0'){
                this.venueDetailInfo = rsp.data
                this.bannerList = rsp.files
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
        .title {
            font-size: 22px;
            font-weight: 700;
            margin: 10px 0;
        }
    }
}
.content {
    .contentBox {
        width: 1200px;
        margin: 0 auto;
        padding: 10px 0;
        .bannerInfo {
            margin-top: 10px;
            background-color: #fff;
            padding: 10px;
            img {
                width: 100%;
                height: 460px;
            }
        }
        .rightInfo {
            margin-left: 40px;
            .item {
                display: flex;
                align-items: center;
                padding: 15px 0;
                border-bottom: 1px solid #f8f8f8;
                .yearPrice {
                    color: #ff6744;
                    font-size: 18px;
                    margin-right: 50px;
                }
                .dayPrice {
                    color: #ff6744;
                    font-size: 18px;
                }
                .square {
                    margin-right: 50px;
                    .value {
                        color: #5f5f5f;
                        font-size: 20px;
                        margin-bottom: 15px;
                    }
                    .label {
                        color: #7b7b7b;
                        font-size: 16px;
                    }
                }
                .avatar {
                    margin-top: -10px;
                }
                .personInfo {
                    font-size: 16px;
                    margin-left: 20px;
                    padding-top: 5px;
                    .name {
                        color: #555555; 
                        margin-bottom: 10px;
                    }
                    .title {
                        color: #b7b7b7;
                        margin-bottom: 10px;
                    }
                    .phone {
                       color: #b7b7b7; 
                    }
                }
            }
            .contact {
                margin-top: 30px;
            }
            .address {
                padding: 15px 0;
                 border-bottom: 1px solid #f8f8f8;
                 .direction {
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    margin-bottom: 15px;
                    &:last-child {
                        margin-bottom: 5px;
                    }
                    .label {
                        color: #b7b7b7;
                        margin-right: 50px;
                    }
                    .value {
                        color: #c0c0c0;
                    }
                }
            }
        }
        .moreInfo {
            margin-top: 15px;
            background-color: #fff;
            padding: 20px;
            .titleComponent {
                display: flex;
                align-items: center;
                margin-bottom: 15px;
                .sign {
                    height: 26px;
                    width: 3px;
                    background-color: #17a1e6;
                    margin-right: 8px;
                }
                .title {
                    color: #000;
                    font-size: 18px;
                }
            }
            .item {
                display: flex;
                // align-items: center;
                font-size: 14px;
                margin-bottom: 5px;
                .label {
                    color: #b2b2b2;
                    width: 80px;
                }
                .value {
                   color: #4a4a4a; 
                   width: 300px;
                   
                }
            }
        }
        .order {
            margin-top: 15px;
            background-color: #fff;
            padding: 15px;
            .title {
                margin-bottom: 20px;
                color: #000;
                font-size: 16px;
            }
            .tips {
                text-align: center;
                margin-top: 15px;
                color: #d7d7d7;
                font-size: 14px;
            }
        }
        .budilingInfo{
            margin-top: 15px;
            background-color: #fff;
            padding: 20px;
            box-sizing: border-box;
            .budiling_title{
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
                .budiling_tit{
                    color: #000;
                    font-size: 18px;
                    margin-left: 10px;
                }
                .budiling_tit::before{
                    content:'';
                    position: absolute;
                    height:26px;
                    width:3px;
                    top: 36px;
                    left: 28px;
                    background: #17a1e6;
                }
                .budiling_more{
                    color: #17a1e6;
                    cursor: pointer;
                }
            }
            .budilingContent{
                display: flex;
                justify-content: space-between;
                .text{
                    .text_item{
                        color: #b2b2b2;
                        font-size: 12px;
                        margin-bottom: 15px;
                        span{
                            margin-left: 25px;
                        }
                    }
                }
                .budilingImg{
                    width: 200px;
                    height: 125px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>