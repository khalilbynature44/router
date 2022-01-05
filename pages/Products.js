import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import products from '../data'
const Products = () => {
  return (
    <div>
      {products.map(el=> <Link to={`/products/${el.name}`} state={el.id}><p>{el.name}<br/> </p> </Link>)}
      <Outlet/>
    </div>
  )
}

export default Products
