export function getImgUrl(url: string) {
  return new URL(`../assets/img/${url}`, import.meta.url).href
}

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

export function cdnLink(url: string) {
  return `https://cycdn.gamemorefun.com/yyjhweb/${url}`
}

export function getLink(type: string) {
  let links = {
    youtube: "https://www.youtube.com/@%EB%82%AD%EB%A7%8C%EA%B0%95%ED%98%B8-k1k",
    naver: "https://game.naver.com/lounge/RomanticGangho/home",
    ios: " https://apps.apple.com/app/%EB%82%AD%EB%A7%8C%EA%B0%95%ED%98%B8/id6502746403?ppid=479d3e79-e8cd-4ff3-bc32-77e996113e57",
    gp: "https://yyjhgp.onelink.me/k0Wn/aoqipnqz",
    one: "https://onesto.re/0000776551",
    galaxy: "https://apps.samsung.com/appquery/appDetail.as?appId=com.morefunkr.yyjhs"
  }
  return links[type]
}
export function isBrowser() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
