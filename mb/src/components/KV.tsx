
import '../assets/css/m_kv.scss'
import KVImage from '../assets/img/mb-kv.png'
import IOSBtn from "../assets/img/ios.png"
import GP from "../assets/img/gp.png"
import { getLink, handleEvent } from '@/mb/utils/tools.ts'

export default KV;

function KV() {

  const handleIOS = () => {
    handleEvent('ios_btn')
    window.open(getLink('ios'), '_blank')
  }
  const handleGP = () => {
    handleEvent('google_btn')
    window.open(getLink('gp'), '_blank')
  }
  return (
    <div id='mb-kv'>
      <img className="kv-role" src={KVImage} alt=""/>
      <div className="kv-store">
        <img alt="" src={IOSBtn} className="ios-btn" onClick={handleIOS}/>
        <img alt="" src={GP} className="gp-btn" onClick={handleGP}/>
      </div>
    </div>
  )
}
