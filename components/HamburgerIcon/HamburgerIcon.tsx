import * as React from 'react'


const HamburgerIcon: React.FC = () => {
  return (
    <button 
      id='barMenuBtn'
      className='hamburger hamburger--collapse'
      type='button'
    >
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  )
}

export default HamburgerIcon