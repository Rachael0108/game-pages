export {FBShare};

import { characters } from '../utils/character.ts'
import { useEffect, useState } from 'react'

const FBShare = () => {
  const [role, setRole] = useState({id: ''})

  useEffect(() => {
    const url = window.location.href
    const urlParams = new URLSearchParams(url.split('?')[1])
    const r = urlParams.get('role')
    characters.filter((c) => {
      if ( c.cname == r ) {
        setRole(c)
      }
    })
  }, []);
  const handleFB = () => {
    // @ts-ignore
    FB.ui({
      display: 'popup',
      method: 'share',
      href: `https://3kdfantasythquiz.gamemorefun.com/${role.id}`,
    }, function(response: { error_code: any; completionGesture: string; }){
      if (response && !response.error_code) {
        if (typeof response != 'undefined'){
          if(response.completionGesture !== 'cancel'){
            window.location.href = 'https://3kdfantasythquiz.gamemorefun.com/#/result'
          }
        }
      } else {
        console.log(response)
      }
    });
  }

  return (
    <>
      <div id="fb-btn" className="button-fb" onClick={handleFB}></div>
    </>
  )
}

