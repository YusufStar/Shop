import React from 'react'
import Saving from "../Assets/Saving.png"
import Help from "../Assets/Help.png"
import Account from "../Assets/Account.png"
import Card from "../Assets/Card.png"
import { AiFillFacebook } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

function Footer() {
  return (
    <>
    <div className='w-[1460px] py-10 h-auto flex items-center justify-evenly'>
        <div className="w-[265px] h-[150px] flex flex-col items-center justify-between">
            <img className='h-[65px] w-[65px]' src={Saving}/>
            <h1 className='font-[700] text-[16px] text-center w-full'>Product Support</h1>
            <p className='font-[400] text-[12px] text-center w-full'>Up to 3 years on-site waaranty available for your peace of mind.</p>
        </div>
        <div className="w-[265px] h-[150px] flex flex-col items-center justify-between">
            <img className='h-[65px] w-[65px]' src={Help}/>
            <h1 className='font-[700] text-[16px] text-center w-full'>Personal Account</h1>
            <p className='font-[400] text-[12px] text-center w-full'>With big discounts, free delivery and a dedicated support specialist.</p>
        </div>
        <div className="w-[265px] h-[150px] flex flex-col items-center justify-between">
            <img className='h-[65px] w-[65px]' src={Account}/>
            <h1 className='font-[700] text-[16px] text-center w-full'>Amazing Savings</h1>
            <p className='font-[400] text-[12px] text-center w-full'>Up to 70% off new Products, you can be sure of the best price.</p>
        </div>
    </div>

    <div className="w-full h-[520px] bg-black text-white flex flex-col items-center pt-10">
        <div className="w-[1460px] h-auto flex items-center justify-between">
            <h1 className='font-[500] text-[38px]'>Sign Up To Our Newsletter.<br/><span className='font-[300] text-[16px]'>Be the first to hear about the latest offers.</span></h1>
            <div className="w-auto h-auto flex items-center justify-center gap-3">
                <input className='w-[391px] h-[50px] border-2 rounded border-white bg-transparent pl-5 outline-none text-white placeholder:text-white' type="text" placeholder='Your Email'/>
                <button className='w-[151px] h-[50px] rounded-full bg-[#0156FF]'>Subscribe</button>
            </div>
        </div>

        <div className="w-[1460px] h-auto flex items-start justify-between pt-7">
            <div className="w-[168px] h-[233px] flex flex-col items-start justify-between">
                <h1 className='text-white/50 font-[700] text-[14px]'>Information</h1>
                <ul className='flex flex-col text-white font-[400] text-[12px] gap-2 pt-1'>
                    <li>About Us</li>
                    <li>About Zip</li>
                    <li>Privacy Policy</li>
                    <li>Search</li>
                    <li>Terms</li>
                    <li>Orders and Returns</li>
                    <li>Contact Us</li>
                    <li>Advanced Search</li>
                    <li>Newsletter Subscription</li>
                </ul>
            </div>
            <div className="w-[168px] h-[233px] flex flex-col items-start justify-between">
                <h1 className='text-white/50 font-[700] text-[14px]'>Information</h1>
                <ul className='flex flex-col text-white font-[400] text-[12px] gap-2 pt-1'>
                    <li>About Us</li>
                    <li>About Zip</li>
                    <li>Privacy Policy</li>
                    <li>Search</li>
                    <li>Terms</li>
                    <li>Orders and Returns</li>
                    <li>Contact Us</li>
                    <li>Advanced Search</li>
                    <li>Newsletter Subscription</li>
                </ul>
            </div>
            <div className="w-[168px] h-[233px] flex flex-col items-start justify-between">
                <h1 className='text-white/50 font-[700] text-[14px]'>Information</h1>
                <ul className='flex flex-col text-white font-[400] text-[12px] gap-2 pt-1'>
                    <li>About Us</li>
                    <li>About Zip</li>
                    <li>Privacy Policy</li>
                    <li>Search</li>
                    <li>Terms</li>
                    <li>Orders and Returns</li>
                    <li>Contact Us</li>
                    <li>Advanced Search</li>
                    <li>Newsletter Subscription</li>
                </ul>
            </div>
            <div className="w-[168px] h-[233px] flex flex-col items-start justify-between">
                <h1 className='text-white/50 font-[700] text-[14px]'>Information</h1>
                <ul className='flex flex-col text-white font-[400] text-[12px] gap-2 pt-1'>
                    <li>About Us</li>
                    <li>About Zip</li>
                    <li>Privacy Policy</li>
                    <li>Search</li>
                    <li>Terms</li>
                    <li>Orders and Returns</li>
                    <li>Contact Us</li>
                    <li>Advanced Search</li>
                    <li>Newsletter Subscription</li>
                </ul>
            </div>
            <div className="w-[168px] h-[233px] flex flex-col items-start justify-between">
                <h1 className='text-white/50 font-[700] text-[14px]'>Information</h1>
                <ul className='flex flex-col text-white font-[400] text-[12px] gap-2 pt-1'>
                    <li>About Us</li>
                    <li>About Zip</li>
                    <li>Privacy Policy</li>
                    <li>Search</li>
                    <li>Terms</li>
                    <li>Orders and Returns</li>
                    <li>Contact Us</li>
                    <li>Advanced Search</li>
                    <li>Newsletter Subscription</li>
                </ul>
            </div>
        </div>

        <div className="w-[1460px] h-[100%] flex items-center pt-3 justify-between">
            <div className="w-[208.08px] items-start justify-start h-auto flex">
                <AiFillFacebook size={20} fill="#808081" className="mr-1"/>
                <AiFillInstagram size={20} fill="#808081"/>
            </div>
            <img src={Card} className="w-[208.08px] h-[21px]"/>
            <h1 className='font-[500] w-[208.08px] flex items-end justify-end text-[12px] text-white/50'>Copyright © 2022 YusufStar</h1>
        </div>
    </div>
    </>
  )
}

export default Footer