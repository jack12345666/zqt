<template>
  <div class="box">
      <div class="content">
          <div class="houseItem" v-for="item in venusList" :key="item.id" @click="toHouseDetail(item)">
              <div class="img">
                  <img :src="item.coverPicPath | imgFormat" alt="image"/>
              </div>
              <div class="info">
                  <div class="title">{{item.name}}</div>
                  <div class="moreInfo">
                      <div class="address">
                          <div class="addr">{{item.address}} </div>
                          <div class="floorHeight">{{item.otherFloorsInfo}}</div>
                      </div>
                      <!-- <div class="squareInfo">
                          <div class="square">1000㎡</div>
                          <div class="lable">建筑面积</div>
                      </div> -->
                      <div class="price">
                          <div class="dayPrice">{{item.propertyFeeInfo}}</div>
                          <div class="monthPrice">月租金{{item.minPrice}}万/月</div>
                      </div>
                  </div>
              </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        venusList: {
            type: Array,
            default: function() {
                return []
            }
        },
    },
    created(){},
    methods: {
        toHouseDetail(item) {
            this.$router.push('/spaceDetail/'+item.id) 
        }
    }
}
</script>

<style lang='less' scoped>
.box {
    width: 100%;
    .content {
        width: 1200px;
        margin: 0 auto;
        .houseItem {
            width: 100%;
            display: flex;
            padding: 20px 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #e5e5e5;
            &:hover {
                background-color: #fff;
                cursor: pointer;
                box-shadow: 0 10px 20px 0 #e5e5e5;
            }
            .img {
                img {
                   width: 300px;
                   height: 170px; 
                   border-radius: 5px;
                }
            }
            .info {
                flex: 1;
                margin-left: 15px;
                .title {
                  font-size: 18px;
                  font-weight: 700;  
                  margin-bottom: 20px;
                  color: #000;
                }
                .moreInfo {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: nowrap;
                    .address {
                        width: 360px;
                        overflow: hidden;
                        color: #666;
                        font-size: 16px;
                        .addr {
                             overflow: hidden;
                             white-space: nowrap;
                             text-overflow: ellipsis;
                             margin-bottom: 15px;
                        }
                    }
                    // .squareInfo {
                    //    flex: 1;
                    //    color: #666;
                    //    font-size: 16px;
                    //    margin-left: 50px;
                    //    .square {
                    //         font-weight: 700;
                    //         margin-bottom: 15px;
                    //     }
                    // }
                    .price {
                        width:360px;
                        font-size: 16px;
                        margin-right: 20px;
                        .dayPrice {
                          color: #fe8e75;
                          margin-bottom: 15px;
                        }
                        .monthPrice {
                            color: #666;
                        }
                    }
                }
            }
        }
    }
}
</style>