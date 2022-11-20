import React from 'react'
import Rating from "@mui/material/Rating"
import stock from "../Assets/stock.png"
import check from "../Assets/check.png"
import cart from "../Assets/CustomCart.png"
import { useNavigate } from 'react-router-dom'

function ProductBox({product, type1 = false}) {
    const navigate = useNavigate()
    function HandleClick(id) {
        navigate(`/Product/${id}`)
    }
  return (
    <>
        {type1 == false ? (
            <div onClick={() => HandleClick(product?.id)} key={product?.id} className="w-[250px] hover:opacity-75 transition-all duration-75 h-[350px] flex-shrink-0 cursor-pointer flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center">
                <div className="w-[80%] h-auto flex items-center mb-1 gap-2">
                    <img draggable="false" src={product?.Stock ? stock:check} className="w-2 h-2 object-cover"/>
                    <h1 className={`font-[400] text-[10px] ${product.Stock ? "text-[#78A962]":"text-[#C94D3F]"}`}>{product.Stock ? "in stock":"check availability"}</h1>
                </div>
                <img draggable="false" alt={product?.Name} src={product?.Image} className="h-[200px] mb-2"/>
                <div className="w-full font-[400] mb-2 text-[#A2A6B0] text-[12px] h-auto flex items-center gap-2 px-5">
                    <Rating value={Math.floor(Math.random() * 5)+1} readOnly sx={{
                        fontSize: 13,
                    }}/>
                    <h1>Reviews (4)</h1>
                </div>
                <h1 className='font-[400] w-full text-[13px] text-black px-5 pt-1'>{product?.Name}</h1>
                <h1 className='flex flex-col w-full px-5 font-[500] text-[18px] pt-2'>
                <span className='text-[13px] text-[#666666] font-[300] mb-1'><del>${product?.Price+10.99}</del></span>
                ${product?.Price}
                </h1>
            </div>
        </div>
        ):(
            <div onClick={() => HandleClick(product?.id)} key={product?.id} className="w-full h-[330px] flex flex-row hover:shadow-lg transition-all py-2 duration-150 cursor-pointer">
                <div className="w-[250px] h-full flex flex-col items-start">
                        <img draggable="false" src={product?.Image} alt={product?.Name} className="h-[250px] w-[250px] object-cover"/>
                        <div className="w-full font-[400] z-10 mb-2 text-[#A2A6B0] text-[12px] h-auto flex items-center gap-2 pb-5 px-5">
                            <Rating value={Math.floor(Math.random() * 5)+1} readOnly sx={{
                                fontSize: 13,
                            }}/>
                            <h1>Reviews (4)</h1>
                </div>
                </div>

                <div className="w-[85%] h-[90%] flex flex-row items-center">
                    <div className="w-[75%] h-full flex flex-row justify-start px-2 relative">
                        <div className="w-auto h-auto flex flex-col justify-center ml-3">
                            <h1 className='font-[400] text-[13px]'>{product?.Name}</h1>
                            <h1 className='flex flex-row w-full items-center gap-2 font-[600] text-[18px] pt-2'>
                            <span className='text-[14px] text-[#666666] font-[400]'><del>${product?.Price+10.99}</del></span>
                            ${product?.Price}
                            </h1>
                            <button className='flex gap-1 w-[160px] h-[37px] border-[2px] mt-7 rounded-full text-[14px] text-[#0156FF] font-[600] border-[#0156FF] items-center justify-center'><img src={cart} className="w-[18.75px] h-[18.75px] fill-[#0156FF]"/> Add To Cart</button>
                        </div>

                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <div className="w-[234px] h-[90px] flex flex-col">
                                <div className="w-full py-1.5 px-2 flex items-center justify-between"><h1>CPU</h1> <h1>N/A</h1></div>
                                <div className="w-full py-1.5 px-2 flex items-center justify-between bg-[#F5F7FF]"><h1>Featured</h1> <h1>N/A</h1></div>
                                <div className="w-full py-1.5 px-2 flex items-center justify-between"><h1>I/O Ports</h1> <h1>N/A</h1></div>
                            </div>
                        </div>
                        <div className="w-auto h-auto flex items-center mt-5 gap-2 absolute right-0 top-3">
                            <img draggable="false" src={product?.Stock ? stock:check} className="w-2 h-2 object-cover"/>
                            <h1 className={`font-[400] text-[10px] ${product.Stock ? "text-[#78A962]":"text-[#C94D3F]"}`}>{product.Stock ? "in stock":"check availability"}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default ProductBox