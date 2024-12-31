import React from 'react'
import Button from './Button.tsx';

const HeadStrip = () => {
  return (
    <div className='headstrip'>
      <img src="src/assets/green-gradient-background.jpg" alt="Background of the head strip." />
      <img src="src/assets/instrument-user-bckg01.jpg" alt="An image of an instrument user." />
      <img src="src/assets/instrument-user-bckg02.jpg" alt="An image of an instrument user." />
      <div>
        <img src="src/assets/exclamatory-fireworks.png" alt="Conspicuous image of fireworks." />
        <p>
            This Year's Bestsellers!
        </p>
      </div>
      <button>
        <Button className='buy_bestsellers' buttonContent='Buy Now ->'/>
      </button>
    </div>
  )
}

export default HeadStrip
