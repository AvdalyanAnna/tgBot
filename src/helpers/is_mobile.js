export default function(){
  if(typeof(navigator) !== 'undefined')  {
    return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator?.userAgent)) ?
    true :
    false
  } else {
    return false
  }
}