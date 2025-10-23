// src/App.tsx
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import StoreHome from "./pages/StoreHome";
import Accessories from "./pages/Accessories";
import Support from "./pages/Support";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import "./styles/App.css"; // подключи стили (временный фон и базовые классы)

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<StoreHome />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="support" element={<Support />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
