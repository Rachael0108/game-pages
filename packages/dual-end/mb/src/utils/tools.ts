
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

export function isIPhone() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

export function getLink(type: string) {
  const links: Record<string, string> = {
    line: "https://line.me/ti/g2/AdrogOp_njALYtTIwGJBaDnmnuzkm0xyPdcYWA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    fb: "https://www.facebook.com/3KDfantasy/",
    naverGame: "https://game.naver.com/lounge/syungsyung/home",
    ios: "https://sgzhxzj.onelink.me/N6F7/aq0o056z",
    gp: "https://sgzhxzj.onelink.me/N6F7/aq0o056z",
    icon: "https://www.facebook.com/3KDfantasy/"
  }
  return links[type]
}

import { pageEvent } from '@/mb/api/index.js'
export function handleEvent(type: string) {
  const flag: Record<string, boolean> = {}
  flag[type] = localStorage.getItem(type) !== null
  if ( !flag[type] ) {
    flag[type] = true
    localStorage.setItem(type, String(true))
    pageEvent({ event_name: type })
  }
}
