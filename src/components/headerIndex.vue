<template>
  <div class="myHeader">
      <div class="headerContainer">
            <img src="../img/logo.png" alt="">
            <div class="citys">杭州
                 <a-icon type="caret-down" />
            </div>
            <div class="myTabs">
                <ul>
                    <li v-for="item in navList" :key="item.id" @click="toRoute(item)">
                        {{item.name}}
                        <div class="stripe"></div>
                    </li>
                </ul>
            </div>
            <div class="loginRegister" v-if="!isLogin">
                <a-icon type="user" class="icon_user"/>
                <span @click="goLogin" style="margin-right: 10px;">登录</span>
                <span @click="goRegister">注册</span>
            </div>
            <div class="loginOut" v-else>
                你好,XXXssssssss
                <span @click="loginOut">退出登陆</span>
            </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return {
            navList: [
                { id: 1, name: '首页', route: '/'},
                // { id: 2, name: '区域经济', route: '/'},
                { id: 3, name: '委托选址', route: '/setSelect'},
                { id: 4, name: '委托招商', route: '/attractInvestment'},
                { id: 5, name: '商机大厅', route: '/bussinessHall'},
                { id: 6, name: '个人中心', route: '/personal'},
            ],
            isLogin:false
        }
    },
    computed:{
        ...mapState(['party'])
    },
    created(){
        this.isLogin = this.party.login
    },
    methods:{
        
        goLogin(){
            this.$router.push('phoneLogin')
        },
        goRegister(){
            this.$router.push('register')
        },
        toRoute(item) {
            this.$router.push(`${item.route}`)
        },
        loginOut(){
            this.$store.commit('party/isLogin',false)
            this.isLogin = this.party.login
        }
    }
}
</script>

<style lang="less" scoped>
.myHeader{
    height: 80px;
    width: 100%;
     color: #fff;
    // background:#555555;
    .headerContainer{
        width: 1200px;
        margin: 0 auto;
        position: relative;
        display: flex;
    img{
        width: 130px;
        height: 68px;
        margin-top: 6px;
    }
    .citys{
        width:100px;
        font-size: 16px;
       
        margin-left: 20px;
        margin-top: 28px;
    }
    .myTabs{
        width: 50%;
        
        ul{
            width: 100%;
            display: flex;
            list-style: none;
            height: 80px;
            align-items: center;
            li{
                flex:1;
                text-align: center;
                
                font-size: 18px;
            }
            li:hover,li:active{
                color: #17a1e6;
                transition: all ease 1s;
                cursor: pointer;
                .stripe{
                    background: #17a1e6;
                     transition:all ease 1.5s;
                }
            }
        }
    }
    .loginRegister{
        position: absolute;
        right: 0;
        top: 0;
        font-size: 16px;
        display: flex;
        
        color:#fff;
        line-height: 80px;
        .icon_user{
            margin-top: 32px;
        }
        span{
            // margin-top:20px;
            margin-left: 5px;
        }
        span:hover,span:active{
            color: #17a1e6;
            cursor: pointer;
            transition: all ease 1.5s;
        }
    }
    .loginOut{
        margin-left: 20px;
        font-size: 16px;
        color:#fff;
        line-height: 80px;
        span{
            cursor: pointer;
            font-size: 14px;
            margin-left: 20px;
        }
    }
    }
}
</style>>

