import '../assets/css/kv.scss'
import PCKV from '@/pc/assets/imgs/pc-kv.png'
import Quoto from '../assets/imgs/pc-quoto.png'
import IOS from '../assets/imgs/IOS.png'
import GP from '../assets/imgs/gp.png'

function KV() {
  return (
    <div id="pc-kv">
      <img className="kv-role" src={PCKV} alt=""/>
      <img className="kv-quoto" src={Quoto} alt=""/>
      <div className="pc-download">
        <img className="ios" src={IOS} alt=""/>
        <img className="gp" src={GP} alt=""/>
      </div>
    </div>
  )
}

export default KV;
