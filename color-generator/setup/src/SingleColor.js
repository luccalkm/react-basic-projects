import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false)
  const styleRgb = rgb.join(',')

  const hex = rgbToHex(...rgb)

  return (
    <article
      onClick={(e) => {
        setAlert(true)
        navigator.clipboard.writeText(hex)
      }}
      className={`color ${index > 10 && 'color-light'}`}
      style={{
        background: `rgb(${styleRgb})`,
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>Copied to clipboard!</p>}
    </article>
  )
}

export default SingleColor
