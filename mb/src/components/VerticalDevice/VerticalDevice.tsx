import React, { useEffect } from 'react'
import VerticalDeviceCSS from './verticalDevice.module.scss'
import { useScrollLock } from '@/mb/hooks/useScrollLock.ts'

export {VerticalDevice}

const VerticalDevice = () => {
  const { addScrollLock, removeScrollLock } = useScrollLock()

  //判断是否是横屏
  const isLandscape = () => {
    return window.innerWidth > window.innerHeight
  }

  useEffect(() => {
    if(isLandscape()) {
      addScrollLock()
    } else {
      removeScrollLock()
    }
  }, [window.innerWidth]);
  return (
    <div className={VerticalDeviceCSS['vertical-device-warning']}>
      <svg className={VerticalDeviceCSS['vertical-device-icon']} t="1733198272359" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg" p-id="7419" width="200" height="200">
        <path
          d="M926.5152 877.7216h-390.144a97.4848 97.4848 0 0 1-97.536-97.4848V97.4848C438.8352 43.6736 482.5088 0 536.32 0h390.0928c53.8112 0 97.4848 43.6736 97.4848 97.4848v682.752a97.3312 97.3312 0 0 1-97.3824 97.4848z m24.32-755.7632a48.7936 48.7936 0 0 0-48.7936-48.7936h-341.248a48.7936 48.7936 0 0 0-48.7936 48.7936v463.2064h438.8352V121.9584z m0 536.32H512v97.4848c0 26.9824 21.8112 48.7936 48.7936 48.7936h341.4016a48.7936 48.7936 0 0 0 48.7936-48.7936v-97.4848h-0.1536z m-219.392 121.9584a48.7936 48.7936 0 1 1-0.0512-97.536 48.7936 48.7936 0 0 1 0 97.536zM265.6256 147.9168a463.8208 463.8208 0 0 0-94.976 71.5264C105.9328 284.1088 63.1808 370.176 63.1808 370.176a36.608 36.608 0 0 1-51.712-51.7632s45.568-82.944 110.336-147.7632c36.0448-36.0448 77.6192-66.048 107.6736-85.8624L194.9696 24.3712h195.072l-83.5072 195.072-40.96-71.5776zM97.4848 438.784h243.7632a36.5568 36.5568 0 1 1 0 73.1648H121.856a48.7936 48.7936 0 0 0-48.7936 48.7936v341.4016c0 26.9312 21.8624 48.7936 48.7936 48.7936h658.3296a24.3712 24.3712 0 0 0 24.32-24.3712 36.5568 36.5568 0 1 1 73.1648 0 97.4848 97.4848 0 0 1-97.4848 97.4848H97.4848A97.4848 97.4848 0 0 1 0 926.6176v-390.2976c0-53.76 43.6736-97.4848 97.4848-97.4848z"
          fill="#ffffff" p-id="7420"></path>
      </svg>
      <p>กรุณาใช้โหมดแนวตั้งเมื่อเข้าเว็บไซต์</p>
    </div>
  )
}
