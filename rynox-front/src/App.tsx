import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Support from "./pages/Support";
import { Header } from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import CartDrawer from "./components/CartDrawer";

export default function App(){
  return (
    <>
      <Header/>
      <MobileMenu/>
      <CartDrawer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
      <footer className="ft"><div className="container">© 2025 LuxStore</div></footer>
    </>
  );
}
