import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import './index.css'

const Question = ({ data }) => {
  const [show, setShow] = useState(false)

  const { info, title } = data

  const expandText = () => {
    setShow(!show)
  }

  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={expandText}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* Optimization */}
      {show && <p>{info}</p>}
    </div>
  )
}

export default Question
