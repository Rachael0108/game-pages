
export { Result }

import { useEffect, useState } from 'react'
import Title from '@/assets/img/result/result-title.png'
import ResultBg from '@/assets/img/result/result-bg.jpg'
import NameBg from '@/assets/img/result/name-bg.png'
import { characters } from '../utils/character.ts'

import { FBShare } from '../components/FbShare.tsx'
import { LineShare } from '../components/LineShare.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { Slide, Zoom } from 'react-awesome-reveal'
import '../assets/css/result.scss'

const Result = () => {
  const navigate = useNavigate()
  const [ role, setRole ] = useState({
    img: '',
    name: '',
    personality: ''
  })
  useEffect(() => {
    const r = JSON.parse(localStorage.getItem('roleInfo') || '[]')
    if ( r ) {
      setRole(r)
    } else {
      navigate('/')
    }
    const url = window.location.href
    const urlParams = new URLSearchParams(url.split('?')[1])
    const role = urlParams.get('role')
    characters.filter((c) => {
      if ( c.cname == role ) {
        setRole(c)
      }
    })
  }, [navigate]);

  return (
    <div className="result-wrapper">
      <img alt="" src={ResultBg} className="result-bg"/>
      <img alt="" src={Title} className="result-title"/>
      <Zoom>
        <div className="role-info">
          <img alt="" src={role.img} className="role-img"/>
          <img alt="" src={NameBg} className="name-bg"/>
          <p className="name">{role.name}</p>
          <p id="personality">{role.personality}</p>
        </div>
      </Zoom>
      <Slide triggerOnce direction={'up'}>
      <div className="button-group">
        <div className="button-top">
          <FBShare/>
          <LineShare/>
        </div>
        <div className="button-bottom">
        <Link to={'/test-role'}>
              <div className="button-again"></div>
            </Link>
            <Link to={'/'}>
              <div className="button-other"></div>
            </Link>
          </div>
        </div>
      </Slide>
    </div>
  )
}
