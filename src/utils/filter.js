import { BASEURL } from './config'
import moment from 'moment'

export const imgFormat = value => {
    return BASEURL + value
  }

  export const timeFormat = value => {
     if(value) {
      return  moment(value).format('YYYY-MM-DD')
     }else {
       return '-'
     }
  }