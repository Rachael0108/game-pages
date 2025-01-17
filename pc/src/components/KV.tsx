import '../assets/css/kv.scss'
import PCKV from '@/pc/assets/imgs/pc-kv-c.webp'
import Quoto from '../assets/imgs/pc-quoto.png'
import IOS from '../assets/imgs/IOS.png'
import GP from '../assets/imgs/gp.png'
import { getLink, handleEvent } from '@/mb/utils/tools.ts'

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
    <div id="pc-kv">
      <button className="icon-link"
              onClick={() => { window.open('https://www.facebook.com/3KDfantasy/', '_blank') }}>
      </button>
      <img className="kv-role" src={PCKV} alt=""/>
      <img className="kv-quoto" src={Quoto} alt=""/>
      <div className="pc-download">
      <img className="ios" src={IOS} alt="" onClick={handleIOS}/>
        <img className="gp" src={GP} alt="" onClick={handleGP}/>
      </div>
    </div>
  )
}

export default KV;
