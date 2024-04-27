import React, { useEffect, useState } from 'react'
import PostService from '../services/PostsService'
import { toast } from 'react-toastify'
import SingleProductCardComponent from '../components/SingleProductCardComponent'


function ProductsPage() {

  const [singleProduct,setSingleProduct] = useState({})
  const [isLoading,setIsLoading] = useState(false)
  useEffect(()=>{
    PostService.getSingleProduct()
    .then(res=>{
      setSingleProduct(res.data)
      toast.success('Stigli su podaci!!!')
      setIsLoading(true)
    })
    .catch(err=>console.log(err))
  },[])

  return (
    <div className='container mx-auto'>
      <h2>Single Product</h2>
     {isLoading? <SingleProductCardComponent product={singleProduct}/>:null}
    </div>
  )
}

export default ProductsPage