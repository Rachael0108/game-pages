export { Events };

import '@/pc/assets/css/events.scss'
import KVBtn from '../assets/imgs/BT.png'
import rewardA from '../assets/imgs/A.png'
import rewardB from '../assets/imgs/b.png'
import rewardC from '../assets/imgs/c.png'
import { Reveal, Fade, Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function Events() {
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
  return (
    <div id="pc-event">
      <div className="event-inner">
        <div className="pc-event-rewards">
            <Reveal keyframes={SlideFade} delay={300} cascade triggerOnce>
              <div className="pc-reward-top">
                <img className="reward-a" alt="" src={rewardA}/>
              </div>
            </Reveal>
          <div className="pc-reward-bottom">
            <Slide direction="left" triggerOnce>
              <img className="reward-b" alt="" src={rewardB}/>
            </Slide>
            <Slide direction="right" triggerOnce>
              <img className="reward-c" alt="" src={rewardC}/>
            </Slide>
          </div>

          <Fade delay={300} triggerOnce>
            <img className="event-btn" alt="" src={KVBtn}
                 onClick={() => { window.open('https://www.hermesgames.com.tw/#/gameStoreCenter', '_blank') }}
            />
          </Fade>
        </div>
      </div>
    </div>
  )
}
