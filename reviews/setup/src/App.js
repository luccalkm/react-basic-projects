import React, { useEffect } from 'react'
import Review from './Review'
import { FaGithubSquare } from 'react-icons/fa'

function App() {
  return (
    <section className='container'>
      <div className='title'>
        <h2>Our Reviews</h2>
        <div className='underline' />
      </div>
      <Review />
    </section>
  )
}

export default App
