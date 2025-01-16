export {Events};

import '@/pc/assets/css/events.scss'
import KVBtn from '../assets/imgs/BT.png'
import rewardA from '../assets/imgs/A.png'
import rewardB from '../assets/imgs/b.png'
import rewardC from '../assets/imgs/c.png'

function Events() {

  return (
    <div id="pc-event">
      <div className="event-inner">
        <div className="pc-event-rewards">
          <div className="pc-reward-top">
            <img className="reward-a" alt="" src={rewardA}/>
          </div>
          <div className="pc-reward-bottom">
            <img className="reward-b" alt="" src={rewardB}/>
            <img className="reward-c" alt="" src={rewardC}/>
          </div>
        </div>
        <img className="event-btn" alt="" src={KVBtn}/>
      </div>
    </div>
  )
}
