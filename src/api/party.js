import request from '@/utils/request';
import { stringify } from 'qs'


//获取通用分类
export function getCategory(data) {
    return request({
      url: '/qzt/getCodesByCategory',
      method: 'post',
      data: stringify(data)
    })
  }

  //获取区域的下级区域列表
  export function getArea(data) {
    return request({
      url: '/qzt/getAreasByParentId',
      method: 'post',
      data: stringify(data)
    })
  }

  //获取大楼、厂房等列表
  export function searchVenues(data){
      return request({
          url:'/qzt/searchVenues',
          method:'post',
          data:stringify(data)
      })
  }

  //获取大楼、厂房详情（包含完整的附件，图片）
  export function getVenueInfo(data){
    return request({
      url:'/qzt/getVenueInfo',
      method:'post',
      data:stringify(data)
    })
  }

  //获取大楼、厂房里的出租信息列表
  export function searchVenueDetails(data){
    return request({
      url:'/qzt/searchVenueDetails',
      method:'post',
      data:stringify(data)
    })
  }

  //获取出租详情（包含完整的附件，图片）
  export function getVenueDetailInfo(data){
    return request({
      url:'/qzt/getVenueDetailInfo',
      method:'post',
      data:stringify(data)
    })
  }

  //判断手机号是否存在（注册、登录前校验）
  export function checkAccount(data){
    return request({
      url:'/qzt/checkAccount',
      method:'post',
      data:stringify(data)
    })
  }

  //获取图片验证码
  export function getVertifyImage(){
    return request({
      url:'/qzt/getVertifyImage',
      method:'post'
    })
  }

  //获取短信验证码
  export function getVertifySms(data){
    return request({
      url:'/qzt/getVertifySms',
      method:'post',
      data:stringify(data)
    })
  }

  //短信验证码登录
  export function loginAccountSms(data){
    return request({
      url:'/qzt/loginAccountSms',
      method:'post',
      data:stringify(data)
    })
  }

  //短信验证码注册
  export function registerAccount(data){
    return request({
      url:'/qzt/registerAccount',
      method:'post',
      data:stringify(data)
    })
  }