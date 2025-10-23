// src/pages/NotFound.tsx
import "../styles/App.css"; // подключи стили (временный фон и базовые классы)
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="container lux-section" style={{paddingBottom: 80}}>
      <h1>404</h1>
      <p className="lux-copy">We couldn’t find that page.</p>
      <Link to="/" className="btn btn--primary">Go home</Link>
    </section>
  );
}
