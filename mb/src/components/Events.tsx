import '../assets/css/m_events.scss'
import rewardA from '../assets/img/a.png'
import rewardB from '../assets/img/b.png'
import rewardC from '../assets/img/c.png'
import BT from '../assets/img/mb-BT.png'
import { Reveal } from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'

export default Events;

function Events() {
  const SlideFade = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 60px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
  return (
    <div id="mb-event">
      <div className="mb-event-inner">
        <div className="mb-event-rewards">
          <Reveal keyframes={SlideFade} triggerOnce duration={600} fraction={0.1}>
            <img className="reward-a" alt="" src={rewardA}/>
            <img className="reward-b" alt="" src={rewardB}/>
            <img className="reward-c" alt="" src={rewardC}/>
          </Reveal>
        </div>
        <img className="mb-event-btn" src={BT} alt=""
             onClick={() => { window.open('https://www.hermesgames.com.tw/#/gameStoreCenter', '_blank') }}
        />
      </div>
    </div>
  )
}
