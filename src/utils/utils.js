import Cookies from 'js-cookie'

// 获取cookie里的token
export function getCookieToken() {
    return Cookies.get('token');
 }

 // 获取页面宽度
 export function getPageWidth() {
     return window.innerWidth + 'px'
 }
 