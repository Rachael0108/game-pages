export { Attention };

import AttentionBg from '../assets/imgs/attention.png'
import '../assets/css/attention.scss'
import FB from '@/mb/assets/img/fb.png'

const Attention = () => {
  return (
    <div id="attention">
      <img alt="" src={AttentionBg}/>
      <img className="facebook-link" alt="" src={FB}/>
    </div>
  )
}
