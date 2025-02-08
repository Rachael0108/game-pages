import { isPC } from '@/mb/utils/tools.ts'
import React, { useEffect, useState } from 'react'
import Mobile from '@/mb/Mobile.tsx'
import Desktop from '@/pc/Desktop.tsx'
import FacebookBall from '@/pc/components/FacebookBall.tsx'
import { useSize } from 'ahooks';
import './assets/css/facebookBall.scss'
import './assets/css/App.scss'
import '../../common/reset.css';

function App() {
  const [ isDesktop, setIsDesktop ] = useState(undefined)
  const size = useSize(document.body);

  useEffect(() => {
    setIsDesktop(isPC())
  }, [ size ]);

  if ( isDesktop === undefined ) {
    return <div>...</div>
  }
  return (
    <>
      {isDesktop ? <Desktop/> : <Mobile/>}
      <FacebookBall/>
    </>
  )
}

export default App
