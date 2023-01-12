import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section onMouseOut={closeSubmenu} className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea qui
            aperiam sequi eum optio voluptatum necessitatibus doloremque quod
            non corrupti debitis harum dolores, ad nihil sint eligendi ipsa
            voluptas quo modi fuga eos exercitationem veniam ducimus! A odio
            possimus nisi blanditiis eaque praesentium labore voluptatum
            similique. Minima recusandae iure magni!
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
