<template>
  <div class="box">
      <div class="category">
          <div class="item">
              <div class="label">位置</div>
              <div class="content">
                  <div class="top">
                      <div  v-for="(item, index) in areaTitleList" :class="item.isChecked ? ' title checked' : 'title'" :key="index" @click="checkAreaTitle(item, index)">{{item.name}}</div>
                  </div>
                  <div class="line">
                      <div class="areaArrow" v-if="showArea"></div>
                      <div class="moterArrow" v-if="!showArea"></div>
                  </div>
                  <div class="bottom">
                       <div class="bottomItem" v-if="showArea">
                        <div v-for="(item, index) in areaList" :class="item.isChecked ? ' title checked' : 'title'" :key="index" @click="checkArea(item, index)">{{item.name}}</div>
                       </div>
                       <div class="hasSub" v-if="subAreaList.length > 0"></div>
                       <div class="bottomItem" v-if="showArea && subAreaList.length > 0">
                            <div v-for="(item, index) in subAreaList" :class="item.isChecked ? ' title checked' : 'title'" :key="index" @click="checkSubArea(item, index)">{{item.name}}</div>
                       </div>
                        <div class="bottomItem" v-if="!showArea">
                            <div v-for="(item, index) in metorList" :class="item.isChecked ? ' title checked' : 'title'" :key="index" @click="checkMetor(item, index)">{{item.name}}</div>
                       </div>
                  </div>
              </div>
          </div>
          <div class="item">
              <div class="label">人数</div>
              <div class="content">
                  <div class="one">
                    <div v-for="(item, index) in personList" :class="item.isChecked ? ' title checked' : 'title'" :key="index" @click="checkPerson(item, index)">{{item.name}}</div>
                  </div>
              </div>
          </div>
          <div class="item">
              <div class="label">总价</div>
              <div class="content">
                  <div class="one">
                   <div v-for="(item, index) in priceList" :class="item.isChecked ? ' title checked' : 'title'" :key="index" @click="checkPrice(item, index)">{{item.name}}</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { getArea } from '../api/party'
export default {
    data() {
        return {
            areaTitleList: [
                { id: 1, name: '区域', isChecked: true },
                { id: 2, name: '地铁线', isChecked: false },
            ],
            squareTitleList: [
                { id: 1, name: '空间', isChecked: true },
                { id: 2, name: '人数', isChecked: false },
            ],
            areaList: [],
            subAreaList: [],
            metorList: [
                { id: '', name: '地铁沿线', isChecked: true },
                { id: 1, name: '1号线', isChecked: false },
                { id: 2, name: '2号线', isChecked: false },
                { id: 3, name: '3号线', isChecked: false },
                { id: 4, name: '4号线', isChecked: false },
                { id: 5, name: '5号线', isChecked: false },
                { id: 6, name: '6号线', isChecked: false },
                { id: 7, name: '16号线', isChecked: false },
            ],
            personList: [
                { id: '', name: '人数不限', isChecked: true },
                { id: 1, name: '1人', isChecked: false },
                { id: 2, name: '2-3人', isChecked: false },
                { id: 3, name: '4-6人', isChecked: false },
                { id: 4, name: '7-10人', isChecked: false },
                { id: 5, name: '11-15人', isChecked: false },
                { id: 6, name: '16人以上', isChecked: false },
            ],
            priceList: [
                { id: '', name: '总价不限', isChecked: true },
                { id: 1, name: '0.5万以下', isChecked: false },
                { id: 2, name: '0.5万-1.5万', isChecked: false },
                { id: 3, name: '1.5万-3万', isChecked: false },
                { id: 4, name: '3万-5万', isChecked: false },
                { id: 5, name: '5万-10万', isChecked: false },
                { id: 6, name: '10万以上', isChecked: false },
            ],
            showArea: true,
            areaId: null,
            areaConf: {
                countryId: null,
                districtId: null,
                minArea: '',
                maxArea: '',
                maxPosition: '',
                minPosition: '',
                minPrice:'',
                maxPrice:'',
                fitments:''
            }
        }
    },
    created(){
        this.getAreaList()
    },
    methods: {
        checkAreaTitle(item, index) {
            this.areaTitleList.map(item => item.isChecked = false)
            this.areaTitleList[index].isChecked = true
            this.showArea = index === 0 ? true : false
            this.areaList.map(item => item.isChecked = false)
            this.metorList.map(item => item.isChecked = false)
            this.areaList[0].isChecked = true
            this.metorList[0].isChecked = true
            this.subAreaList = []
            this.areaConf.countryId = null
            this.areaConf.districtId = null
            this.$emit('refreshList', this.areaConf)
        },
         checkArea(item, index) {
            this.areaList.map(item => item.isChecked = false)
            this.areaList[index].isChecked = true
            this.areaId = item.id
            this.areaConf.countryId = item.id
            this.$emit('refreshList', this.areaConf)
            if(item.id) {
                this.getSubAreaList()
            }else {
                this.subAreaList = []
            }
        },
        checkMetor(item, index) {
            this.metorList.map(item => item.isChecked = false)
            this.metorList[index].isChecked = true
        },
        checkPerson(item, index) {
            this.personList.map(item => item.isChecked = false)
            this.personList[index].isChecked = true
            if(!item.id) {
                this.areaConf.minPosition = ''
                this.areaConf.maxPosition = ''
            }
            if(item.id === 1){
              this.areaConf.maxPosition = 1
              this.areaConf.minPosition = ''
            }else if(item.id === 2){
                this.areaConf.maxPosition = 3
                this.areaConf.minPosition = 2
            }else if(item.id === 3){
                this.areaConf.maxPosition = 6
               this.areaConf.minPosition = 4
            }else if(item.id === 4){
                this.areaConf.maxPosition = 10
               this.areaConf.minPosition = 7
            }else if(item.id === 5){
                this.areaConf.maxPosition = 15
               this.areaConf.minPosition = 11
            }else if(item.id === 6){
                this.areaConf.minPosition = 16
                this.areaConf.maxPosition = ''
            }
            this.$emit('refreshList', this.areaConf)
        },
        checkPrice(item, index) {
            this.priceList.map(item => item.isChecked = false)
            this.priceList[index].isChecked = true 
            // if(item.id=== 1 ){
            //     this.areaConf.minPrice = ''
            //     this.areaConf.maxPrice = 3
            // }else if(item.id === 2){
            //     this.areaConf.minPrice = 3
            //     this.areaConf.maxPrice = 4
            // }else if(item.id === 3){
            //     this.areaConf.minPrice = 3
            //     this.areaConf.maxPrice = 4
            // }else if(item.id === 4){
            //     this.areaConf.minPrice = 5
            //     this.areaConf.maxPrice = 7
            // }else if(item.id === 5){
            //     this.areaConf.minPrice = 7
            //     this.areaConf.maxPrice = 9
            // }else if(item.id === 6){
            //     this.areaConf.minPrice = 9
            //     this.areaConf.maxPrice = 12
            // }else{
            //     this.areaConf.minPrice = 12
            //     this.areaConf.maxPrice = ''
            // }
            // this.$emit('refreshList', this.areaConf)
        },
       //获取区域的下级区域列表
           async getAreaList(){
            let rsp = await getArea({areaId: this.areaId})
            if(rsp && rsp.code === '0'){
               this.areaList = rsp.datas
               let areaArr = []
               this.areaList.forEach(item => {
                   areaArr.push({   
                       id: item.id,
                       name: item.name,
                       isChecked: false
                   })
              })
               this.areaList = areaArr
               this.areaList.unshift({id: '', name: '全市区域', isChecked: true})
            }
        },
        async getSubAreaList() {
            let rsp = await getArea({areaId: this.areaId})
            if(rsp && rsp.code === '0') {
                this.subAreaList = rsp.datas
                let areaArr = []
                this.subAreaList.forEach(item => {
                   areaArr.push({   
                       id: item.id,
                       name: item.name,
                       isChecked: false
                   })
              })
               this.subAreaList = areaArr
              } 
            }
    }
}
</script>

