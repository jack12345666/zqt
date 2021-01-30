<template>
  <div>
      <div class="title">
          <span class="label">服务顾问带看</span>
          <span class="data">近30天带看1次，总带看58次</span>
      </div>
      <div class="lookList">
          <div class="lookItem" v-for="item in lookList" :key="item.id">
              <div class="img">
                  <img :src="item.avatar" style="width: 48px;height: 48px;border-radius: 24px;"/>
              </div>
              <div class="info">
                  <div class="name">{{item.type}} · {{item.name}}</div>
                  <div class="achievement">
                      <a-rate :default-value="item.rate" disabled style="font-size: 14px;"/>
                      <div>{{item.info}}</div>
                  </div>
                  <div class="lookNum">
                    <a-icon type="environment" />
                    <span>带看过该大厦{{item.lookNum}}次</span> 
                  </div>   
              </div>
              <div class="btn">
                  <a-button type="primary">预约咨询</a-button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            lookList: [
                { id: 1, avatar: 'https://images.diandianzu.com/Uploads/Avatar/s_cb_5c52adaa32bdf.jpg', name: '王爽', rate: 5, info: '成交76单，带看515次，维护着29套房源', lookNum: 5, type: '高级服务顾问'},
                { id: 2, avatar: 'https://images.diandianzu.com/Uploads/Avatar/s_cb_5c52acab26749.jpg', name: '童榜羽', rate: 5, info: '成交78单，带看661次，维护着79套房源', lookNum: 5, type: '高级服务顾问'},
                { id: 3, avatar: 'https://images.diandianzu.com/Uploads/Avatar/s_cb_5c52a4f36cb94.jpg', name: '陈柳柳', rate: 5, info: '成交60单，带看392次，维护着96套房源', lookNum: 5, type: '高级服务顾问'},
            ]
        }
    }
}
</script>
<style>
.ant-btn-primary {
    background-color: #17a1e6;
    border: none;
}
.ant-btn-primary:hover, .ant-btn-primary:active {
      background-color: #3c9dce;
      border: none;
}
</style>
<style lang='less' scoped>
.title {
  padding: 15px 0;
  border-bottom: 1px solid #e5e5e5;
  .label {
      color: #000;
      font-size: 16px;
  }
  .data {
      color: #666;
      font-size: 14px;
      margin-left: 10px;
  }
}
.lookList {
    margin: 20px 10px;
    .lookItem {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: 1px solid #e5e5e5;
        &:last-child {
            border: none;
        }
        .img {
            margin-right: 15px;
        }
        .info {
            flex: 1;
            .name {
                color: #000;
                font-size: 16px;
            }
            .achievement {
                display: flex;
                align-items: center;
               div {
                   margin: 4px 0 0 15px;
                   color: #999;
               }
            }
            .lookNum {
                margin-top: 5px;
                span {
                   color: #666;
                   font-size: 15px; 
                   margin-left: 5px;
                }
            }
        }
        .btn {
            margin-right: 20px;
        }
    }
}
</style>