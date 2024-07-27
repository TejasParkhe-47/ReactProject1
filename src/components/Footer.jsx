import React from 'react'
import logo from '../assets/logomain.png'
import facebook from '../assets/icons/facebook.svg'
import linkedin from '../assets/icons/linkedIn.svg'
import youtube from '../assets/icons/youtube.svg'
import insta from '../assets/icons/instagram.svg'

const Footer = () => {
  return (
    <div className='flex justify-between mx-40 my-20'>
      <div className="logo">
            <img src={logo} alt="" width={134} height={108} />
            <div className="icons flex">
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
                <img src={youtube} alt="" />
                <img src={insta} alt="" />
            </div>
      </div>
      <div className="navigate flex gap-24">
            <div className='flex flex-col'>
                <h3 className='my-2 font-bold'>SHOP</h3>
                <p className='my-2'>Men</p>
                <p className='my-2'>Women</p>
                <p className='my-2'>Kids</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='my-2 font-bold'>COMPANY INFO</h3>
                <p className='my-2'>About us</p>
                <p className='my-2'>Locations</p>
                <p className='my-2'>Store</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='my-2 font-bold'>QUICK LINKS</h3>
                <p className='my-2'>Customer Service</p>
                <p className='my-2'>Legal & Privacy</p>
                <p className='my-2'>Contact</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
