import { pageEvent } from '@/mb/api/index.js'

// 按小时增加人数
export const getTotal = () => {
  // 活动时间：2024/12/27 - 2025/1/16
  // 每天对应的每小时增加人数
  const ADD_PER_HOUR = [
    350, 386, 364, 425, 447, 540, 513, 522, 468, 455, 471, 490, 510, 421, 510, 540, 540, 410, 422, 432, 370
  ];
  const FINAL_NUM = 230064

  // const now = new Date('2025-01-02T00:00:00'); // 模拟当前时间
  const now = new Date(); // 获取当前时间
  const start = new Date('2024-12-27T00:00:00'); // 开始时间
  const end = new Date('2025-01-17T00:00:00'); // 结束时间
  let TOTAL = 0; // 总票数

  if ( now < start ) {
    return 0
  } else if ( now >= end ) {
    return FINAL_NUM
  } else {
    // 获取当前天数是数组第几天，获取今天的过去小时数，根据索引*对应每天总人数人数 + 当天小时数 * 当天每小时票数 = 当前票数
    const PAST_DAYS = Math.floor((now - start) / 86400000);
    const TODAY_HOURS = Math.floor((now - start) / 3600000) % 24;

    if ( PAST_DAYS > ADD_PER_HOUR.length ) {
      return FINAL_NUM
    } else {
      // 过去总票数
      let PAST_NUM = 0
      for ( let day = 0; day < PAST_DAYS; day++ ) {
        PAST_NUM += ADD_PER_HOUR[day] * 24
      }
      // 当天总票数
      let TODAY_NUM = 0
      let TODAY_PER_HOUR_INDEX = PAST_DAYS
      TODAY_NUM = ADD_PER_HOUR[TODAY_PER_HOUR_INDEX] * TODAY_HOURS

      TOTAL = PAST_NUM + TODAY_NUM
      // console.log(TOTAL)
      return TOTAL
    }
  }
};

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
    pageEvent({ event_name: type })
  }
}
