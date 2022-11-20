import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Type0 from "../Components/CatalogTypes/Type0"
import Type1 from "../Components/CatalogTypes/Type1"
import allbrands from "../Assets/brands.png"
import { HiOutlineMenuAlt2 } from "react-icons/hi"  
import { CgMenuGridR } from "react-icons/cg"  
import { useNavigate, useParams } from 'react-router-dom'
import { firestore } from "../Database"
import { collection, getDocs } from 'firebase/firestore'

function Catalog() {
  const navigate = useNavigate()
  const {id} = useParams()
  const [Products, setProducts] = useState([])
  const [type, settype] = useState(0)
  const [colors, setcolors] = useState([{Color: "black"}, {Color: "red"}])
  
  const fetchPost = async () => {
      await getDocs(collection(firestore, "Products"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }))
                  .filter((doc) => {
                    if(id === "Other Products") {
                      return doc
                   } else  if(doc.Category == id) {
                     return doc
                 } else {
                     return null
                 }
                  })
              setProducts(newData);
          })
  }
 
  useEffect(()=>{
      fetchPost();
  }, [id])
  
  return (
    <div className='h-full w-full flex flex-col items-center justify-between'>
      <Navbar/>
      <div className="w-[1460px] flex flex-col">
        <img draggable="false" src="https://s3-alpha-sig.figma.com/img/7231/256d/42cdb72eb6353d98581cf0dad789764b?Expires=1669593600&Signature=TTy4BMl0DhnpltyRgQyCoMTbIo-Ofw84pnyvkdDBN4mjRrzgAplignUrlw5QzQe~DfoEugqAjc27TFB3EojYV4OTTIPL3u-XFoanbLMklXMH6oBbkZBuS1cF-BnuTXPlueFwtDnb6M5aXf4BpapMDW2Rnqws2S98uUULO9C7t5e8JwjOnzlm1st-RZJvFZiZ5hvBmwu47N6CYbX50Po6KseYFpVff1t9CfKJFlF1X2oet9Vb5zPg3Xwo6kkfiNWmMewn6AsOu7MLmJl4y4S9Afyct4Z5cyilcjLxQPQGv3y3sPBDbN3AWzi31jykbxXSAlPD92WUz3zyU8f0LdRXlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Asus" className='w-[1398px] h-[104px] object-cover'/>
        <h1 className='font-[500] text-[13px] text-black py-3'>Home <span className='text-[#0156FF] font-[300] text-[12px]'>›</span> Laptops</h1>
        <h1 className='py-3 font-semibold text-[32px]'>All {id} ({Products.length})</h1>
      <div className="w-[1460px] h-[50px] flex items-center justify-between">
        <button className='text-black font-[600] text-[14px] h-full w-[233px]' onClick={() => navigate('/')}>‹  Back</button>
        <div className="w-auto h-full flex items-center">
            <label className='w-[176px] h-[50px] border-[2px] border-[#CACDD8] mr-2 flex items-center justify-center outline-none font-[600] text-[13px] text-[#A2A6B0] rounded-[2px]'>
            Sort By:
              <select className='w-auto outline-none font-[600] text-[13px] h-[27px] text-black'>
                <option value="Position">Position</option>
              </select>
            </label>
            <label className='w-[179px] h-[50px] border-[2px] border-[#CACDD8] mr-2 flex items-center justify-center outline-none font-[600] text-[13px] text-[#A2A6B0] rounded-[2px]'>
            Show By:
              <select className='w-auto outline-none font-[600] text-[13px] h-[27px] text-black'>
                <option value="35">35 per page</option>
              </select>
            </label>
            <CgMenuGridR onClick={() => settype(0)} color={type === 0 ? "#000":"#A2A6B0"} className="mr-2 transition-all duration-150 cursor-pointer" size={32}/>
            <HiOutlineMenuAlt2 onClick={() => settype(1)} color={type === 1 ? "#000":"#A2A6B0"} className="transition-all duration-150 cursor-pointer" size={32}/>
        </div>
      </div>
      <div className="w-[1460px] h-auto flex mr-3">
        <div className="w-[233px] h-[1630px] flex flex-col">
          <div className="h-[700px] w-full flex flex-col items-center justify-between bg-[#F5F7FF]">
            <label className='flex flex-col items-center justify-evenly text-[16px] font-[600] h-[100px] w-full'>
              Filters
              <button className='w-[200px] h-[37px] rounded-full bg-transparent border-[2px] text-[14px] text-[#A2A6B0] outline-none border-[#A2A6B0] hover:bg-[#A2A6B0] hover:text-white transition-all duration-150'>Clear Filter</button>
            </label>
            
            <label className='flex flex-col items-start px-5 justify-evenly text-[16px] font-[600] h-[100px] w-full'>
              Filter Name
              <button className='w-[200px] h-[37px] rounded-full bg-transparent border-[2px] text-[14px] text-[#fff] bg-[#0156FF] outline-none border-none transition-all duration-150'>Clear Filter</button>
            </label>
          </div>

          <div className="w-full mt-1 h-auto flex flex-col">
          <label className='flex flex-col items-center bg-[#F5F7FF] justify-evenly text-[16px] font-[600] h-[100px] w-full'>
              Brands
              <button className='w-[200px] h-[37px] rounded-full bg-transparent border-[2px] text-[14px] text-[#A2A6B0] outline-none border-[#A2A6B0] hover:bg-[#A2A6B0] hover:text-white transition-all duration-150'>All Brands</button>
          </label>
            <img src={allbrands} className="w-full object-cover h-auto"/>

            <div className="w-full h-[107.5px] flex flex-col mt-2">
              <label className='flex flex-col items-center bg-[#F5F7FF] justify-between py-5 gap-2 text-[16px] font-[600] h-[100px] w-full'>
                Compare Products
                <h1 className='w-[200px] h-[37px] rounded-full bg-transparent text-[13px] font-[400] text-center text-[#000] outline-none transition-all duration-150'>You have no items to compare.</h1>
              </label>
            </div>

            <div className="w-full h-[107.5px] flex flex-col mt-2">
              <label className='flex flex-col items-center bg-[#F5F7FF] justify-between py-5 gap-2 text-[16px] font-[600] h-[100px] w-full'>
                My Wish List
                <h1 className='w-[200px] h-[37px] rounded-full bg-transparent text-[13px] font-[400] text-center text-[#000] outline-none transition-all duration-150'>You have no items in your wish list.</h1>
              </label>
            </div>

            <img src="https://s3-alpha-sig.figma.com/img/3032/a042/82ccdeb10e9e2b555ddb6e0877e6cbf9?Expires=1669593600&Signature=Gv9RCUZzwyMNTaV7fANjJInlK~w-xdScbi7zPVMojvUXu9bpRd9cTPwOQIf4CbrTLopIr~NCKDiyF1GwX1x8qKXYoS9u9YqTUf1vhAItlM5zeTzU0YXQGlKfTecHggpkaaG2yHavcFhKG6b5MznBCOtDDTfmytfWbLLucfamuH8AglUdPVaUrCqYgA3-ZzAVmSSHnWE7WUzRYLeiyX5-Q~bW4vYWQ-6RjeAtACsrNjnGTlDOv~XIOVjMVEIBW8hser2YJbzIcxcYnavXY3P8IrGDNE55rv73DWeJFVaAtGtUysBnlMDjdMveUVApkIiwiUhk8uIv93aOM2WXsJoD3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" className='w-full h-[370px] object-cover'/>
          </div>

        </div>
        <div className="w-[1227px] ml-3 h-[1630px] flex flex-col">
          <div className="w-full h-full">
            {type === 0 ? <Type0/>:<Type1/>}
          </div>
          <h1 className='w-full text-center h-auto text-transparent bg-clip-text bg-gradient-to-t from-transparent to-black'>MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned for color accuracy, the Prestige Series also leverages True Color Technology, which allows users to adjust the display profile to best fit their computing needs.

There are six different screen profiles, which are tuned for gaming, reducing eye fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful blue light, and optimizing contrast for watching movies.
Given the various display profiles and discrete graphics chip, the Prestige Series notebooks can be used for various design work as well as for office tasks given that the screen can be adjusted for better clarity, color accuracy, or for eye strain reduction. Users working with video or 3D rendering will appreciate the "movie mode" for which contrast is increased.

Home users or students can benefit from the "anti-blue" and the "office mode" options, both of which are designed to reduce eye strain. This is helpful when working on the computer for extended periods of time. Additionally, in their down time, students can also use the "gamer mode" to increase the screen brightness.</h1>
        <div className="w-full h-auto flex items-center justify-center mt-3">
        <button className='w-[88px] h-[37px] rounded-full border-[2px] text-[#A2A6B0] hover:bg-[#A2A6B0] hover:text-white transition-all duration-150 mt-2'>More</button>
        </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Catalog