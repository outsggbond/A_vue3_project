//封装一个函数来处理时间
export const getTime=()=>{
  const now = new Date()
  const hours = now.getHours()
  if (hours < 9) {
    return '早上好'
  } else if (hours>=9&&hours <= 12) {
    return '上午好'
  } else if(hours > 12 && hours <= 18) {
    return '下午好'
  } else {
    return '晚上好'
  }
}