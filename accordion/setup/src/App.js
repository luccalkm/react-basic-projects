import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  return (
    <main>
      <div className='container'>
        <h3>Question & Answers about login</h3>
        <section className='info'>
          {data.map((questionData) => {
            console.log(questionData)
            return <SingleQuestion key={questionData.id} data={questionData} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
