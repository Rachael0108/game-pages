export { Attention };

import AttentionBg from '../assets/img/attention.png'
import '../assets/css/m_attention.scss'

const Attention = () => {

  return (
    <div id="m-attention">
      <img className="attention-bg" alt="" src={AttentionBg}/>
    </div>
  )
}
