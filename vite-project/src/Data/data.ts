export interface IProduct {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}
export interface IProductShoppingBasket {
    id: number;
    product:IProduct;
    amount: number;
    
}
export const products: IProduct[] = [
    { id: 1, name: "Milk", price: 6, imageUrl: "" },
    { id: 2, name: "Bread", price: 5, imageUrl: "" },
    { id: 3, name: "Eggs", price: 18, imageUrl: "" },
    { id: 4, name: "Tomatoes", price: 7, imageUrl: "" },
    { id: 5, name: "Apples", price: 10, imageUrl: "" },
    { id: 6, name: "Rice", price: 9, imageUrl: "" },
    { id: 7, name: "Olive oil", price: 30, imageUrl: "" },
    { id: 8, name: "Sugar", price: 4, imageUrl: "" },
    { id: 9, name: "Salt", price: 2, imageUrl: "" },
    { id: 10, name: "Coffee", price: 20, imageUrl: "" },
    { id: 11, name: "Orange juice", price: 12, imageUrl: "" },
    { id: 12, name: "Onion", price: 5, imageUrl: "" },
    { id: 13, name: "Carrot", price: 4, imageUrl: "" },
    { id: 14, name: "Potatoes", price: 6, imageUrl: "" },
    { id: 15, name: "Yogurt", price: 5, imageUrl: "" },
    { id: 16, name: "Sausages", price: 20, imageUrl: "" },
    { id: 17, name: "Chocolate", price: 8, imageUrl: "" },
    { id: 18, name: "Couscous", price: 10, imageUrl: "" },
    { id: 19, name: "Soda", price: 6, imageUrl: "" },
    { id: 20, name: "Tea", price: 15, imageUrl: "" },
];
