import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Login from '../Components/Login'
import CreateAccount from '../Components/CreateAccount'
import Container from "../Functions"

function Register() {
  const [reg, setregister] = useState(false)

  return (
    <div className='h-screen flex flex-col items-center'>
      <Container/>
      <Navbar />
      <div className="w-[75%] h-full flex flex-col pt-5">
        <h1 className='font-[400]'>Home  <span className='text-[#0156FF] font-[300]'>›</span>  {reg ? "Register":"Login"}</h1>
        {reg ? <CreateAccount setRegister={setregister}/>:<Login setRegister={setregister}/>}      
      </div>
    </div>
  )
}

export default Register