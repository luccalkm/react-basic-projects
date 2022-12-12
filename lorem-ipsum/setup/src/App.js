import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    if (count <= 0) {
      amount = 1
    }
    if (amount > 8) {
      amount = 8
    }
    setText(data.slice(0, amount))
  }

  return (
    <section className='section-center'>
      <h3>Tired of Boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
      <article style={{ width: '100%', position: 'relative' }}>
        {text.map((paragraph, index) => {
          return (
            <>
              <h3
                style={{
                  position: 'absolute',
                  left: '-100px',
                }}
              >
                {index + 1}
              </h3>

              <p>
                {paragraph}
                <div
                  style={{
                    background: 'black',
                    margin: '40px auto',
                    width: '400px',
                    height: '2px',
                  }}
                ></div>
              </p>
            </>
          )
        })}
      </article>
    </section>
  )
}

export default App
