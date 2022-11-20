import React, { useEffect, useState } from 'react'
import { firestore } from "../Database"
import { collection, getDocs } from 'firebase/firestore'
import ProdcutBox from "../Components/ProductBox"
import { useNavigate } from 'react-router-dom'

function ProductList({Category, bg, link}) {
    const [product, setproduct] = useState(null)
    const navigate = useNavigate()
    const fetchPost = async () => {
        await getDocs(collection(firestore, "Products"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setproduct(newData);
            })
       
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])

  return (
    <div className="h-auto grid-cols-6 grid pt-3 flex-row items-center">
        <div className="w-[233px] h-[346px] relative flex items-center justify-center">
            <img draggable="false" src={bg} alt={Category} className="absolute z-10 w-[232px] h-[350px] object-fill"/>
            <h1 className='text-white z-20 font-bold text-[22px]'>{Category}</h1>
            <p onClick={() => {
                navigate(link)
            }} className='absolute bottom-3 z-20 font-[400] text-[13px] text-white unexpected-1 cursor-pointer'>See All Products</p>
        </div>
        {product?.filter((product) => {
            if(product.Home == Category) {
                return product
            } else {
                return null
            }
        }).map((product) => (
            <ProdcutBox product={product}/>
        ))}
        </div>
  )
}

export default ProductList