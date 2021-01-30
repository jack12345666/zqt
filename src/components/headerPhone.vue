<template>
  <div class="myHeader">
     <div class="header_container">
            <div class="myTabs">
               <div class="ul">
                    <div :class="item.id === checkId ? 'li checked' : 'li' " v-for="item in navList" :key="item.id" @click="toRoute(item)">
                        {{item.name}}
                    </div>
                </div>
            </div>
            <div class="phoneNumber">
                <a-icon type="phone"  class="icon_phone"/>
                <span>188-8888-8888</span>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        checkId: {
            type: Number,
            default: null
        }
    },
 data(){
        return {
            navList: [
                { id: 1, name: '首页', route: '/'},
                // { id: 2, name: '区域经济', route: '/'},
                { id: 3, name: '委托选址', route: '/setSelect'},
                { id: 4, name: '委托招商', route: '/attractInvestment'},
                { id: 5, name: '商机大厅', route: '/bussinessHall'},
                { id: 6, name: '个人中心', route: '/personal'},
            ]
        }
    },
    methods: {
          toRoute(item) {
            this.$router.push(`${item.route}`)
        }
    }
}
</script>

<style lang="less" scoped>
.myHeader{
    height: 40px;
    width: 100%;
    background: #202020;
    .header_container{
        width: 1250px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
            .myTabs{
               flex: 1;
                .ul{
                    display: flex;
                    height: 40px;
                    line-height: 40px;
                    .checked {
                        color: #17a1e6 !important;
                    }
                    .li{
                        width: 80px;
                        text-align: center;
                        color: #fff;
                        font-size: 14px;
                    }
                    .li:hover,.li:active{
                        color: #17a1e6;
                        transition: all ease 1s;
                        cursor: pointer;
                    }
                }
            }
            .phoneNumber{
                font-size: 16px;
                color: #FFF;
                display: flex;
                width: 180px;
                height: 40px;
                line-height: 40px;
                .icon_phone{
                    margin: 12px 10px 0 0;
                }
            }
   }
}
</style>>

