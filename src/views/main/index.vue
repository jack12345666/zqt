<template>
  <common-layout>
      <div slot="content">
          <div class="main_container" id="main_container">
              <div class="header">
                 <header-index :style=" scroll > 650 ? fixedNav : '' "/>
                 <div class="top_container">
              </div>
              
              </div>
              <div class="bottom_container">
                  <!-- 导航栏区域 -->
                 <div class="menu_box">
                      <ul>
                          <li v-for="item in navList" :key="item.id" @click="toRoute(item)">
                              <!-- <i :class="item.icon"><span>{{item.name}}</span></i> -->
                             <img :src="item.icon" width="28px" height="28px"/> 
                             <span>{{item.name}}</span>
                          </li>
                         
                      </ul>
                  </div>
                  <!-- 筛选平方 -->
                  <div class="chooseSquare">
                      <ul>
                          <li v-for="(item, index) in areaRange" :key="item.id" :class="item.isChecked ? 'checked' : ''" @click="checkRange(item, index)"></li>
                      </ul>
                      <div class="square">
                          <ul>
                              <li>100m²</li>
                              <li>200m²</li>
                              <li>300m²</li>
                              <li>500m²</li>
                              <li>1000m²</li>
                              <li>+∞</li>
                          </ul>
                      </div>
                  </div>
                  <!-- 搜索框区域 -->
                <a-row class="search_row">
                    <a-col :span="18" class="search_col">
                        <a-form :form="form">
                            <a-form-item>
                                <a-input placeholder="输入大厦/园区/区域位置"/>
                            </a-form-item>
                        </a-form>   
                    </a-col>
                    <a-col :span="6" class="search_col">
                         <a-button type="primary" class="search_btn" style="height: 45px;margin-top: -1px;">搜索</a-button>
                    </a-col>              
                </a-row>
                <!-- 热门商圈 -->
                <div class="hotTradingArea">
                    <div class="tradingTitle">热门商圈<span class="more" @click="moreTrading">更多></span></div>
                    <div class="tradingArea_box">
                        <a-carousel>
                            <div>
                                <div class="imgs">
                                <a-row :gutter="20">
                                        <a-col :span="6" v-for="item in businessImgList.slice(0, 4)" :key="item.id" @click="toBussiness(item.id)">
                                            <div class="imgBox">
                                                <img :src="item.coverPicPath | imgFormat" alt="" style="width: 100%; height: 230px;"> 
                                            <div class="desc">
                                                {{item.name}}
                                            </div>
                                            </div>
                                        </a-col>
                                    </a-row>
                                </div>
                            </div>
                            <div>
                                <div class="imgs">
                                <a-row :gutter="20">
                                        <a-col :span="6" v-for="item in businessImgList.slice(4,8)" :key="item.id">
                                            <div class="imgBox">
                                                <img :src="item.coverPicPath | imgFormat" alt="" style="width: 100%; height: 230px;"> 
                                            <div class="desc"> {{item.name}}</div>
                                            </div>
                                        </a-col>
                                    </a-row>
                                </div>
                            </div>
                          
                        </a-carousel>
                    </div>
                </div>
                
                <a-button type="primary" class="chooseAddress_btn" @click="toSetSelect">免费委托选址</a-button>
              </div>
          </div>
      </div>
  </common-layout>
</template>

