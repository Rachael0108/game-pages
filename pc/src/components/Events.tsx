export {Events};

import '@/pc/assets/css/events.scss'
import KVBtn from '../assets/imgs/BT.png'
import rewardA from '../assets/imgs/A.png'
import rewardB from '../assets/imgs/b.png'
import rewardC from '../assets/imgs/c.png'
import { Fade, Slide } from "react-awesome-reveal";

function Events() {

  return (
    <div id="pc-event">
      <div className="event-inner">
        <div className="pc-event-rewards">
          <Slide direction="up" cascade triggerOnce>
            <div className="pc-reward-top">
              <img className="reward-a" alt="" src={rewardA}/>
            </div>
            <div className="pc-reward-bottom">
              <img className="reward-b" alt="" src={rewardB}/>
              <img className="reward-c" alt="" src={rewardC}/>
            </div>
          </Slide>
          <Fade delay={600} triggerOnce>
            <img className="event-btn" alt="" src={KVBtn}
                 onClick={() => { window.open('https://www.hermesgames.com.tw/#/gameStoreCenter', '_blank') }}
            />
          </Fade>
        </div>
      </div>
    </div>
  )
}
