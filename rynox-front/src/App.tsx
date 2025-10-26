// src/App.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<div className="container sec">Каталог (заглушка)</div>} />
        <Route path="/support" element={<div className="container sec">Поддержка (заглушка)</div>} />
        <Route path="*" element={<div className="container sec">404</div>} />
      </Routes>
      <Footer />
    </>
  );
}
