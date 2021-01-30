<template>
  <common-layout>
      <div slot="header">
          <header-phone />
          <search-item :checkId="venusConf.categoryId"/>
      </div>
      <div slot="content">
        <category-space v-if="venusConf.categoryId === '0702'" @refreshList="fetchVenusList(arguments)"/>
        <Category v-else @refreshList="fetchVenusList(arguments)"/>
        <Sort :total="total" v-if="venusList.length>0"/>
        <house-item :venusList="venusList"/>
        <div class="pagination" v-if="venusList.length>0">
         <a-pagination v-model="current" :total="total" show-less-items  @change="pageChange"/>
        </div>
        <div v-if="venusList.length === 0" :style="{ minHeight: box_height }" class="emptyBox">
            <a-empty description="暂无数据" class="emptyItem"/>
        </div>
     </div>
  </common-layout>
</template>

<script>
import { searchVenues } from '@/api/party'
export default {
    data() {
        return {
            box_height:null,
             current: 1,
             venusConf: {
                 pageIndex: 1,
                 pageSize: 10,
                 categoryId: '0701',
             },
             total: 0,
             venusList: []
        }
    },
    created() {
        this.getHeight()
        this.venusConf.categoryId = this.$route.query.category
        this.getVenusList()
    },
    methods: {
        //获取内容区域高度
        getHeight(){
            this.box_height=(window.innerHeight-550)+'px'
        },
        //获取大楼、厂房等列表
        async getVenusList() {
            let rsp = await searchVenues(this.venusConf)
            this.total = rsp.count
            this.venusList = rsp.datas
        },
        fetchVenusList(item) {
            this.venusConf.countryId = item[0].countryId
            this.venusConf.districtId = item[0].districtId
            this.venusConf.maxArea = item[0].maxArea
            this.venusConf.minArea = item[0].minArea
            this.venusConf.minPosition = item[0].minPosition
            this.venusConf.maxPosition = item[0].maxPosition
            this.venusConf.minPrice = item[0].minPrice
            this.venusConf.maxPrice = item[0].maxPrice
            this.venusConf.fitments = item[0].fitments
            this.venusConf.pageIndex = 1
            this.getVenusList()
        },
        pageChange(page){
            this.venusConf.pageIndex = page
            this.getVenusList()

        }
    }
}
</script>

<style lang='less' scoped>
.pagination {
    text-align: center;
    margin: 20px;
}
.emptyBox{
    display: flex;
    justify-content: center;
    align-items: center;
    .emptyItem{
        
    }
}
</style>