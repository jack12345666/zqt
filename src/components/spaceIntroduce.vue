<template>
  <div class="container">
    <div class="title">大厦简介</div>
    <div class="content">
      <div class="imgBox">
        <img :src="spaceDetail.coverPicPath | imgFormat" alt="" />
        <div class="finished">
          <div class="time">
            竣工时间
            <p>{{spaceDetail.completionDate}}</p>
          </div>
          <div class="local">
            地理位置
            <p>{{spaceDetail.address}}</p>
          </div>
        </div>
      </div>
      <div class="moreInfo">
        <div class="infoItem">
          层高
          <p>{{spaceDetail.floorHeightInfo}}m</p>
        </div>
        <div class="infoItem">
          层数
          <p>{{spaceDetail.otherFloorsInfo}}</p>
        </div>
        <div class="infoItem">
          物业
          <p>{{spaceDetail.propertyManagementCompany}}</p>
        </div>
        <div class="infoItem">
          物业费
          <p>{{spaceDetail.propertyFeeInfo}}</p>
        </div>
        <div class="infoItem">
          车位
          <p>{{spaceDetail.parkingSpace}}</p>
        </div>
        <div class="infoItem">
          车位月租金
          <p>{{spaceDetail.parkingFee}}</p>
        </div>
        <div class="infoItem">
          空调
          <p>{{spaceDetail.airConditioner}}</p>
        </div>
        <div class="infoItem">
          空调费
          <p>{{spaceDetail.airConditioningCost}}</p>
        </div>
        <div class="infoItem">
          空调开放时长
          <p>{{spaceDetail.airConditionedTime}}</p>
        </div>
        <div class="infoItem">
          电梯
          <p>{{spaceDetail.elevator}}</p>
        </div>
        <div class="infoItem">
          网络
          <p>{{spaceDetail.networks}}</p>
        </div>
        <div class="infoItem">
          入驻企业
          <p>{{spaceDetail.settledOrganization}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      spaceDetail:{
          type:Object,
          default:function(){
              return {}
          }
      }
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  padding: 15px 0;
  .title {
    height: 50px;
    color: #000000;
    font-size: 16px;
    border-bottom: 1px solid #e5e5e5;
  }
  .content {
    .imgBox {
      display: flex;
      img {
        width: 200px;
        height: 125px;
      }
      .finished {
        margin-left: 30px;
        color: #b2b2b9;
        .time {
          margin-top: 5px;
          p {
            color: #000000;
          }
        }
        .local {
          margin-top: 5px;
          p {
            color: #000000;
          }
        }
      }
    }
    .moreInfo {
      width: 80%;
      display: flex;
      flex-flow: wrap;
      .infoItem {
        width: 33.3%;
        color: #b2b2b2;
        p {
          margin-top: 5px;
          color: #000000;
        }
      }
    }
  }
}
</style>
