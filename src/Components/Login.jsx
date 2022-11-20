import React, { useState } from 'react'
import { login, reset} from "../Functions"

function Login({setRegister, username}) {
  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [respass, setreset] = useState(false)

  return (
    <div className='w-full h-full flex flex-col gap-7 items-center'>
      {respass ? (
        <>
        {/* Right */}
      <h1 className='font-[600] text-[32px] w-full'>Reset Password</h1>
      <div className="flex flex-row items-center justify-center pt-10 gap-10 w-full h-auto">
        <div className="w-[564px] h-[240px] bg-[#F5F7FF] flex flex-col justify-center items-center">
          {/* Login Form */}
          <form onSubmit={(e) => {
            e.preventDefault()
            reset(email)
          }} className="w-[75%] h-[85%] flex flex-col items-center">
            <h1 className='w-full font-[600] text-[18px]'>Reset Password</h1>

            <label htmlFor="email" className='w-full pt-4'>
             <h1 className='font-[600] text-[13px]'>Email <span className='text-[#C94D3F]'>*</span></h1>
             <input required value={email} onChange={(e) => setemail(e.target.value)} id='email' type="email" placeholder='abc@abc.com' className='pl-5 rounded-[4px] border border-[#A2A6B0] text-[#000] outline-none placeholder:text-[#A2A6B0] w-full h-[50px] font-light text-[14px]'/>
            </label>

            <div className="w-full flex-row items-center justify-center pt-7">
              <button type='submit' className='bg-[#0156FF] text-white w-[151px] mr-5 h-[50px] text-[14px] font-[600] rounded-full'>Send Mail</button>
            </div>
          </form>
        </div>
      </div>
        </>
      ):(
        <>
        {/* Right */}
      <h1 className='font-[600] text-[32px] w-full'>Customer Login</h1>
      <div className="flex flex-row items-center justify-center pt-10 gap-10 w-full h-auto">
        <div className="w-[564px] h-[415.46px] bg-[#F5F7FF] flex flex-col justify-center items-center">
          {/* Login Form */}
          <form onSubmit={(e) => {
            e.preventDefault()
            login(email, pass)
          }} className="w-[75%] h-[85%] flex flex-col items-center">
            <h1 className='w-full font-[600] text-[18px]'>Registered User</h1>
            <p className='w-full py-3 font-[300] text-[14px]'>If you have an account, sign in with your email address.</p>

            <label htmlFor="email" className='w-full pt-4'>
             <h1 className='font-[600] text-[13px]'>Email <span className='text-[#C94D3F]'>*</span></h1>
             <input required value={email} onChange={(e) => setemail(e.target.value)} id='email' type="email" placeholder='abc@abc.com' className='pl-5 rounded-[4px] border border-[#A2A6B0] text-[#000] outline-none placeholder:text-[#A2A6B0] w-full h-[50px] font-light text-[14px]'/>
            </label>

            <label htmlFor="pass" className='w-full pt-3'>
             <h1 className='font-[600] text-[13px]'>Password <span className='text-[#C94D3F]'>*</span></h1>
             <input required value={pass} onChange={(e) => setpass(e.target.value)} id='pass' type="password" placeholder='***' className='pl-5 rounded-[4px] border border-[#A2A6B0] text-[#000] outline-none placeholder:text-[#A2A6B0] w-full h-[50px] font-light text-[14px]'/>
            </label>

            <div className="w-full flex-row items-center justify-center pt-12">
              <button type='submit' className='bg-[#0156FF] text-white w-[151px] mr-5 h-[50px] text-[14px] font-[600] rounded-full'>Sign In</button>
              <button onClick={() => setreset(true)} className='text-[#0156FF] font-[400] text-[14px]'>Forgot Your Password?</button>
            </div>
          </form>
        </div>

        {/* Left */}
        <div className="w-[564px] h-[415.46px] bg-[#F5F7FF] flex flex-col items-center justify-center">
          <div className="w-[75%] h-[85%] flex flex-col items-start">
            <h1 className='font-[600] text-[18px]'>New Customer?</h1>
            <h1 className='font-[300] text-[14px] pt-3'>Creating an account has many benefits:</h1>
            <ul className='font-[300] text-[14px] pl-[18px] pt-5 list-disc'>
              <li>Check out faster</li>
              <li>Keep more than one address</li>
              <li>Track orders and more</li>
            </ul>
            <button onClick={() => setRegister(true)} className='w-[208px] h-[50px] rounded-full bg-[#0156FF] mt-7 font-[600] text-[14px] text-white'>Create An Account</button>
          </div>
        </div>
      </div>
        </>
      )}
    </div>
  )
}

export default Login