import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState([])

  const generateRandomColor = () => {
    setColor('#' + Math.random().toString(16).substr(-6))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
            placeholder='#f15025'
          />
          <div
            style={{ width: '300px', margin: '0px 20px' }}
            className='button-div'
          >
            <button
              style={{ marginRight: '20px' }}
              type='submit'
              className='btn'
            >
              Submit
            </button>
            <button
              type='submit'
              style={{
                background: 'transparent',
                color: `black`,
                border: `2px solid ${color}`,
              }}
              className='btn'
              onClick={generateRandomColor}
            >
              Random Color
            </button>
          </div>
        </form>
        {error && (
          <h3
            style={{
              marginLeft: '2rem',
              padding: '1rem',
              color: '#ef4f6f',
              border: '2px solid #ef4f6f',
              textAlign: 'center',
              borderRadius: '20px',
            }}
          >
            Please, insert a color code!
          </h3>
        )}
      </section>

      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} index={index} {...color} />
        })}
      </section>
    </>
  )
}

export default App
