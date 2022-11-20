import React, { useEffect, useState } from 'react'
import { firestore } from "../../Database"
import { collection, getDocs } from 'firebase/firestore'
import ProductBox from "../../Components/ProductBox"
import { useParams } from 'react-router-dom'

function Type0() {
  const {id} = useParams()
  const [product, setproduct] = useState([])
  
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
    <div className="w-full h-[90%] grid grid-cols-5">
      {product.filter((product) => {
          if(id === "Other Products") {
           return product
        } else  if(product.Category == id) {
          return product
      } else {
          return null
      }
      }).map((product) => {
        return(
          <ProductBox className="flex-shrink-0" product={product}/>
        )
      })}
    </div>
  )
}

export default Type0