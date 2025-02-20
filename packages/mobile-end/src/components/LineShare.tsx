export { LineShare };

import { useEffect, useState } from 'react'
import { getRoleFromUrl } from '../utils/character.ts'

const LineShare = () => {
  const [shareUrl, setLineUrl] = useState('')
  const [role, setRole] = useState({
    id: ''
  })
  useEffect(() => {
    const r: { id: string } = getRoleFromUrl()
    setRole(r)
  }, []);

  useEffect(() => {
    if(role.id) {
      setLineUrl(`https://3kdfantasythquiz.gamemorefun.com/${role.id}`)
    }
  }, [role]);
  return (
    <>
      <div id="line-btn" className="button-lineme" onClick={() => {
        window.open('https://social-plugins.line.me/lineit/share?url=' + shareUrl, '_blank')
      }}>
      </div>
    </>
  )
}
