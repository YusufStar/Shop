import React, { useEffect, useState } from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function ShoppingCart() {
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || null
  );
  
  let newitems = items

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <Navbar/>
      <div className="w-[1400px] h-auto py-5 flex flex-col items-start">
        <h1 className='font-[400] text-[12px]'>Home  <span className='text-[#0156FF] font-[300]'>›</span> User <span className='text-[#0156FF] font-[300]'>›</span> Cart</h1>
        <h1 className='font-[600] text-[32px] py-2'>Shopping Cart</h1>
        <div className="w-full h-full overflow-y-auto-col flex items-start">
          <div className="w-[910px] h-auto">
            <div className="w-[916px] h-auto">
              {items && items?.length != [] ? (
                 <table className=''>
                 <tr className='h-[40px] font-semibold text-[14px] border-b-[1px] border-b-[#A2A6B0]'>
                   <th className='w-[446px] text-start'>Item</th>
                   <th className='w-[149px] text-end'>Price</th>
                   <th className='w-[130px] text-end'>Qty</th>
                   <th className='w-[180px] text-center pl-5'>Subtotal</th>
                 </tr>
                 {items?.map((item) => {
                   return (
                   <tr className='w-[908px] relative h-[160px] border-b-[1px] font-[400] text-[14px] border-b-[#A2A6B0]'>
                     <td className='w-[446px] text-start flex items-center'><img src={item?.Image} className="w-[140px]"/>{item?.Name}</td>
                     <td className='w-[149px] font-semibold text-[16px] text-end'>${item?.Price}</td>
                     <td className='w-[130px] text-end font-semibold text-[16px] pr-3'>{item?.Piece}</td>
                     <td className='w-[180px] text-center font-semibold text-[16px] pl-5'>${item?.Price*item?.Piece}</td>
                     <h1 onClick={() => {
                       const index = newitems.indexOf(item);
                       newitems?.splice(index, 1)
                       localStorage.setItem("items", JSON.stringify(newitems));
                       setItems(JSON.parse(localStorage.getItem("items")) )
                     }} className='absolute right-4 top-4 w-[25px] h-[25px] rounded-full border-[#A2A6B0] border-[2px] font-semibold text-[15px] opacity-75 flex items-center justify-center hover:rotate-180 transition-all duration-300 text-[#A2A6B0] hover:opacity-50 cursor-pointer'>X</h1>
                   </tr>
                   )
                 })}
               </table>
              ):(
                <>
                  <h1 className='font-bold text-[50px] w-full h-full pt-10 flex items-center justify-center'>No Data Available</h1>
                </>
              )}
            </div>
            {items && items?.length != [] ? (
              <div className="h-[75px] w-full flex items-center">
              <button className="w-[200px] cursor-pointer h-[37px] flex items-center justify-center border-[2px] border-[#A2A6B0] rounded-full text-[#A2A6B0] font-600 text-[14px] mr-2">Continue Shopping</button>
              <button className="w-[200px] cursor-pointer h-[37px] flex items-center justify-center bg-black rounded-full text-white font-600 text-[14px] mr-auto">Clear Shopping Card</button>
              <button className="w-[200px] cursor-pointer h-[37px] flex items-center justify-center bg-black rounded-full text-white font-600 text-[14px]">Update Shopping</button>
            </div>
            ):null}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ShoppingCart