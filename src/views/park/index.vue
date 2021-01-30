<template>
  <common-layout>
      <div slot="header">
          <header-phone />
          <search-item :checkId="3"/>
      </div>
      <div slot="content">
        <Category />
        <Sort />
        <house-item />
        <div class="pagination">
         <a-pagination v-model="current" :total="6" show-less-items />
        </div>
     </div>
  </common-layout>
</template>

<script>
export default {
    data() {
        return {
             current: 1,
        }
    }
}
</script>

<style lang='less' scoped>
.pagination {
    text-align: center;
    margin: 20px;
}
</style>