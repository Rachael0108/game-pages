export {Header}

import { getLink } from '../utils/tools'
import HeaderBg from '../assets/img/kv/header.png'
import Avatar from '../assets/img/kv/avatar.png'
import '../assets/css/header.scss'

const Header = () => {
  return (
    <div className="header">
      <img alt="" src={HeaderBg} className="header-bg"/>
      <a className={'fb-link'} href={getLink('fb')} target={'_blank'}/>
      <a className={'line-link'} href={getLink('line')} target={'_blank'}/>
      <img className="header-avatar" alt="" src={Avatar} onClick={() => { window.open('https://3kdfantasythpay.gamemorefun.com/', '_blank') }}/>
    </div>
  )
}
