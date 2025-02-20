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
  const links = {
    youtube: "https://www.youtube.com/@%EB%82%AD%EB%A7%8C%EA%B0%95%ED%98%B8-k1k",
    naver: "https://game.naver.com/lounge/RomanticGangho/home",
    ios: "https://sgzhxzj.onelink.me/N6F7/aq0o056z",
    gp: "https://sgzhxzj.onelink.me/N6F7/aq0o056z",
    one: "https://onesto.re/0000776551",
    galaxy: "https://apps.samsung.com/appquery/appDetail.as?appId=com.morefunkr.yyjhs"
  }
  return links[type]
}
export function isBrowser() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}
