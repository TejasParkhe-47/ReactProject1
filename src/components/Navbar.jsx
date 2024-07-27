import React from 'react'
import logo from '../assets/logomain.png'
import vector from '../assets/vector.svg'
import search from '../assets/search.svg'
import bag from '../assets/bag.svg'
import acc from '../assets/acc.svg'
import location from '../assets/location.svg'
import line from '../assets/line.svg'


const Navbar = () => {

    return (
        <div className='w-full  flex items-center justify-between'>
            <div className='flex items-center gap-20' > 
                <img className='img1 w-[153px] h-[130px]' src={logo} alt="" />
                <div className='flex' >
                    <img src={location} alt="" className='w-[42px] h-[35px]' />
                    <img className='mt-8' src={line} alt="" />
                </div></div>
            <div className="items flex gap-4 items-center mr-5" >
                <img src={vector} alt="" className='w-[42px] h-[35px]' />
                <img src={search} alt="" className='w-[42px] h-[35px]' />
                <img src={bag} alt="" className='w-[42px] h-[35px]' />
                <img src={acc} alt="" className='w-[42px] h-[35px]' />


            </div>
        </div>

    )

}

export default Navbar
