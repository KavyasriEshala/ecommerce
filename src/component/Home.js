import React from 'react'
import Navbar from './Navbar'
import Reactab from './img1.jpg'
import Reactbc from './img2.jpg'
import Reactcd from './img3.jpg'
import Reactde from './img4.jpg'



function Home() {
  return (
    <div>
      <Navbar/>
      <div className='img2'>
      <div className='list'>
      <h1><b>Hotel, car & experiences</b></h1>
        <p>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</p>
        <button className='btnn'>Start Your Search</button>
      </div>
      <div>
      <img src='https://chisfis-template.vercel.app/static/media/hero-right.ee78c0ffae92062cbe4e.png'className='img' alt='img'/>


      </div>
      </div>
      <div className='blocks'>
        <h1>Heading of sections</h1>
        <h3>Descriptions for sections</h3>
        <img src={Reactab} alt='img' className='coll'/>
        <img src={Reactbc} alt='img'className='coll'/>
        <img src={Reactcd} alt='img'className='coll'/>
        <img src={Reactde} alt='img'className='coll'/>
      </div>
      <div>
        
      </div>
      <div></div>
      </div>
  )
}

export default Home
