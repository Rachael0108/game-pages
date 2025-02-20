export function isPC() {
  const userAgent = navigator.userAgent;
  const agents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod" ];

  for ( let i = 0; i < agents.length; i++ ) {
    if ( userAgent.indexOf(agents[i]) > 0 ) {
      return false;
    }
  }
  return true;
}

export function handleFBCallback () {
  // 如果域名中有 #cb
  if ( window.location.hash.indexOf('#cb') !== -1 ) {
    window.location.href = 'https://3kdfantasythquiz.gamemorefun.com/#/result'
    // window.location.href = 'http://192.168.93.185:5173/#/result'
  }
}
export function getLink(type: string) {
  const links: Record<string, string> = {
    line: "https://line.me/ti/g2/AdrogOp_njALYtTIwGJBaDnmnuzkm0xyPdcYWA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    fb: "https://www.facebook.com/3KDfantasy.TH/",
    naverGame: "https://game.naver.com/lounge/syungsyung/home",
    ios: "https://apps.apple.com/us/app/%E0%B8%AD%E0%B8%B2%E0%B8%95-%E0%B8%A5-%E0%B8%A2%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%81-%E0%B8%81/id6680157262?ppid=9842cfd4-77ce-4646-beac-f643d1c60e40",
    gp: "https://xxmth.onelink.me/MZMF/2b0yxcxi",
  }
  return links[type]
}
export function handleEvent(type: string) {
  const flag: Record<string, boolean> = {}
  flag[type] = localStorage.getItem(type) !== null
  if ( !flag[type] ) {
    flag[type] = true
    localStorage.setItem(type, String(true))
    pageEvent(type)
  }
}

// 统计事件
export const pageEvent = (event: string) => {
  const pv_flag = JSON.parse(localStorage.getItem(event)!)
  if ( pv_flag ) {
    return
  }
  localStorage.setItem(event, JSON.stringify(true))
  // axios.post('https://admin.csback.gamemorefun.net/api/v10/pageEvent',
  //   {
  //     event_name: key,
  //   }).then(resp => {
  //   // console.log(resp)
  // })
}

// let lock = 0;
// export const iosButtonEvent = async () => {
  // if (lock) {
  // } else {
  //   await fbq("trackCustom", "iOSbutton");
  //   lock = 1;
  // }
// };
