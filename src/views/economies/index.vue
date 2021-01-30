<template>
    <div>
        <common-layout>
            <div slot="header">
                    <HeaderLogo />
            </div>
            <div slot="content" >
                <div class="bgcontainer">
                    <div class="mainContainer" :style="{ 'min-height': box_height }">
                        <div class="nav">
                            <div class="nav_item" v-for="item in navList" :key="item.index">{{item.name}}</div>
                        </div>
                        <div class="content_item">
                            <div class="content_left">
                                <div class="content_title">区域概况</div>
                                <div class="created_time">发布时间:2020年8月25日 18:00</div>
                            </div>
                            <div class="content_right">
                                <a-button type="primary" class="detail_btn">查看详情</a-button>
                            </div>
                        </div>
                        <!-- 分页 -->
                         <div class="pages">
                             <a-pagination size="small" :total="50" show-size-changer show-quick-jumper />
                         </div>
                    </div>
                </div>
            </div>
        </common-layout>
    </div>
</template>

<script>
export default{
    data(){
        return {
            navList:[
                {index:0,name:'区域概况'},
                {index:1,name:'核心数据'},
                {index:2,name:'产业发展'},
                {index:3,name:'区域企业'},
                {index:4,name:'区域政策'}
            ]
        }
    },
    created(){
        this.getHeight()
    },
    methods:{
         //获取内容区域高度
        getHeight(){
            this.box_height=(window.innerHeight-80)+'px'
            console.log(this.box_height)
        }
    }
}
</script>

<style lang="less">
.bgcontainer{
    background: #f8f9fb;
    .mainContainer{
        width: 1200px;
        margin: 0 auto;
        background: #fff;
        .nav{
            margin-top: 20px;
            display: flex;
            border-bottom: 2px solid #169bd5;
            .nav_item{
                width: 140px;
                height: 40px;
                font-size: 16px;
                // background: #169bd5;
                // color: #fff;
                line-height: 40px;
                text-align: center;
            }
        }
        .content_item{
            height: 190px;
            border-bottom: 1px solid #f6f6f6;
            display: flex;
            justify-content: space-between;
            .content_left{
                margin-top: 50px;
                margin-left: 20px;
                .content_title{
                    font-size: 24px;
                    color: #555555;
                }
                .created_time{
                    margin-top: 40px;
                    font-size: 16px;
                    color:#555555;
                }
            }
            .content_right{
                align-self: center;
                margin-right: 30px;
                .detail_btn{
                    width: 126px;
                    height: 48px;
                    background:#169bd5;
                }
            }
        }
        .pages{
            padding: 50px 0;
            text-align: center;
        }
    }
}
</style>