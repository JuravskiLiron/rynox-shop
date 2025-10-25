import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./app/CartContext";
import { UIProvider } from "./app/UIContext";
import "./styles/shop.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UIProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
