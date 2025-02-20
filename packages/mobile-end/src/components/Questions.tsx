import '../assets/css/questions.scss'
import { QuestionList } from '@/utils/character.ts'
import QuestionBg from '@/assets/img/test/q-bg.png'
import OptionBG from '@/assets/img/test/option-bg.png'
import OptionBGUn from '@/assets/img/test/option-un.png'
import { useEffect, useState } from 'react'
import { Fade } from 'react-awesome-reveal'

export { Questions };

const Questions = () => {
  const [ result, setResult ] = useState([ -1, -1, -1, -1 ]);
  const optionPrefix = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

  useEffect(() => {

    return () => {
      localStorage.setItem('result', '[-1,-1,-1,-1]')
    }
  })

  const handleChoose = (index: number, _index: number) => {
    // result[index] = _index
    setResult([ ...result.slice(0, index), _index, ...result.slice(index + 1) ])
  }
  useEffect(() => {
    localStorage.setItem('result', JSON.stringify(result))
  }, [ result ]);


  return (
    <div id="questions-wrapper">
      {
        QuestionList.map((item, index) => {
          return (
            <Fade cascade triggerOnce key={item.title}>
              <div className="questions">
                <img alt="" src={item.bg} className="q-bg"/>
                <div key={index} className="question-item">
                  <div className="title">
                    <img alt="" src={QuestionBg} className="title-img"/>
                    <p className="title-text">{item.title}</p>
                  </div>
                  <div className="question">{item.question}</div>
                  <div className="options">
                    {
                      item.options.map((option, _index) => {
                        return (
                          <div key={_index} onClick={() => handleChoose(index, _index)}>
                            {
                              result[index] === _index ? <img alt="" src={OptionBG} className="options-bg"/> :
                                <img alt="" src={OptionBGUn} className="options-bg options-bg-un"/>
                            }
                            <p>
                              <span id="option-prefix" className="option-prefix">{optionPrefix[_index]}</span>
                              <span className="option">{option}</span>
                            </p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </Fade>
          )
        })
      }
    </div>
  )
}
