import React, { useState, useEffect } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, picture, dob, text } = people[index]

  const nextPerson = () => {
    setIndex((prevState) => {
      let newIndex = prevState + 1
      return checkIndex(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((prevState) => {
      let newIndex = prevState - 1
      return checkIndex(newIndex)
    })
  }

  const checkIndex = (number) => {
    console.log(number)
    if (number >= people.length) {
      return 0
    } else if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const randomNumber = () => {
    let random = Math.floor(Math.random() * people.length)
    if (random === index) {
      random = index + 1
    }
    setIndex(random)
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        margin: '0 auto',
      }}
    >
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <article style={{ position: 'relative' }} className='review'>
        <div
          style={{
            background: 'hsl(205, 78%, 60%)',
            color: 'white',
            position: 'absolute',
            height: '40px',
            width: '40px',
            margin: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '1.5%',
            left: '90%',
            borderRadius: '200px',
          }}
        >
          {index + 1}
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
        <p style={{ fontWeight: '600', fontSize: '1rem' }} className='job'>
          {dob.date} - {dob.age}
        </p>
        <p className='info'>{text}</p>
        <button className='random-btn' onClick={randomNumber}>
          Random
        </button>
      </article>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button>
    </div>
  )
}

export default Review
