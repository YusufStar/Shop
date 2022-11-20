import React, { useEffect, useState } from 'react'
import logo from "../images/logo.png"
import searchIcon from "../images/Search.png"
import cart from "../images/ShoppinCart.png"
import instagram from "../images/Instagram.png"
import facebook from "../images/Facebook.png"
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import { logout } from "../Functions"

function Navbar() {
  const localuser = JSON.parse(localStorage.getItem('authUser'))
  const [search, setsearch] = useState(false)
  const navigate = useNavigate()
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    setTimeout(() => {
      setItems(JSON.parse(localStorage.getItem("items")))
    }, 100);
  })
  
  function navigateLink(e){
    navigate(`/Catalog/${e}`)
  }

  return (
    <nav className='h-[136px] w-full flex flex-col justify-center items-center'>
        {/* Top */}
        <div className="h-[44px] w-full bg-black flex flex-col items-center">
          <div className="w-[1398px] h-[92px] flex items-center justify-between">
            <h1 className='text-[#A2A6B0] text-[12px] font-[600]'>Mon-Thu: <span className='text-[#FFFFFF]'>9:00 AM - 5:30 PM</span></h1>
            <h1 className='text-[#ACACAC] text-[12px] font-[600]'>Visit our showroom in 1234 Street Adress City Address, 1234  <span className='text-white underline underline-offset-4 cursor-pointer' onClick={() => navigate("/ContactUs")}>Contact Us</span></h1>
            <div className='flex flex-row items-center justify-center gap-3'>
              <h1 className='text-white text-[12px] font-[600]'>Call Us: (00) 1234 5678</h1>
              <img src={instagram} className ="w-[15.45px] h-[15.45px] cursor-pointer"/>
              <img src={facebook} className="w-[15.45px] h-[15.45px] cursor-pointer"/>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="h-[92px] w-full border border-b-[#CACDD8] flex flex-col items-center">
            <div className="w-[1398px] h-[92px] flex items-center relative">
              <input type="text" className={`bg-black/10 absolute ${search ? "w-[80%]":"w-0"} left-28 transition-all duration-700`}/>
              <img alt="alt" draggable="false" src={logo} onClick={() => navigate('/')} className="w-[33.47px] mr-20 cursor-pointer h-[40.05px]"/>
              <ul className='flex items-center gap-7 font-semibold text-[14px] text-black'>
                <li onClick={(e) => navigateLink(e.target.id)} id="Laptops" className='cursor-pointer hover:opacity-75 transition-all duration-75'>Laptops</li>
                <li onClick={(e) => navigateLink(e.target.id)} id="Desktops Pcs" className='cursor-pointer hover:opacity-75 transition-all duration-75'>Desktops Pcs</li>
                <li onClick={(e) => navigateLink(e.target.id)} id="Networking Devices" className='cursor-pointer hover:opacity-75 transition-all duration-75'>Networking Devices</li>
                <li onClick={(e) => navigateLink(e.target.id)} id="Printers & Scanners" className='cursor-pointer hover:opacity-75 transition-all duration-75'>Printers & Scanners</li>
                <li onClick={(e) => navigateLink(e.target.id)} id="PC Parts" className='cursor-pointer hover:opacity-75 transition-all duration-75'>PC Parts</li>
                <li onClick={(e) => navigateLink(e.target.id)} id="Other Products" className='cursor-pointer hover:opacity-75 transition-all duration-75'>All Other Products</li>
                <li className='cursor-pointer transition-all duration-150 text-[#0156FF] rounded-full border-[#0156FF] hover:bg-[#0156FF] hover:text-white hover:opacity-50 px-5 py-2 border-[2px]'>Our Deals</li>
              </ul>
              <div className="flex gap-7 items-center ml-auto">
                <img onClick={() => setsearch(!search)} draggable="false" src={searchIcon} className="w-[14.96px] cursor-pointer hover:opacity-75 transition-all duration-75 flex-shrink-0 h-[14.96px]"/>
                <div className="w-[14.96px] cursor-pointer hover:opacity-75 relative transition-all duration-75 flex-shrink-0 h-[14.96px]">
                  <img onClick={() => navigate(`/Cart`)} draggable="false" src={cart} className="w-[14.96px] cursor-pointer hover:opacity-75 transition-all duration-75 flex-shrink-0 h-[14.96px]"/>
                  <div className="absolute w-4 h-4 flex flex-col items-center justif-center bg-[#0156FF] left-[70%] bottom-[70%] rounded-full font-bold text-white text-[10px]">{items?.length}</div>
                </div>
                {!localuser?.email ? (
                  <img 
                  draggable="false"
                  src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg" 
                  alt="Profile" 
                  className='w-[36px] h-[36px] rounded-full flex-shrink-0 cursor-pointer hover:opacity-90 transition-all duration-75' />
                ):
                (
                  <Avatar
                    onClick={() => logout()}
                    alt="Profile"
                    className='w-[36px] h-[36px] rounded-full flex-shrink-0 cursor-pointer hover:opacity-90 transition-all duration-75'
                  >{localuser?.email.substring(0 ,1)}</Avatar>
                )}
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar