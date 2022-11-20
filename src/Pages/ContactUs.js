import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function ContactUs() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <Navbar/>
      <div className="w-[1400px] h-auto py-5 flex flex-col items-center">
        <h1 className='font-[400] text-[12px]'>Home  <span className='text-[#0156FF] font-[300]'>›</span>  Contact Us</h1>
        <h1 className='font-[600] text-[32px] py-2'>Contact Us</h1>
        <div className="w-auto h-full flex items-start justify-between">
        <form className="w-[950px] h-auto flex flex-row flex-wrap ">
          <h1 className='font-[300] w-full text-[16px] text-center'>We love hearing from you, our Shop customers.<br/>Please contact us and we will make sure to get back to you as soon as we possibly can.</h1>
          <label htmlFor="Name" className='flex flex-col font-semibold pr-12 text-[13px] py-2'>
          <h1>Your Name <span className='text-[#C94D3F]'>*</span></h1>
          <input required id='Name' type="text" placeholder='Your Name' className='w-[449px] h-[50px] border-[1px] border-[#A2A6B0] rounded-[4px] font-[300] text-[14px] outline-none  text-black pl-3'/>
          </label>
          <label htmlFor="Email" className='flex flex-col font-semibold text-[13px] py-2'>
          <h1>Your Email <span className='text-[#C94D3F]'>*</span></h1>
          <input type="Email" required id='Email' placeholder='Your Email' className='w-[449px] h-[50px] border-[1px] border-[#A2A6B0] rounded-[4px] font-[300] text-[14px] outline-none  text-black pl-3'/>
          </label>
          <label htmlFor="Number" className='flex flex-col font-semibold text-[13px] py-2'>
          <h1>Your Phone </h1>
          <input type="tel" id="Number" placeholder='Your Phone' className='w-[449px] h-[50px] border-[1px] border-[#A2A6B0] rounded-[4px] font-[300] text-[14px] outline-none  text-black pl-3'/>
          </label>
          <label htmlFor="mind" className='flex flex-col font-semibold w-full h-auto text-[13px] py-2'>
          <h1>What’s on your mind? * <span className='text-[#C94D3F]'>*</span></h1>
          <textarea type="text" id='mind' required placeholder='Jot us a note and we’ll get back to you as quickly as possible' className='w-full resize-none pt-2 h-[236px] text-start border-[1px] border-[#A2A6B0] rounded-[4px] font-[300] text-[14px] outline-none  text-black pl-3'/>
          </label>
          <button type='submit' className='w-[150px] h-[50px] rounded-full bg-[#0156FF] text-white font-semibold text-[14px] flex items-center justify-center mr-3'>Submit</button>
        </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs