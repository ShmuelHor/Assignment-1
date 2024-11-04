import React from "react";
import { useGlobalShopping } from "../../../context/Context";
import ProductBuy from "./ProductBuy";
import "./ShoppingBasket.css";

const ShoppingBasket = () => {
  const { shoppingBasketList } = useGlobalShopping();
  const totalAmount = shoppingBasketList.reduce(
    (acc, product) => acc + product.amount,
    0
  );
  const totalPrice = shoppingBasketList.reduce(
    (acc, product) => acc + product.product.price * product.amount,
    0
  );
  return (
    <div>
      {shoppingBasketList.map((product) => (
        <ProductBuy key={product.id} product={product} />
      ))}
      <div className="cart-summary">
        <p className="total-amount">Total Items: {totalAmount}</p>
        <p className="total-price">Total Price: {totalPrice}💲</p>
      </div>
    </div>
  );
};

export default ShoppingBasket;
