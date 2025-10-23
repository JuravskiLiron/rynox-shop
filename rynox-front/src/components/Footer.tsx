// src/components/Footer.tsx
import "../styles/App.css"; // подключи стили (временный фон и базовые классы)
export function Footer() {
    return (
      <footer className="lux-footer">
        <div className="container lux-footer__grid">
          <div>
            <div className="lux-brand lux-brand--muted">
              <span className="lux-logo">◦</span> Rynox
            </div>
            <p className="lux-copy">Designed with care. © 2025</p>
          </div>
          <nav className="lux-footnav">
            <a className="lux-footnav__link" href="#">Shipping & Returns</a>
            <a className="lux-footnav__link" href="#">Warranty</a>
            <a className="lux-footnav__link" href="#">Privacy</a>
            <a className="lux-footnav__link" href="#">Terms</a>
          </nav>
        </div>
      </footer>
    );
  }
