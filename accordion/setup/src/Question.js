import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
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
      {show ? <p>{info}</p> : <p></p>}
    </div>
  )
}

export default Question
