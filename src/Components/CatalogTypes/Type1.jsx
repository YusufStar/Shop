import React, { useEffect, useState } from 'react'
import { firestore } from "../../Database"
import { collection, getDocs } from 'firebase/firestore'
import ProductBox from "../../Components/ProductBox"
import { useParams } from 'react-router-dom'

function Type1() {
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
    <div className="w-full h-[90%] flex flex-col gap-1">
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
          <ProductBox type1={true} className="flex-shrink-0" product={product}/>
        )
      })}
    </div>
  )
}

export default Type1