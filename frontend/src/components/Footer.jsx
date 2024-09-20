import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr__1fr] gap-14 my-5 mt-10 text-sm'>

            <div>
                <img src={assets.rado} className='-mb-4 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi a placeat, sapiente sint et aliquid corporis dicta sunt aut odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. At, illum.
                </p>
            </div>
            <div>
               <p className='text-xl font-medium mb-5 mt-10'>COMPANY</p>
               <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul> 
            </div>
            <div>
                <p className='text-xl font-medium mb-5 mt-10'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+234-803-625-9826</li>
                    <li>contact@radoclothing.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024 &copy; @rado.com - All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer