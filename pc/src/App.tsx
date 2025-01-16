import './assets/css/App.scss'
import '../../common/reset.css';
import { isPC } from './utils/tools'
import React, { useEffect, useState } from 'react'
import Mobile from '../../mb/src/Mobile.tsx'
import Desktop from '@/pc/Desktop.tsx'
import { useSize } from 'ahooks';

function App() {
  const [ isPc, setIsPc ] = useState(null)
  const size = useSize(document.body);

  useEffect(() => {
    setIsPc(isPC())
  }, [ size ]);

  if(isPc === null) {
    return
  }
  if ( isPc ) {
    return (
      <Desktop/>
    )
  } else {
    return (
      <>
        <Mobile/>
      </>
    )
  }

}

export default App
