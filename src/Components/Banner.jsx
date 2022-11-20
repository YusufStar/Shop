import React, { useState } from 'react'
import banner1 from "../Assets/banner1.png"
import banner2 from "../Assets/banner2.png"
import banner3 from "../Assets/banner3.png"
import banner4 from "../Assets/banner4.png"

function Banner() {
  const [index, setindex] = useState(0)
  function next(){
    index !== images.length-1 ? setindex((index) => index+1):setindex(0)
  }
  const images = [
    {
      original: banner4,
    },
    {
      original: banner1,
    },
    {
      original: banner2,
    },
    {
      original: banner3,
    },
  ];

  return (
    <div className="w-[1460px] h-[300px] relative flex items-center">
      <img alt='msi' draggable="false" src={images[index].original} className="w-full h-full"/>
      <div className="absolute text-2xl pl-1 bg-transparent hover:bg-black/50 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-75 pr-3 py-2 rounded-r-full left-0 text-white/70">{"<"}</div>
      <div onClick={next} className="absolute text-2xl pr-1 bg-transparent hover:bg-black/50 cursor-pointer opacity-50 hover:opacity-100 transition-all duration-75 pl-3 py-2 rounded-l-full right-0 text-white/70">{">"}</div>
    </div>
  )
}

export default Banner