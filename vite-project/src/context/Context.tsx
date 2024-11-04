import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react";
import { IProduct, products, IProductShoppingBasket } from "../Data/data";

interface ShoppingProviderProps {
  children: ReactNode;
}

interface ContextProps {
  productsList: IProduct[];
  shoppingBasketList: IProductShoppingBasket[];
  AddProductToShoppingBasketList: (idProduct: number,amount: number) => void;
  DeleteFromShoppingBasketList: (idProduct: number) => void;
  SortByName: () => void;
  SortByPrice: () => void;
  SortByName2: (str: string) => void;
}

const ShoppingContext = createContext<ContextProps>({
  productsList: [],
  shoppingBasketList: [],
  AddProductToShoppingBasketList: () => {},
  DeleteFromShoppingBasketList: () => {},
  SortByName: () => {},
  SortByPrice: () => {},
  SortByName2: () => {},

});

const ShoppingProvider: FC<ShoppingProviderProps> = ({ children }) => {
  const [shoppingBasketList, setShoppingBasketList] = useState<
    IProductShoppingBasket[]
  >([]);
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  useEffect(() => {
    setProductsList(products);
  },[])

  const AddProductToShoppingBasketList = (idProduct: number,amount: number) => {
    const selectedProduct = productsList.find((product) => product.id === idProduct);
    
    if (!selectedProduct) {return};
    
    const existingProduct = shoppingBasketList.find((product) => product.id === idProduct);
    
    setShoppingBasketList((prevList) => {
      if (existingProduct) {
        return prevList.map((product) =>
          product.id === idProduct
        ? { ...product, amount: product.amount + amount }
        : product
      );
    } else {
      return [
        ...prevList,
        { id: idProduct, product: selectedProduct, amount: amount },
      ];
    }
  });
  console.log(shoppingBasketList)
  };
  const DeleteFromShoppingBasketList = (idProduct: number) => {
    setShoppingBasketList((prevList) => {
      return prevList.filter((product) => product.id !== idProduct);
    });
  }
  const SortByName = () => {
    setProductsList(productsList.sort((a, b) => (a.name < b.name ? -1 : 1)));
 
  };
  const SortByName2 = (str: string) => {
    if (str.length === 0) {
      setProductsList(products);
      return;
    }
    const aa = products.map((product) => 
      product.name.slice(0, str.length).toLowerCase() === str.toLowerCase() ? product : null).filter((product) => product !== null);  
 setProductsList(aa);
 
  };
  const SortByPrice = () => {
    setProductsList(productsList.sort((a, b) => a.price - b.price));
};
  return (
    <ShoppingContext.Provider value={{
      productsList, shoppingBasketList, AddProductToShoppingBasketList, DeleteFromShoppingBasketList, SortByName, SortByPrice, SortByName2
    }}>{children}</ShoppingContext.Provider>
  );
};
export const useGlobalShopping = () => {
  return useContext(ShoppingContext);
};

export { ShoppingContext, ShoppingProvider };
