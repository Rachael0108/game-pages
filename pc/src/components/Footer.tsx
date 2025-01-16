import '../assets/css/footer.scss';
import Logo from '@/pc/assets/imgs/game-logo.png'
import Age from '../assets/imgs/age.png'
import Tip from '../assets/imgs/tips.png'
import PcLink from '../assets/imgs/pc-link.png'

const Footer = () => {
  return (
    <div id="pc-footer">
      <footer>
        <div className="footer_container">
          <div className="pc-footer-left">
            <img className="pc-game_logo" src={Logo} alt=""/>
            <div>
              <ul className="pc-link">
                <img alt="" src={PcLink}/>
                <li>
                  <a href="https://www.hermesgames.com.tw/#/customerCenter?type=companyInfo"
                  ></a
                  >
                </li>
                <li>
                  <a href="https://www.hermesgames.com.tw/#/customerCenter?type=contactUs"
                  ></a
                  >
                </li>
                <li>
                  <a href="https://www.hermesgames.com.tw/#/customerCenter?type=serviceTerms"
                  ></a
                  >
                </li>
                <li>
                  <a href="https://www.hermesgames.com.tw/#/customerCenter?type=privacyPolicy"
                  ></a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div className="pc-footer-right">
            <img className="pc-footer-age" alt="" src={Age}/>
            <img className="pc-footer-tip" alt="" src={Tip}/>
          </div>
        </div>
      </footer>
    </div>
  )
}

export { Footer };
