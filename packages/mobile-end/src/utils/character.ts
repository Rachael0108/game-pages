import TwoBg from '@/assets/img/test/two-bg.png';
import FiveBg from '@/assets/img/test/fIVE-bg.png'

const CDN = 'https://cycdn.gamemorefun.com/sghxjweb/'

export const QuestionList = [
  {
    title: "Q1",
    question: "คุณชอบผจญภัยหรือชอบอยู่แบบเรียบง่าย?",
    options: [
      "ท้าทาย",
      "เรียบง่าย",
    ],
    bg: TwoBg
  },
  {
    title: "Q2",
    question: "คุณคิดว่าตัวเองเป็นคนโรแมนติกหรือเป็นคนที่เน้นความจริงจัง?",
    options: [
      "โรแมนติก",
      "จริงจัง",
    ],
    bg: TwoBg
  },
  {
    title: "Q3",
    question: "คุณชอบเดินทางคนเดียวไหม?",
    options: [
      "ชอบ",
      "ไม่ชอบ",
    ],
    bg: TwoBg
  },
  {
    title: "Q4",
    question: "ถ้าเพื่อนมาขอยืมตัง...",
    options: [
      "ต้องเขียนสัญญาเงินกู้",
      "ทำเป็นไม่ค่อยมี แต่ก็ยอมให้ยืม",
      "แบ่งให้เลย ไม่ต้องยืม",
      "ถามทำไม ตังค์ฉันก็ไม่มี",
      "คิดดูก่อน"
    ],
    bg: FiveBg
  },
]

export const characters = [
  {
    id: 'caocao.html',
    name: "โจโฉ",
    cname: "caocao",
    img: CDN + 'caocao.png',
    personality: "คุณคือโจโฉ ผู้มากด้วยสติปัญญาที่มาพร้อมกับเล่ห์กล เป็นผู้นำ มองการณ์ไกล บางทีคิดอะไรซับซ้อนเกินคน ใครได้สัมผัสกับคุณเป็นได้ทึ่งในความคิดอยู่เนืองๆ"
  },
  {
    id: 'diaochan.html',
    name: "เตียวเสี้ยน",
    cname: "diaochan",
    img: CDN + 'diaochan.png',
    personality: "คุณคือเตียวเสี้ยน คุณสามารถจัดการกับปัญหาที่ซับซ้อนได้ มีความกล้าหาญที่ไม่ธรรมดา มีภูมิปัญญาและความกล้าที่ไม่ธรรมดา"
  },
  {
    id: 'guanyu.html',
    name: "กวนอู",
    cname: "guanyu",
    img: CDN + 'guanyu.png',
    personality: "คุณคือกวนอู ผู้รักสัตย์ยิ่งชีพ มีความซึ่อตรง มีบุญคุณต้องทดแทน มีความแค้นต้องชำระ"
  },
  {
    id: 'liubei.html',
    name: "เล่าปี่",
    cname: "liubei",
    img: CDN + 'liubei.png',
    personality: "คุณคือเล่าปี่ ผู้มีคุณธรรม ชอบช่วยเหลือ และเห็นอกเห็นใจผู้คน คุณนี่เป็นคนดีจริงๆ"
  },
  {
    id: 'lvbu.html',
    name: "ลิโป้",
    cname: "lvbu",
    img: CDN + 'lvbu.png',
    personality: "คุณคือลิโป้ ผู้กล้าหาญที่สุดในสามก๊ก เพื่อนชมกันว่า “ลิโป้ยอดคน อิเหล็กแดงยอดม้า”"
  },
  {
    id: 'xiaoqiao.html',
    name: "ไต้เกี้ยว",
    cname: "xiaoqiao",
    img: CDN + 'xiaoqiao.png',
    personality: "คุณคือไต้เกี้ยว มีทั้งความสามารถและความสวยงาม  คุณมีเสน่ห์มาก และความฉลาดของคุณมักจะสร้างความประทับใจให้กับคนอื่นเสมอ"
  },
  {
    id: 'zhouyu.html',
    name: "จิวยี่",
    cname: "zhouyu",
    img: CDN + 'zhouyu.png',
    personality: "คุณคือจิวยี่ ผู้มากความสามารถ โดดเด่น มั่นใจในตัวเอง ฉลาดล้ำ แต่บางทีก็พลาดในเรื่องพื้นๆ"
  },
  {
    id: 'zhuge.html',
    name: "จูกัดเหลียง",
    cname: "zhuge",
    img: CDN + 'zhuge.png',
    personality: "คุณคือจูกัดเหลียง ผู้ชาญฉลาด รอบรู้ ลึกล้ำ คุณนี่ยอดเยี่ยมจริงๆ"
  }
];

export const getRoleFromUrl = () => {
  const url = window.location.href
  const urlParams = new URLSearchParams(url.split('?')[1])
  const r = urlParams.get('role')
  let role = {id: ''}
  characters.filter((c) => {
    if ( c.cname == r ) {
      role = c
    }
  })
  return role
}
// 获取角色索引
export const getResult = () => {
  return Math.floor(Math.random() * characters.length);
}
export const saveResult =  () => {
  const resultIndex = getResult()
  const role = getCharacter(resultIndex)
  localStorage.setItem('roleInfo', JSON.stringify(role))
  window.location.href = `#/result?role=${role.cname}`
}

export const clearResult = () => {
  localStorage.removeItem('result')
}

// 通过角色索引获取角色信息
export const getCharacter = (index: number) => {
  return characters[index]
}
