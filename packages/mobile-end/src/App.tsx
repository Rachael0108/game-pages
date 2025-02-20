import './assets/css/App.scss'
import '@/common/reset.css';
import { useEffect } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import { TestRole } from '@/pages/TestRole.tsx'
import { Result } from '@/pages/Result.tsx'
import { Home } from '@/pages/Home.tsx'
import { NotFound } from './components/NotFound.tsx'
import Layout from './layout/LayOut.tsx'
import { handleFBCallback } from '@/utils/tools.ts'

function App() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
    handleFBCallback()
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/test-role" element={<TestRole />} />
            <Route path="/result" element={<Result />} />
            <Route path='/*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
