<template>
  <div class="box">
      <div class="content">
          <div class="sortList">
              <div :class="item.isChecked ? 'sortItem checked' : 'sortItem'" v-for="(item, index) in sortList" :key="item.id" @click="checkSort(item, index)">{{item.name}}</div>
          </div>
          <div class="num">共{{total}}套房源</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        total:{
            type:Number,
            default:0
        }
    },
    data() {
        return {
            sortList: [
                {id: '', name: '综合排序', isChecked: true},
                {id: 1, name: '最新', isChecked: false},
                {id: 2, name: '单价', isChecked: false},
                {id: 3, name: '总价', isChecked: false},
            ],
            num: 6666
        }
    },
    methods: {
        checkSort(item, index) {
            this.sortList.map(item => item.isChecked = false)
            this.sortList[index].isChecked = true
        }
    }
}
</script>

<style lang='less' scoped>
.box {
    width: 100%;
    .content {
        width: 1200px;
        margin: 30px auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid #17a1e6;
        .sortList {
            display: flex;
            align-items: center;
            .sortItem {
                color: #666;
                font-size: 16px;
                padding: 10px 20px;
                margin-right: 20px;
                &:hover {
                    cursor: pointer;
                }
            }
            .checked {
                color: #fff;
                background-color: #169bd5;
            }
        }
        .num {
            color: #666;
            font-size: 16px;
        }
    }
}
</style>