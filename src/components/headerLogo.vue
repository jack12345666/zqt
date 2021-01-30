<template>
  <div class="myHeader">
      <img src="../img/logo.png" alt="">
      <div class="citys">杭州
          <a-icon type="caret-down" />
      </div>
      <div class="myTabs">
           <ul>
            <li :class="item.id === checkId ? 'checked' : ''" v-for="item in navList" :key="item.id" @click="toRoute(item)">
                {{item.name}}
            </li>
        </ul>
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
    data() {
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
    display: flex;
    height: 80px;
    padding: 0 13%;
    background: #202020;
    img{
        width: 130px;
        height: 68px;
        margin-top: 6px;
    }
    .citys{
        width:100px;
        font-size: 16px;
        color: #fff;
        margin-left: 20px;
        display: flex;
        align-items: center;
    }
    .myTabs{
        width: 100%;
        .checked {
            color: #17a1e6;  
        }
        ul{
            width: 100%;
            display: flex;
            list-style: none;
            height: 80px;
            align-items: center;
            li {
                width: 100px;
                text-align: center;
                color: #fff;
                font-size: 18px;
            }
            li:hover,li:active{
                color: #17a1e6;
                cursor: pointer;
            }
        }
    }
}
</style>>

