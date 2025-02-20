export { Modal }

import { useScrollLock } from '@/hooks/useScrollLock.ts'
import { forwardRef, useImperativeHandle, useState } from 'react';
import './modal.scss';

const Modal = forwardRef((props: {children: JSX.Element}, ref) => {
  const { addScrollLock, removeScrollLock } = useScrollLock()
  const [ visible, setVisible ] = useState(false);

  // 把子组件的方法暴露给父组件，用于控制Modal的显示和隐藏
  useImperativeHandle(ref, () => ({
    open: () => {
      setVisible(true)
      addScrollLock()
    },
    close: () => {
      setVisible(false)
      removeScrollLock()
    }
  }));


  return (
    visible ?
      <div id="popup-wrapper">
        <div className="popup-mask" id="mask"></div>
        <div className="popup_inner">
          {props?.children}
        </div>
      </div>
      : null
  )
})

