import React from 'react';
import { IProduct } from '../../../Data/data';
import { useGlobalShopping } from '../../../context/Context';
import './Product.css';
import { set } from 'mongoose';

interface ProductProps {
    product: IProduct;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { AddProductToShoppingBasketList } = useGlobalShopping();
    const [amount, setAmount] = React.useState(1);

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    };

    return (
        <div className='product'>
            <div className='product-info'>
                <p>{product.name}</p>
                <p>Price: {product.price} 💲</p>
                <input
                    type="number"
                    min={1}
                    max={10}
                    value={amount}
                    onChange={handleAmountChange}
                />
                <button className='buy-button' onClick={() => {AddProductToShoppingBasketList(product.id, amount)}}>
                    Buy
                </button>
            </div>
        </div>
    );
}

export default Product;