<script>
import { getCategory , searchVenues } from '../../api/party'
import { mapState } from 'vuex'
export default {
    data() {
        return {
            scroll:'',
            fixedNav:{
                position:'fixed',
                top:'0',
                background:'#fff',
                color:'#555555',
                zIndex:1
            },
            form:'',
            navList: [],
            areaRange: [
                { id: 1, isChecked: false },
                { id: 2, isChecked: false },
                { id: 3, isChecked: false },
                { id: 4, isChecked: false },
                { id: 5, isChecked: false },
                { id: 6, isChecked: false },
            ],
            businessImgList: []
        }
    },
    created() {
      this.getCategoryByCodes()
      this.getSearchVenues()
       
    },
    computed:{
        ...mapState(['party'])
    },
    mounted(){
       document.getElementById('main_container').parentElement.parentElement.addEventListener("scroll", this.getScroll);
    }, 
    methods: {
        getScroll(){
            this.scroll=document.getElementById('main_container').parentElement.parentElement.scrollTop 
        },
       toRoute(item) {
          this.$router.push(`${item.route}`) 
       },
       checkRange(item, index) {
           this.areaRange.map(item => item.isChecked = false)
           this.areaRange[index].isChecked = true
       },
       moreTrading(){
           this.$router.push('/office')
       },
       toBussiness(id){
           this.$router.push('/spaceDetail/'+id)
       },
       toSetSelect(){
           this.$router.push('/setSelect')
       },
        //获取通用分类
        async getCategoryByCodes(){
            let data={
                category:'VenueCategory'
            }
            let rsp = await getCategory(data)
            if(rsp.code==='0'){
                this.navList=rsp.datas
                let arr = []
                this.navList.forEach((item, index) => {
                    arr.push({
                        id: item.id,
                        name: item.name,
                        route: `/office?category=${item.id}`,
                        icon: require(`../../img/category/category${index+1}.png`)
                    })
                })
                this.navList = arr
            }
        },
    //获取大楼、厂房等列表
    async getSearchVenues(){
        let data = {
            pageIndex:1,
            pageSize:8,
            categoryId:'0701'
        }
        let rsp = await searchVenues(data)
        console.log(rsp)
        if(rsp && rsp.code === '0'){
            this.businessImgList = rsp.datas
        }
    }
    }
}
</script>

<style lang="less" scope>
.main_container{
    width: 100%;
    .header{
        background: url('../../img/indexBg.png') no-repeat center center;
        .top_container{
            width: 100%;
            height: 580px;        
    }
    }
    .bottom_container{
        width: 1200px;
        margin: -30px auto 30px;
        padding-bottom: 30px;
        border-radius: 10px;
        background: #fff;
        .menu_box{
            width:1100px;
            height: 100px;
            margin: 0 auto;
            padding-top:30px;
            ul{
                list-style: none;
                display: flex;
               margin: 0;
               padding: 0;
                li{
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    span {
                        padding-left: 10px;
                        font-size: 16px;
                    }
                     span:hover{
                        color: #17a1e6;
                        transition: all ease 1s;
                        cursor: pointer;
                    }
                }
            }
        }
        .chooseSquare{
            ul{
                padding: 0 4%;
                display: flex;
                list-style:none;
                width: 100%;
                height: 20px;
                .checked {
                    background-color: #17a1e6;
                }
                li{
                    flex: 1;
                    margin-right:20px;
                    height: 20px;
                    background: #eee;
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
            .square{
                ul{
                    li{
                        background: #fff;
                        margin-left: 132px;
                    }
                }
            }
        }
        .search_row{
            padding: 0 4%;
           .ant-input:placeholder-shown{ text-align: center }
           .search_btn{
               margin-top: 4px;
               margin-left: 10px;
               width: 160px;
           }
        }
        .hotTradingArea{
            position:relative;
            margin-bottom: 70px;
            .tradingTitle{
                margin-left: 20px;
                font-size: 24px;
                font-weight: 700;
                user-select: none;
                span{
                   right: 15px;
                   top:5px;
                   font-size: 14px;
                   font-weight: normal;
                   position: absolute;
                   cursor: pointer;
                }
            }
            .tradingArea_box{
                .slick-dots-bottom{
                    bottom: -20px;
                    li{
                        button{
                            background: #aaaaaa;
                        }
                    }
                }
                .imgs{
                    margin-top: 10px;
                    width: 100%;
                    display: flex;
                    box-sizing: border-box;
                    flex-wrap: nowrap;
                    padding: 0 10px;
                    cursor: pointer;
                    .imgBox{
                        width: 280px;
                        &:hover{
                           
                            .desc{
                                display: block;
                                color: #fff;
                                font-size: 18px;
                                padding: 5px;
                                
                            }
                        }
                        .desc{
                        width: 280px;
                        min-height: 60px;
                        background: rgba(168, 168, 168, 0.5);
                        position: absolute;
                        bottom:0;
                        display: none;
                    }
                    }
                    
                }
            }
        }
        .chooseAddress_btn{
            width: 445px;
            height: 50px;
            font-size: 20px;
            margin-left: 377px;
        }
    }
}
</style> 