<template>
  <div class="box">
      <div class="content">
          <img src="../img/logo.png" @click="toIndex"/>
          <div class="address">杭州 <a-icon type="caret-down" /></div>
          <div class="navList">
              <div :class="item.id === checkId ? 'navItem checked' : 'navItem'" v-for="(item, index) in VenueCategory" :key="item.id" @click="checkNav(item, index)">{{item.name}}</div>
          </div>
          <div class="search">
               <a-input-search placeholder="输入大厦/园区/区域位置" style="width: 400px;" @search="onSearch" />
          </div>
      </div>
  </div>
</template>

<script>
import { getCategory } from '../api/party'
export default {
    props: {
        checkId: {
            type: String,
            default: '0701'
        }
    },
    data() {
        return {
            VenueCategory:[],
        }
    },
    created(){
        this.getCategoryByCodes()
    },
    methods: {
        toIndex() {
            this.$router.push('/')
        },
        checkNav(item) {
            this.$router.push({path: '/redirect/office', query: {category: item.id}})
        },
        onSearch(value) {
            console.log(value)
        },
         //获取通用分类
        async getCategoryByCodes(){
            let data={
                category:'VenueCategory'
            }
            let rsp = await getCategory(data)
            if(rsp.code==='0'){
                this.VenueCategory=rsp.datas
                let arr = []
                this.VenueCategory.forEach(item => {
                    arr.push({
                        id: item.id,
                        name: item.name,
                        category: item.category,
                        isChecked: false
                    })
                })
                this.VenueCategory = arr
            }
        }
    }
}
</script>
<style lang='less'>
.ant-input {
    height: 45px;
}
</style>
<style lang='less' scoped>
.box {
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #e9e7e7;
    padding: 10px 0;
    .content {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 130px;
            height: 65px;
            &:hover {
                cursor: pointer;
            }
        }
        .address {
            color: #666;
            font-size: 15px;
            margin: 0 20px;
            &:hover {
                cursor: pointer;
            }
        }
        .navList {
            display: flex;
            align-items: center;
            margin: 0 20px;
            .navItem {
                margin-right: 30px;
                color: #666;
                font-size: 18px;
                &:hover {
                    cursor: pointer;
                }
            }
            .checked {
                color: #169bd5 !important;
            }
        }
        .search {
            margin-left: 45px;
        }
    }
}
</style>