import '../assets/css/footer.scss'
import MoreFunLogo from '../assets/img/morefun-logo.png'

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <img alt="" src={MoreFunLogo} className="morefun-logo"/>
      <div className="footer_link">
        <a href="/privacyPolicy.html">นโยบายความเป็นส่วนตัว</a><p>|</p>
        <a href="/termsService.html">ข้อกำหนดในการให้บริการ</a>
      </div>
      <div className="tips">
        <p>Email：service@gamemorefun.com</p>
        <span>|</span>
        <p>©Morefun Technology Co.,Ltd. All Rights Reserved</p>
      </div>
    </div>
  )
}
export default Footer
