import KV from './components/KV.tsx'
import eventBg from './assets/imgs/pc-bg.png'
import './assets/css/App.scss'
import { Footer } from '@/pc/components/Footer.tsx'
import { Events } from '@/pc/components/Events.tsx'
import { Attention } from '@/pc/components/Attention.tsx'

const Desktop = () => {
  return (
    <>
      <div id="device-pc">
        <KV/>
        <Events/>
        <Attention/>
      </div>
      <img alt="" src={eventBg} className="pc-event-bg"/>
      <Footer/>
    </>
  )
}
export default Desktop