<style lang='less' scoped>
.box {
    width: 100%;
    background-color: #fff;
    .category {
        margin: 0 auto;
        width: 1200px;
        padding: 25px 0 15px 0;
        .item {
            display: flex;
            .label {
                font-size: 16px;
                color: #000;
                padding-right: 20px;
                margin-left: 30px;
            }
            .content {
               padding:0 0 20px 20px;
               border-left: 2px solid #f2f2f2;
               width: 1080px;
               .one {
                width: 100%;
                   display: flex;
                   align-items: center;
                   padding-bottom: 10px;
                   .title {
                      font-size: 16px;
                      margin-right: 50px;
                      color: #8e8e8e; 
                      cursor: pointer;
                      &:hover {
                          color: #169bd5;
                      }
                   }
                   .checked {
                       color: #169bd5;
                   }
               }
               .top {
                   width: 100%;
                   display: flex;
                   align-items: center;
                   .title {
                      font-size: 16px;
                      margin-right: 80px;
                      color: #8e8e8e; 
                      cursor: pointer;
                      &:hover {
                          color: #169bd5;
                      }
                   }
                   .checked {
                       color: #169bd5;
                   }
               }
               .line {
                    width: 100%;
                    border-bottom: 1px solid #e9e7e7;
                    padding-bottom: 10px;
                    position: relative;
                    .areaArrow {
                        position: absolute;
                        left: 10px;
                        top: 0;
                        width: 0;
                        height: 0;
                        border: 5px solid;
                        border-color: transparent transparent #dddddd;  
                    }
                    .moterArrow {
                        position: absolute;
                        left: 130px;
                        top: 0;
                        width: 0;
                        height: 0;
                        border: 5px solid;
                        border-color: transparent transparent #dddddd;  
                    }
                    .personArrow {
                        position: absolute;
                        left: 125px;
                        top: 0;
                        width: 0;
                        height: 0;
                        border: 5px solid;
                        border-color: transparent transparent #dddddd;  
                    }
               }
               .bottom {
                   .bottomItem {
                   display: flex;
                   align-items: center;
                   padding-top: 10px;
                   flex-wrap: wrap;
                    .title {
                      font-size: 16px;
                      margin-right: 50px;
                      color: #8e8e8e; 
                      margin-bottom: 5px;
                      cursor: pointer;
                      &:hover {
                          color: #169bd5;
                      }
                   }
                   .checked {
                       color: #169bd5;
                   }
               }
                 .hasSub {
                    border-bottom: 1px solid #e5e5e5;
                    margin: 10px 0;
                }
               }
            }
        }
    }
}
</style>