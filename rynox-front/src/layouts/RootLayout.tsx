// src/layouts/RootLayout.tsx
import "../styles/App.css"; // подключи стили (временный фон и базовые классы)
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function RootLayout() {
  return (
    <div className="lux-page">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
