// src/pages/Support.tsx
import "../styles/App.css"; // подключи стили (временный фон и базовые классы)
export default function Support() {
    return (
      <section className="container lux-section" style={{paddingBottom: 60}}>
        <h2>Support</h2>
        <p className="lux-copy">Shipping, returns, warranty, and product care.</p>
        <ul>
          <li>Free shipping over ₪199</li>
          <li>30-day returns</li>
          <li>1-year limited warranty</li>
        </ul>
        <p>Need help? support@luxstore.example</p>
      </section>
    );
  }
