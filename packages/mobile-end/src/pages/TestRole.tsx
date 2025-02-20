export { TestRole }

import '@/assets/css/testRole.scss'
import BG from '@/assets/img/BG.jpg'
import SubmitBtn from '@/assets/img/test/submit-btn.png'
import KV from '../components/KV.tsx'
import { Questions } from '../components/Questions.tsx'
import {Modal} from '@/components/Modal/Modal.tsx'
import { useModal } from '@/hooks/useModal.tsx'
import { saveResult, clearResult } from '../utils/character.ts'
import { useEffect, useRef, useState } from 'react'

const TestRole = () => {
  const warningRef = useRef(null)
  const [showWaring, setShowWarning] = useState(false)
  const {handleOpenModal, handleCloseModal} = useModal(warningRef)

  useEffect(() => {

    return () => {
      clearResult()
    }
  }, []);

  const handleSubmit = () => {
    const result = JSON.parse(localStorage.getItem('result') || '[]')
    if(result && result.length) {
      const r = result.some((r: number) => r === -1)
      if(r) {
        setShowWarning(true)
        handleOpenModal()
      } else {
        saveResult()
      }
    }
  }
  return (
    <>
      {
        <div style={{opacity: showWaring ? 1 : 0}}>
        <Modal ref={warningRef}>
          <div className="warning-wrapper">
            <p className="warning-text">กรุณาตอบคำถามให้ครบก่อนค่ะ</p>
            <button className="warning-button" onClick={() => handleCloseModal()}>รับทราบ</button>
          </div>
        </Modal>
        </div>
      }
      <img alt="" src={BG} className="page-bg"/>
      <div className="test-wrapper">
        <KV/>
        <Questions/>
        <img className="submit-btn" alt="" src={SubmitBtn} onClick={handleSubmit}/>
      </div>
    </>
  )
}

