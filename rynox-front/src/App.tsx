// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";

export default function App(){
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/product/:slug" element={<Product/>} />
        <Route path="/support" element={<main className="container sec"><h2>Поддержка</h2><p>FAQ, доставка, возврат и т.п.</p></main>} />
        <Route path="*" element={<main className="container sec"><div className="empty">Страница не найдена</div></main>} />
      </Routes>
      <Footer/>
    </>
  );
}
