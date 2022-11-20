import React, { useEffect, useState } from 'react'
import PayPal from "../images/PayPal.png"
import zip from "../images/Zip.png"
import intel from "../images/intel.png"
import nvdia from "../images/nvdia.png"
import { useParams } from 'react-router-dom'
import { firestore } from "../Database"
import { collection, getDocs } from 'firebase/firestore'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import {AiOutlineHeart} from "react-icons/ai"

function Product() {
  const {id} = useParams()
  const [product, setproduct] = useState()
  const [pages, setPages] = useState(0)
  const [piece, setpiece] = useState(1)
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addToCart = () => {
    setItems([...items, {
      Image: product?.Image,
      Name: product?.Name,
      Price: product?.Price,
      Piece: piece
    }]);
  };
  
  const fetchPost = async () => {
      await getDocs(collection(firestore, `Products`))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }))
                  .filter((doc)=> {
                    if(doc?.id == id){
                      return doc
                    } else {
                      return null
                    }
                  })
              setproduct(newData[0])
          })
  }
 
  useEffect(()=>{
      fetchPost();
  }, [])

  return (
    <div className='h-full w-full flex flex-col items-center'>
      <Navbar/>
      <div className="w-full h-auto flex flex-col">

        {/* Header */}
        <div className="w-full h-[101px] flex items-center justify-center border-b-[1px] border-b-[#000000]">
          <div className="h-[90%] w-[1400px] flex">
            {/* Left */}
            <ul className='flex gap-5 h-full items-center font-semibold text-[14px] mr-auto'>
              <li onClick={() => setPages(0)} className={`cursor-pointer ${pages === 0 ? "underline underline-offset-4 text-black":"text-[#666666]"}`}>About Product</li>
              <li onClick={() => setPages(1)} className={`cursor-pointer ${pages === 1 ? "underline underline-offset-4 text-black":"text-[#666666]"}`}>Details</li>
              <li onClick={() => setPages(2)} className={`cursor-pointer ${pages === 2 ? "underline underline-offset-4 text-black":"text-[#666666]"}`}>Specs</li>
            </ul>

            {/* Right */}
            <div className="w-auto h-full flex items-center">
              <h1 className='font-[400] text-[14px] mr-3'>On Sale from <span className='font-semibold'>${product?.Price}</span></h1>
              <input type="number" min="1" onChange={(e) => setpiece(Number(e.target.value))} value={piece} className='w-[70px] h-[50px] border-none outline-none text-center font-semibold text-[13px] bg-[#F5F7FF] mr-5'/>
              <button className='w-[150px] h-[50px] rounded-full bg-[#0156FF] text-white font-semibold text-[14px] flex items-center justify-center mr-3' onClick={() => addToCart()}>Add to Cart</button>
              <img src={PayPal} className="w-[140px] cursor-pointer h-[50px] hover:opacity-95 hover:shadow-lg transition-all duration-150 rounded-full"/>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full h-auto flex flex-col items-center justify-center">
         <div className="w-full h-auto flex items-center justify-center">
         <div className="h-[675px] w-[55%] flex flex-col items-end py-32 bg-[#F5F7FF]">
            <h1 className='w-[60%] items-start justify-start flex gap-1 text-[12px] font-[400]'>Home  <span className='text-[#0156FF]'>›</span>  Laptops  <span className='text-[#0156FF]'>›</span> <span className='font-[400] text-[#A2A6B0]'>{product?.Name}</span></h1>
            <h1 className='font-[500] text-[32px] w-[60%] items-start justify-start flex mt-2'>{product?.Name}</h1>
            {pages === 0 ? <h1 className='font-[300] text-[18px] w-[60%] items-start justify-start flex mt-2'>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB<br/> RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard<br/> and Mouse 3 Years Warranty Gaming Desktop</h1>:pages === 1 ? (
              <ul className='w-[60%] flex-col gap-1 list-disc pl-5 font-[300] text-[14px] items-start justify-start flex mt-2'>
                <li>Intel Core i7-10700F</li>
                <li>Intel H410</li>
                <li>WHITE</li>
                <li>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>
                <li>SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</li>
                <li>2 total slots (64GB Max)</li>
                <li>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>
                <li>Gaming Keyboard GK30 + Gaming Mouse GM11</li>
              </ul>
            ):(
              <div className='w-[60%] py-7 flex flex-col items-start justify-start'>
                <div className="w-[350px] h-[110px] flex border-[1px] border-[#CACDD8] flex-col">
                <div className="w-full py-1.5 px-3 flex items-center justify-between bg-white"><h1>CPU</h1> <h1>N/A</h1></div>
                <div className="w-full py-1.5 px-3 flex items-center justify-between"><h1>Featured</h1> <h1>N/A</h1></div>
                <div className="w-full py-1.5 px-3 flex items-center justify-between bg-white"><h1>I/O Ports</h1> <h1>N/A</h1></div>
              </div>
              </div>
            )}
            <h1 className='font-[400] text-[12px] pt-3 w-[60%] items-start justify-start flex mt-3 gap-2'>Have a Question?  <span className='text-[#0156FF] font-[300] underline underline-offset-2'>Contact Us</span></h1>
          </div>
          <div className="h-[675px] w-[45%] flex flex-col items-center py-10 pr-72">
            <div className="w-[469px] h-[500px] relative flex flex-col justify-between">
              <img src={product?.Image} alt={product?.Name} className="w-[469px] h-[469px]"/>
              <AiOutlineHeart className='absolute w-[30px] h-[30px] fill-[#A2A6B0] top-12 cursor-pointer hover:opacity-75 border-[2px] p-1 rounded-full border-[#A2A6B0]'/>
            </div>
            <img draggable="false" src={zip} className="w-[263px] h-[28px]"/>
          </div>
        </div>
          <img src={intel} className="w-full" draggable="false"/>
          <img src={nvdia} className="w-full" draggable="false"/>
         </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Product