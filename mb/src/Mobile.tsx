import '../../common/reset.css';
import KV from './components/KV.tsx'
import Events from './components/Events.tsx'
import Footer from './components/Footer.tsx'
import  { useEffect } from 'react'
import eventBg from '@/mb/assets/img/mb-bg.png'
import { Attention } from '@/mb/components/Attention.tsx'
import { VerticalDevice } from '@/mb/components/VerticalDevice/VerticalDevice.tsx'
import MobileCSS from './assets/css/m_mobile.module.scss'

function Mobile() {

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }, []);

  return (
    <div>
      <VerticalDevice/>

      <div className={MobileCSS['parent-scroll']}>
        <div className={MobileCSS['content-scroll']}>
          <KV/>
          <Events/>
          <Attention/>
          <Footer/>
          <img alt="" src={eventBg} className={MobileCSS['event-bg']}/>
        </div>
      </div>
    </div>
  )
}

export default Mobile
