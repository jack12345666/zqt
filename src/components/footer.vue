<template>
  <div class="myFooter">
     
     <div class="comInfo">
       <img src="../img/logo.png" alt="">
       <div class="comName">杭州创我网络技术有限公司</div>
     </div>
     <div class="moreInfo">
       关于政企通
       <div class="aboutInfo">关于我们</div>
       <div class="aboutInfo">商务合作</div>
       <div class="aboutInfo">常见问题</div>
       <div class="aboutInfo">新闻资讯</div>
     </div>
    <div class="moreInfo">
       关于政企通
       <div class="aboutInfo">关于我们</div>
       <div class="aboutInfo">商务合作</div>
       <div class="aboutInfo">常见问题</div>
       <div class="aboutInfo">新闻资讯</div>
     </div>
    <div class="moreInfo">
       关于政企通
       <div class="aboutInfo">关于我们</div>
       <div class="aboutInfo">商务合作</div>
       <div class="aboutInfo">常见问题</div>
       <div class="aboutInfo">新闻资讯</div>
     </div>
     <div class="serverInfo">客服服务
        <div class="tel_number">188-8888-8888</div>
        <div class="time">(早9:00-晚8:00)</div>
     </div>
     <div class="QR_Code">
       <img src="../img/logo.png" alt="">
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.myFooter{
  background: #333333;
  height: 235px;
  display: flex;
  padding: 30px 13%;
  .comInfo{
    .comName{
          font-family: 微软雅黑;
          font-weight: 400;
          font-style: normal;
          font-size: 18px;
          color: rgb(170, 170, 170);
          margin-top: 20px;
            }
  }
  .moreInfo{
    flex: 1;
    margin-left: 50px;
    font-family: "微软雅黑";
    font-weight: 600;
    font-style: normal;
    color: #f2f2f2;
    font-size: 18px;
    .aboutInfo{
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
      color: rgb(170,170,170);
    }
  }
  .serverInfo{
    flex:1;
    color: #f2f2f2;
    font-size: 18px;
    .tel_number{
      font-size: 16px;
      color: rgb(170, 170, 170);
    }
    .time{
      font-size: 16px;
      color: rgb(170, 170, 170);
    }
  }
  .QR_Code{
    img{
      width: 100px;
      height: 100px;
    }
  }
}
</style>