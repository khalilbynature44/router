import React from 'react'
import products from '../data'
import {useLocation} from 'react-router-dom'

const ProductDesc = () => {

  const location = useLocation()
  console.log(location)
  const foundProduct = products.find(el=>el.id === +location.state)
  return (
    <div>
      {foundProduct.name} : <br/>
      <p>{foundProduct.desc} </p>
    </div>
  )
}

export default ProductDesc
