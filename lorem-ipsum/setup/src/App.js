import React, { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(count)
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
      <article>
        {text.map((paragraph) => {
          return <p>{paragraph}</p>
        })}
      </article>
    </section>
  )
}

export default App
