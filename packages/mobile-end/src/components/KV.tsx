import { useEffect } from 'react'
import '@/assets/css/kv.scss'
import Role from '@/assets/img/kv/kv-role.png'
import Title from '@/assets/img/kv/test-title.png'
import subtitle from '@/assets/img/kv/test-subtitle.png'

export default KV;

function KV() {

  useEffect(() => {
    // handleEvent('pv')
  }, []);

  return (
    <div id='kv'>
      <img alt="" src={Title} id="page-title"/>
      <img alt="" src={subtitle} id="page-subtitle"/>
      <img id="kv-role" alt="" src={Role}/>
    </div>
  )
}
