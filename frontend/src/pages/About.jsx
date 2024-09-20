import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Rado was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea to provide a platform wher customer can easily discover, explore, and purchase a wide range of prodcts from the comfort of their homes.</p>
              <p>Since our inception, we've worked tirelessly to create a diverse selection of high-quality products that cater to every taste and preferences. From fashion and beauty to electronics and home essentials. we offer an extensive collection sourced from trusted brands and suppliers</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at Rado is to empower customers with choice, convenience, and confidence. we're dedicated to providing a seamless shopping experience that exceeds expectations from browsing and ordering to delievery and beyond.</p>
          </div>
      </div>

      <div className='text-3xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-xl'>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it mets our stringet quality standard</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-xl'>Convinience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-xl'>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About