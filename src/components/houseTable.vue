<template>
  <div>
      <!-- <div class="tabsList">
          <div :class="item.isChecked ? 'tabItem checked' : 'tabItem'" v-for="(item, index) in tabsList" :key="item.id" @click="checkTabs(item, index)">
              <div class="name">{{item.name}}</div>
              <div class="num">{{item.huoseNum}}套</div>
          </div>
      </div> -->
      <div class="emptyBox"></div>
      <div class="tableHeader">
          <div class="headerItem" v-for="item in tableHeader" :key="item.name">{{item.name}}</div>
      </div>
      <div class="tableList">
          <div class="tableItem" v-for="item in houseList" :key="item.id" @click="toHouseDetail(item)">
              <div class="img">
                  <img :src="item.coverPicPath | imgFormat" style="width: 96px;height: 60px;border-radius: 5px;" :onerror="defaultImg"/>
              </div>
              <div class="square"><span>{{item.buildingArea}}</span>&nbsp;㎡</div>
              <div class="person">{{item.workingPositionLow}}-{{item.workingPositionHigh}}人</div>
              <div class="allPrice"><span>{{item.monthRent}}</span>&nbsp;元/月</div>
              <div class="update">{{item.updateTime.time | timeFormat}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
       houseList: {
           type: Array,
           default: function() {
               return []
           }
       } 
    },
    data() {
        return {
            defaultImg:'this.src="'+require('../img/img_preparing.jpg')+'"',
            tabsList: [
                { id: '', name: '全部户型', huoseNum: 7, isChecked: true },
                { id: 1, name: '单人卡位', huoseNum: 2, isChecked: false },
                { id: 2, name: '2-3人', huoseNum: 2, isChecked: false },
                { id: 3, name: '4-6人', huoseNum: 1, isChecked: false },
                { id: 4, name: '7-10人', huoseNum: 2, isChecked: false },
            ],
            tableHeader: [
                { name: '照片'},
                { name: '面积'},
                { name: '人数'},
                { name: '总价'},
                { name: '更新'},
            ],
        }
    },
    methods: {
        checkTabs(item, index) {
            this.tabsList.map(item => item.isChecked = false)
            this.tabsList[index].isChecked = true
            if(item.id === 1) {
                this.tableList = this.houseList.slice(0, 2)
            }else if(item.id === 2){
               this.tableList = this.houseList.slice(2,4)  
            }else if(item.id === 3) {
                this.tableList = this.houseList.slice(4,5)
            }else if(item.id === 4) {
                this.tableList = this.houseList.slice(5,7)
            }else {
                this.tableList = this.houseList
            }
        },
        toHouseDetail(item) {
            this.$router.push(`/houseDetail/${item.id}`)
        }
    }
}
</script>

<style lang='less' scoped>
.tabsList {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #17a1e6;
    .tabItem {
        width: 100px;
        padding: 15px 0;
        margin: 0;
        border-right: 1px solid #f5f5f5;
        text-align: center;
        &:hover {
            cursor: pointer;
        }
        &:last-child {
            border: none;
        }
        .name {
            margin-bottom: 10px;
            color: #000;
            font-size: 16px;
        }
        .num {
            color: #999;
            font-size: 14px;
        }
    }
    .checked {
        background-color: #17a1e6;
        color: #fff;
        .name {
            color: #fff;
        }
        .num {
            color: #fff;
        }
    }
}
.emptyBox{
    height: 20px;
}
.tableHeader {
    display: flex;
    align-items: center;
    margin: 20px 0;
    text-align: center;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    .headerItem {
        flex: 1;
        padding: 10px 0;
        color: #000;
        font-weight: 700;
    }
}
.tableList {
    margin: 10px;
    .tableItem {
        display: flex;
        align-items: center;
        text-align: center;
        padding: 10px 0;
        &:hover {
            cursor: pointer;
            background-color: #fffdfd;
        }
        .img {
            flex: 1;
        }
        .square {
            flex: 1;
            span {
                font-size: 20px;
                color: #000;
            }
        }
        .person {
            flex: 1;
            font-size: 17px;
        }
        .allPrice {
            flex: 1;
            color: #d03939;
            span {
                font-size: 20px;
            }
        }
        .update {
            flex: 1;
            color: #999;
        }
    }
}
</style>