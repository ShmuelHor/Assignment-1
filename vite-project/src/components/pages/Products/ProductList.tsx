import React, { useState } from 'react'
import { useGlobalShopping } from '../../../context/Context'
import Product from './Product';

const ProductList = () => {
  const { productsList,SortByName,SortByPrice,SortByName2 } = useGlobalShopping();
  const [sortBy, setSortBy] = useState('');
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value); 
    e.target.value === 'Name'?   SortByName() : SortByPrice();
  }
  const handleAmountChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.value); 
    SortByName2(e.target.value);
    
  }
  return (
    <div>
      <input type="text" onChange={(e) => {handleAmountChange2(e)}}/>
      <select onChange={(e) => {handleAmountChange(e)}}>
        <option value="">SortBy ?</option>
        <option value="Price">Price</option>
        <option value="Name">Name</option>
      </select>
      {productsList.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList