import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductList from "./components/pages/Products/ProductList";
import ShoppingBasket from "./components/pages/shoppingBaskets/shoppingBasket";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/shopping-basket" element={<ShoppingBasket />} />
      </Routes>
    </>
  );
}

export default App;
