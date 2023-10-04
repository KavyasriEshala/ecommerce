import React from 'react'
import Navbar from './Navbar'
import Reactab from './img1.jpg'
import Reactbc from './img2.jpg'
import Reactcd from './img3.jpg'
import Reactde from './img4.jpg'
import Reactef from './img5.png'
// import Reactimg6 from './img6.jpeg'
import Reactimg7 from './img7.jpeg'
import Reactimg8 from './img8.jpeg'
import Reactimg9 from './img9.jpeg'
import Reactimg10 from './img10.jpeg'
import Reactimg11 from './img11.jpeg'
import Reactimg12 from './img12.webp'
import Reactimg13 from './img14.jpeg'
import {FcRating} from 'react-icons/fc'
const list = [
  {
    img:'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'nature',
    paragraph:'nature is a .......',
    price:3000
  },
  {
    img:'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'nature',
    paragraph:'nature is a .......',
    price:3000
  },
  {
    img:'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'nature',
    paragraph:'nature is a .......',
    price:3000
  },
  {
    img:'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'nature',
    paragraph:'nature is a .......',
    price:3000
  },
  {
    img:'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'nature',
    paragraph:'nature is a .......',
    price:3000
  },
  {
    img:'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'nature',
    paragraph:'nature is a .......',
    price:3000
  },
  {
    img:'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title:'nature',
    paragraph:'nature is a .......',
    price:3000
  },
]


function Home() {
  return (
    <div>
      <Navbar />
      <div className='img2'>
        <div className='list'>
          <h1><b>Hotel, car & experiences</b></h1>
          <p>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</p>
          <button className='btnn'>Start Your Search</button>
        </div>
        <div>
          <img src='https://chisfis-template.vercel.app/static/media/hero-right.ee78c0ffae92062cbe4e.png' className='img' alt='img' />


        </div>
      </div>
      <div>
        <h1 className='head'>Heading of sections</h1>
        <h3 className='head2'>Descriptions for sections</h3>

        <div className='blocks'>
          <div>
            <img src={Reactab} alt='img' className='coll' />
            <h3>Newyork</h3>
            <span>"288,366"properties</span>
          </div>
          <div>
            <img src={Reactbc} alt='img' className='coll' />
            <h3>Singapore</h3>
            <span>"288,366"properties</span>
          </div>
          <div>
            <img src={Reactcd} alt='img' className='coll' />
            <h3>Paris</h3>
            <span>"288,366"properties</span>
          </div>
          <div>
            <img src={Reactde} alt='img' className='coll' />
            <h3>London</h3>
            <span>"288,366"properties</span>
          </div>
        </div>
      </div>

      <div className='block3'>
        <div>
          <img src={Reactef} alt='img' className='colll' />
        </div>
        <div>
          <span className='hh1'>BENNEFITS</span>
          <h2 className='hh2'>Happening cities</h2>
          <ul className='block4'>
            <li className='list2'>
              <span className='d-flex li2'>Advertising</span>
              <span className='d-flex'><b>Cost-effective advertising</b></span>
              <span className='list5'>With a free listing, you can advertise your rental with no upfront costs</span>
            </li>
            <li className='list3'>
              <span className='d-flex li3'>Exposure</span>
              <span className='d-flex'><b>Reach millions with Chisfis</b></span>
              <span className='list5'>Millions of people are searching for unique places to stay around the world</span>
            </li>
            <li className='list4'>
              <span className='d-flex li4'>Secure</span>
              <span className='d-flex'><b>Secure and simple</b></span>
              <span className='list5'>A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</span>

            </li>
          </ul>
        </div>
      </div>
      <div>
   <ul className='p-0 d-flex row'>
    {list.map((obj) => {
      return(
        <li className='col-xl-4'>
          <img  className='w-100' src={obj.img} alt='img'/>
          <h1>{obj.title}</h1>
          <div>
            <FcRating/>
            <p>{obj.price}</p>
          </div>
        </li>
      )
    })}
   </ul>
      </div>
      <div>
        <h1 className='head2'><b>How it work</b></h1>
        <span className='head3'>Keep calm & travel on</span>

        <div className=' col-xl-4 sum'>
          <div className='summer'>
            <img src='https://chisfis-template.vercel.app/static/media/HIW1.bbef046fd6951afd08a7.png' alt='img' className='game'/>
            <div className='col-xl-12'>
              <h3>Book & relax</h3>
              <span>Let each trip be an inspirational journey, each room a peaceful space</span>
            </div>
          </div>
          <div className='summer'>
            <img src='https://chisfis-template.vercel.app/static/media/HIW2.f68577684c76e764a351.png' alt='img' className='game'/>
            <div className='col-xl-12'>
              <h3>Smart checklist</h3>
              <span>Let each trip be an inspirational journey, each room a peaceful space</span>
            </div>
          </div>
          <div className='summer'>
            <img src='https://chisfis-template.vercel.app/static/media/HIW3.b650d652a9db697619b9.png' alt='img' className='game'/>
            <div>
            <h3>Save more</h3>
            <span>Let each trip be an inspirational journey, each room a peaceful space
              Suggestions for discovery</span>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
