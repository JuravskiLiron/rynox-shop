// src/pages/Accessories.tsx
import "../styles/App.css"; // подключи стили (временный фон и базовые классы)
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";

export default function Accessories() {
  return (
    <section className="container lux-section">
      <div className="mini">
        <h2 className="mini__title">Accessories</h2>
        <p className="mini__sub">Cases, glass, charging, straps</p>
      </div>

      <div className="grid grid--4">
        {PRODUCTS.map(p => (
          <article key={p.id} className="pcard">
            <div className="pcard__media">
              <picture>
                <source srcSet={`${p.imgBase}.avif`} type="image/avif" />
                <source srcSet={`${p.imgBase}.webp`} type="image/webp" />
                <img src={`${p.imgBase}.jpg`} alt={p.name} loading="lazy" />
              </picture>
            </div>
            <div className="pcard__body">
              <h3 className="pcard__title">{p.name}</h3>
              <p className="pcard__sub">{p.subtitle}</p>
              <div className="pcard__meta">
                <div className="pcard__colors">{p.colors.map(c => <span key={c.hex} className="dot" style={{["--dot" as any]: c.hex}} />)}</div>
                <div className="stars">★ ★ ★ ★ ★</div>
              </div>
              <div className="pcard__foot">
                <div className="pcard__price">₪{p.price}</div>
                <Link to={`/product/${p.slug}`} className="btn btn--light">View</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
