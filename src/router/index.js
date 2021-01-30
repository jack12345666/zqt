import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('@/views/main')
const Office = () => import('@/views/office')
const Space = () => import('@/views/space')
const Park = () => import('@/views/park')
const Warehouse = () => import('@/views/warehouse')
const Workshop = () => import('@/views/workshop')
const Land = () => import('@/views/land')
const HouseDetail = () => import('@/views/houseDetail')
const SpaceDetail = () => import('@/views/spaceDetail')
const AccountLogin = () => import('@/views/accountlogin')
const PhoneLogin = () => import('@/views/phoneLogin')
const ForgetPassword = () => import('@/views/forgetPassword')
const Register = () => import('@/views/register')
const SetPassword = () => import('@/views/setPassword')
const Personal = () => import('@/views/personal')
const AuthorizeDetail = () => import('@/views/authorizeDetail')
const AuthorizeFailed = () => import('@/views/authorizeFailed')
const SetSelect = () => import('@/views/setSelect')
const AttractInvestment = () => import('@/views/attractInvestment')
const BussinessHall =() => import('@/views/bussinessHall')
const Economies =() => import('@/views/economies')
const CoreData = () => import('@/views/coreData')
const DevIndustrial = () => import('@/views/devIndustrial')
const RegionalEnterprises = () => import('@/views/regionalEnterprises')
const RegionalPolicy = () => import('@/views/regionalPolicy')



Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Index, name: 'index', meta: {title: '政企通'} }, 
    { path: '/office', component: Office, name: 'office', meta: {title: '政企通 - 办公楼'} }, 
    { path: '/space', component: Space, name: 'space', meta: {title: '政企通 - 共享空间'} }, 
    { path: '/park', component: Park, name: 'park', meta: {title: '政企通 - 产业园'} }, 
    { path: '/warehouse', component: Warehouse, name: 'warehouse', meta: {title: '政企通 - 仓库'} }, 
    { path: '/workshop', component: Workshop, name: 'workshop', meta: {title: '政企通 - 厂房'} }, 
    { path: '/land', component: Land, name: 'land', meta: {title: '政企通 - 土地'} }, 
    { path: '/houseDetail/:id', component: HouseDetail, name: 'houseDetail', meta: {title: '政企通 - 房屋详情'} }, 
    { path: '/spaceDetail/:id', component: SpaceDetail, name: 'spaceDetail', meta: {title: '政企通 - 商圈详情'} },
    { path:'/accountLogin', component: AccountLogin, name:'login', meta: {title: '账号登陆'}},
    { path:'/phoneLogin', component: PhoneLogin, name:'phoneLogin', meta: {title: '手机号登陆'} },
    { path:'/forgetPassword', component: ForgetPassword, name:'forgetPassword', meta: {title: '找回密码'}},
    { path:'/register', component: Register, name:'register', meta: {title: '注册账号'}},
    { path:'/setPassword', component: SetPassword, name:'setPassword', meta: {title: '设置新密码'}},
    { path:'/personal', component: Personal, name:'personal', meta: {title:'个人中心'}},   
    { path:'/authorizeDetail',component: AuthorizeDetail,name:'authorizeDetail', meta:{title:'委托详情'}},
    { path:'/authorizeFailed',component: AuthorizeFailed,name:'authorizeFailed',meta:{title:'审核失败'}},
    { path:'/setSelect',component: SetSelect, name:'setSelect', meta:{title:'委托选址'}},
    { path:'/attractInvestment',component: AttractInvestment,name:'attractInvestment',meta:{title:'委托招商'}},
    { path:'/bussinessHall',component: BussinessHall, name:'bussinessHall',meta:{title:'招商大厅'}},
    { path:'/economies',component: Economies, name:'economies',meta:{title:'区域经济'}},
    { path:'/coreData',component: CoreData, name:'CoreData', meta:{title:'核心数据'}},
    { path:'/devIndustrial',component: DevIndustrial, name:'devIndustrial',meta:{title:'产业发展'}},
    { path:'/regionalEnterprises',component: RegionalEnterprises, name:'regionalEnterprises',meta:{title:'区域企业'}},
    { path:'/regionalPolicy',component: RegionalPolicy, name:'regionalPolicy',meta:{title:'区域政策'}},
    { path: '/redirect/:path*',component: () => import('@/views/redirect/index')}
   
  ]
})

router.beforeEach((to, from, next) => {
	if (to.name) {
    document.title = to.meta.title;
  }else{ 
    document.title = '政企通'
  }
  next()
})

export default router
 