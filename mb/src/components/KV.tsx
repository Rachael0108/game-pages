import '../assets/css/m_kv.scss'
import KVImage from '../assets/img/mb-kv.png'
import IOSBtn from "../assets/img/ios.png"
import GP from "../assets/img/gp.png"
import { getLink, handleEvent } from '@/mb/utils/tools.ts'
import { Reveal } from "react-awesome-reveal"
import { keyframes } from '@emotion/react'

function KV() {
  const SlideFade = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
  const handleIOS = () => {
    handleEvent('ios_btn')
    window.open(getLink('ios'), '_blank')
  }
  const handleGP = () => {
    handleEvent('google_btn')
    window.open(getLink('gp'), '_blank')
  }

  return (
    <Reveal triggerOnce keyframes={SlideFade} duration={1500}>
      <div id='mb-kv'>
        <img className="kv-role" src={KVImage} alt=""/>
        <button className="icon-link"
                onClick={() => { window.open('https://www.facebook.com/3KDfantasy/', '_blank') }}></button>
        <div className="kv-store">
          <img alt="" src={IOSBtn} className="ios-btn" onClick={handleIOS}/>
          <img alt="" src={GP} className="gp-btn" onClick={handleGP}/>
        </div>
      </div>
    </Reveal>
  )
}

export default KV;
