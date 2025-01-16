import '../assets/css/m_events.scss'
import { getLink } from "@/mb/utils/tools.ts"

import rewardA from '../assets/img/a.png'
import rewardB from '../assets/img/b.png'
import rewardC from '../assets/img/c.png'
import BT from '../assets/img/mb-BT.png'

export default Events;

function Events({}) {

  const handleFB = () => {
    window.open(getLink('fb'), '_blank')
  }
  return (
    <div id="mb-event">
      <div className="mb-event-inner">
        <div className="mb-event-rewards">
          <img className="reward-a" alt="" src={rewardA}/>
          <img className="reward-b" alt="" src={rewardB}/>
          <img className="reward-c" alt="" src={rewardC}/>
        </div>
        <img className="mb-event-btn" src={BT} alt=""/>
      </div>
    </div>
  )
}
