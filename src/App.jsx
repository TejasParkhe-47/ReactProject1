import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import img2 from './assets/img2.svg'
import left from './assets/left.svg'
import right from './assets/right.svg'
import i1 from './assets/i1.png'
import kurti from './assets/kurti.png'
import casual from './assets/casual.png'
import saree from './assets/saree.jpeg'
import shorts from './assets/shorts.jpeg'

import first from './assets/10.png'
import calvin from './assets/calvinKlein.png'
import ler from './assets/ler.jpeg'
import vimy from './assets/vimy.jpeg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Navbar />
      <div className='flex justify-center h-[552px] m-5'>
        <img src={img2} alt="" />
      </div>
      <div className='flex justify-between gap-[30rem] mx-40'>
        <h2 className='font-bold text-xl'>Choose that you want to wear</h2>
        <div className="arrow flex gap-1">
          <img className='bg-[#D9D9D9] rounded-full px-[14px] py-[12px]' src={left} alt="" />
          <img className='bg-[#D9D9D9] rounded-full px-[14px] py-[12px]' src={right} alt="" />
        </div>
      </div>
      <div className="flex justify-center gap-24  w-[80%] ml-32 overflow-x-auto">
        <div className="i1 flex flex-col items-center">
          <img className='rounded-full' src={i1} alt="" width={184} height={174} />
          <h3 className='text-xl font-bold'>Shirts</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <img className='rounded-full' src={kurti} alt="" width={184} height={174} />
          <h3 className='text-xl font-bold'>Kurti</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <img className='rounded-full' src={casual} alt="" width={184} height={174} />
          <h3 className='text-xl font-bold'>Casual's</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <img className='rounded-full' src={saree} alt="" width={184} height={174} />
          <h3 className='text-xl font-bold'>Saree</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <img className='rounded-full' src={shorts} alt="" width={184} height={174} />
          <h3 className='text-xl font-bold'>Shorts</h3>
        </div>
        
        
        
      </div>


      <div className='flex justify-between gap-[30rem] mx-40'>
        <h2 className='font-bold text-xl'>Brands</h2>
        <div className="arrow flex gap-1">
          <img className='bg-[#D9D9D9] rounded-full px-[14px] py-[12px]' src={left} alt="" />
          <img className='bg-[#D9D9D9] rounded-full px-[14px] py-[12px]' src={right} alt="" />
        </div>
      </div>

      <div className="categories flex justify-evenly m-8">
        <div className="i1 flex flex-col items-center">
          <img className='rounded-full border border-black' src={first} alt="" width={184} height={174} />
          <h3 className='text-xl font-bold'>Shirts</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <img className='rounded-full border border-black' src={calvin} alt="" width={184} height={174} />
          <h3 className='text-xl font-bold'>Kurti</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <img className='rounded-full border border-black' src={ler} alt="" width={184} height={174} />
          <h3 className='text-xl font-bold'>Casual's</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <img className='rounded-full border border-black' src={vimy} alt="" width={184} height={174} />
          <h3 className='text-xl font-bold'>Saree</h3>
        </div>
        <div className="i1 flex flex-col items-center">
          <img className='rounded-full border border-black' src={calvin} alt="" width={184} height={174} />
          <h3 className='text-xl font-bold'>Shorts</h3>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
