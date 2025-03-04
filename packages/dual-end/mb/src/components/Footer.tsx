import '../assets/css/m_footer.scss'
import Logo from '../assets/img/game_logo.png'

const Footer = () => {
  return (
    <div className="mb_footer">
      <footer>
        <div className="mb_footer_container columnFlex">
          <div className="logo rowFlex">
            <img className="game_logo" src={Logo} alt=""/>
          </div>
          <ul className="rowFlex link">
            <li>
              <a href="https://www.hermesgames.com.tw/#/customerCenter?type=companyInfo"
              >公司介绍</a
              >
            </li>
            <li className="divider">|</li>
            <li>
              <a href="https://www.hermesgames.com.tw/mbindex.html#/customerCenter?type=contactUs"
              >聯繫我們</a
              >
            </li>
            <li className="divider">|</li>
            <li>
              <a href="https://www.hermesgames.com.tw/mbindex.html#/customerCenter?type=serviceTerms"
              >服務條款</a
              >
            </li>
            <li className="divider">|</li>
            <li>
              <a href="https://www.hermesgames.com.tw/mbindex.html#/customerCenter?type=privacyPolicy"
              >隱私政策</a
              >
            </li>
          </ul>
          <p className="copyright">
            Copyright © 2024 Hermes Game Co.,LTD 荷米斯遊戲有限公司 All Rights Reserved
          </p>
          <ul className="tips">
            <li>※遊戲內容依遊戲軟體分級管理辦法第六條，列為「輔導12歲級」。</li>
            <li>※本遊戲為免費使用，遊戲內另提供購買虛擬遊戲幣、物品等付費服務。</li>
            <li>※因遊戲內容涉及「暴力」-有打鬥、攻擊等未達血腥之畫面與「性」–角色
              <br/> &nbsp; 穿著凸顯女性胸、臀性特徵之服飾。</li>
            <li>※請注意遊戲時間，避免沉迷</li>
            <li>
              ※本遊戲由荷米斯遊戲有限公司代理，如有疑問，請與本遊戲客服管道聯繫。
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
export default Footer
