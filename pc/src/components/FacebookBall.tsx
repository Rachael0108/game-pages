import { useEffect, useState } from 'react'
import FB from '@/mb/assets/img/fb.png'
import { getLink, isPC } from '@/mb/utils/tools.ts'

const FacebookBall = () => {
  const [ affixPosition, setAffixPosition ] = useState(0)
  const [ isDesktop, setIsDesktop ] = useState(undefined)

  const handleFB = () => {
    window.open(getLink('fb'), '_blank')
  }
  const handleScroll = () => {
    const scrollTop = window.scrollY || window.pageYOffset
    setAffixPosition(scrollTop)
  }

  useEffect(() => {
    setIsDesktop(isPC())
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    isDesktop ? <div id="facebook-ball" className={affixPosition > 1900 ? 'unfix' : 'affix'}>
        <img className="facebook-link" alt="" src={FB} onClick={handleFB}/>
      </div>
      : <div id="mb-facebook-ball" className={affixPosition > 1150 ? 'mb-unfix' : 'mb-affix'}>
        <img className="mb-facebook-link" alt="" src={FB}
             onClick={handleFB}/>
      </div>
  )
}
export default FacebookBall
