import React from 'react'
import { IProductShoppingBasket } from '../../../Data/data'
import './ProductBuy.css'
import { useGlobalShopping } from '../../../context/Context'

interface ProductBuyProps {
    product: IProductShoppingBasket
}
const ProductBuy:React.FC<ProductBuyProps> = ({product}) => {
    const { DeleteFromShoppingBasketList } = useGlobalShopping();
  return (
    <div>
        <div className='ProductBuy'>
            <p>Product: {product.product.name}</p>
            <p>Price: {product.product.price}💲</p>
            <p>Amount: {product.amount}</p>
            <p>Total: {product.product.price * product.amount}💲</p>
            <button className='delete-button' onClick={() => DeleteFromShoppingBasketList(product.id)}>Delete</button>
        </div>
    </div>
  )
}

export default ProductBuy