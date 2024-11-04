import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ShoppingProvider } from "./context/Context.tsx";

createRoot(document.getElementById("root")!).render(
  <ShoppingProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ShoppingProvider>
);