import React, { useState, useEffect } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, picture, dob, text } = people[index]

  const nextPerson = () => {
    setIndex((prevState) => {
      let newIndex = prevState + 1
      if (newIndex >= people.length) {
        return 0
      } else {
        return newIndex
      }
    })
  }
  const prevPerson = () => {
    setIndex((prevState) => {
      let newIndex = prevState - 1
      if (newIndex <= 0) {
        return people.length - 1
      } else {
        return newIndex
      }
    })
  }

  return (
    <div style={{ display: 'flex', width: '100%', margin: '0 auto' }}>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <article className='review'>
        <div
          style={{
            background: 'hsl(205, 78%, 60%)',
            width: '20px',
            color: 'white',
            padding: '20px',
            display: 'flex',
            margin: '0',
          }}
        >
          {index}
        </div>
        <div className='img-container'>
          <img src={picture.large} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight></FaQuoteRight>
          </span>
        </div>
        <h4>{name.title}</h4>
        <h3 className='author'>
          {name.first} {name.last}
        </h3>
        <p className='job'>
          {dob.date} - {dob.age}
        </p>
        <p className='info'>{text}</p>

        <button className='random-btn'>Random</button>
      </article>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button>
    </div>
  )
}

export default Review
