import KV from './components/KV.tsx'
import './assets/css/App.scss'
import { Footer } from '@/pc/components/Footer.tsx'

const Desktop = () => {
  return (
    <>
      <div id="device-pc">
        <KV/>
      </div>
      <Footer/>
    </>
  )
}
export default Desktop
