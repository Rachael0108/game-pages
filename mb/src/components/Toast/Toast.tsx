import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import ToastCSS from './toast.module.scss'
import { createPortal } from 'react-dom'

const Toast = forwardRef((props: { text?: string }, ref) => {
  const ToastRef = useRef(null)
  const [ showToast, setShowToast ] = useState(false)
  const [ text, setText ] = useState('')
  const [ fadeIn, setFadeIn ] = useState(false)

  useImperativeHandle(ref, () => ({
    show: (text) => {
      show(text)
    }
  }))
  const show = (text) => {
    if ( showToast ) return;
    setText(text)
    setFadeIn(true)
    setShowToast(true)
  }
  useEffect(() => {
    if ( !showToast ) return;
    const id = setTimeout(() => {
      setFadeIn(false)
    }, 1000)
    return () => clearTimeout(id)
  }, [ showToast ]);

  useEffect(() => {
    if ( fadeIn || !showToast ) return;
    const id = setTimeout(() => {
      setShowToast(false);
    }, 1000);
    return () => clearTimeout(id);
  }, [ fadeIn, showToast ])

  useEffect(() => {
    if ( !(text in props) ) return
    if ( props.text ) {
      setText(props.text)
      setFadeIn(true)
      setShowToast(true)
    } else if ( 'text' in props && props.text === null ) {
      setShowToast(false)
      setFadeIn(false)
    }
  }, [props, text])

  return (
    <>
      {
        createPortal(
          showToast && <div ref={ToastRef}
                            id="toast"
                            className={`${ToastCSS.Ytoast} ${fadeIn ? ToastCSS.fadeIn : ToastCSS.fadeOut}`}
          >
            <p style={{ color: 'white' }}>{text}</p>
          </div>,
        document.body
        )
      }
    </>
  )
})
export default Toast;
