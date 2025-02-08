export { Attention };

import AttentionBg from '../assets/imgs/attention.png'
import '../assets/css/attention.scss'

const Attention = () => {
  return (
    <div id="attention">
      <img className="attention-bg" alt="" src={AttentionBg}/>
    </div>
  )
}
