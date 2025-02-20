import '../../common/reset.css';
import KV from './components/KV.tsx'
import Footer from './components/Footer.tsx'
import  { useEffect } from 'react'
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
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Mobile
