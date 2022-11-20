import React, { useState } from 'react'
import { register } from "../Functions"

function CreateAccount({setRegister}) {
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")

  return (
    <div className='w-full h-full flex flex-col gap-7 items-center'>

      {/* Right */}
      <h1 className='font-[600] text-[32px] w-full'>Customer Register</h1>
      <div className="flex flex-row items-center justify-center pt-10 gap-10 w-full h-auto">
        <div className="w-[564px] h-[325px] bg-[#F5F7FF] flex flex-col justify-center items-center">
          {/* Register Form */}          
          <form onSubmit={(e) => {
            e.preventDefault()
            register(email, pass)
          }} className="w-[75%] h-[85%] flex flex-col items-center">
            <h1 className='w-full font-[600] text-[18px]'>Register User</h1>
            <label htmlFor="email" className='w-full pt-4'>
             <h1 className='font-[600] text-[13px]'>Email <span className='text-[#C94D3F]'>*</span></h1>
             <input value={email} onChange={(e) => setemail(e.target.value)} required id='email' type="email" placeholder='abc@abc.com' className='pl-5 rounded-[4px] border border-[#A2A6B0] text-[#000] outline-none placeholder:text-[#A2A6B0] w-full h-[50px] font-light text-[14px]'/>
            </label>

            <label htmlFor="pass" className='w-full pt-3'>
             <h1 className='font-[600] text-[13px]'>Password <span className='text-[#C94D3F]'>*</span></h1>
             <input value={pass} onChange={(e) => setpass(e.target.value)} required id='pass' type="password" placeholder='***' className='pl-5 rounded-[4px] border border-[#A2A6B0] text-[#000] outline-none placeholder:text-[#A2A6B0] w-full h-[50px] font-light text-[14px]'/>
            </label>

            <div className="w-full flex-row items-center justify-center pt-5">
              <button type='submit' className='bg-[#0156FF] text-white w-[151px] mr-5 h-[50px] text-[14px] font-[600] rounded-full'>Register</button>
            </div>
          </form>
        </div>

        {/* Left */}
        <div className="w-[564px] h-[325px] bg-[#F5F7FF] flex flex-col items-center justify-center">
          <div className="w-[75%] h-[85%] flex flex-col items-center justify-center">
            <h1 className='font-[600] text-[18px]'>New Customer?</h1>
            <h1 className='font-[300] text-[14px] pt-3'>If you have an account</h1>
            <button onClick={() => setRegister(false)} className='w-[208px] h-[50px] rounded-full bg-[#0156FF] mt-5 font-[600] text-[14px] text-white'>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount