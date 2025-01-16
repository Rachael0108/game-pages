import '../../common/reset.css';
import KV from './components/KV.tsx'
import Events from './components/Events.tsx'
import Achievement from './components/Achievement.tsx'
import MbSwiper from './components/MbSwiper.tsx'
import Footer from './components/Footer.tsx'
import FloatPop from '@/mb/components/FloatPop.tsx'
import MobileCSS from './assets/css/m_mobile.module.scss'
import { VerticalDevice } from '@/mb/components/VerticalDevice/VerticalDevice.tsx'

import React, { ReactNode, SetStateAction, useEffect, useRef, useState } from 'react'

import SideMenu from './components/SideMenu.tsx'
import { useInViewport, useMemoizedFn } from 'ahooks'
import LazyLoad from 'react-lazyload'
import eventBg from '@/mb/assets/img/mb-bg.png'
import { Attention } from '@/mb/components/Attention.tsx'

function Mobile() {
  const [ activeMenu, setActiveMenu ] = useState(0)

  const [ kvHeight, setKvHeight ] = useState(0)

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    const ele = document.getElementById('kv')
    if ( ele ) {
      setKvHeight(ele.getBoundingClientRect().height)
    }
  }, []);

  const menuRef: React.MutableRefObject<(HTMLDivElement | null)[]> = useRef([]);
  const menus = [
    {
      title: 'หน้าหลัก', // kv
      id: 'menu-1'
    },
    {
      title: 'ลงทะเบียนล่วงหน้า', // 预约
      id: 'menu-2'
    },
  ]

  const callback = useMemoizedFn((entry) => {
    if ( entry.isIntersecting ) {
      const active = entry.target.getAttribute('id') || '';
      setActiveMenu(menus.findIndex((item) => item.id === active))
    }
  });

  useInViewport(menuRef.current, {
    callback,
    root: () => document.getElementById('parent-scroll'),
    rootMargin: '-50% 0px -50% 0px',  // rootMargin：进入到指定位置才算是active，这里是进入页面中心
  });
  return (
    <div>
      {/*<VerticalDevice/>*/}

      <div className={MobileCSS['parent-scroll']}>
        <div className={MobileCSS['content-scroll']}>
          <KV/>
          <LazyLoad offset={100}><Events/></LazyLoad>
          <Attention/>
          <Footer/>
          <img alt="" src={eventBg} className={MobileCSS['event-bg']}/>
        </div>
      </div>
    </div>
  )
}

export default Mobile
