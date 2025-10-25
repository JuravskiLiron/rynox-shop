import { Link } from "react-router-dom";
import "../styles/shop.css"; // подключи стили (временный фон и базовые классы)
export function Hero() {
  return (
    
    <section className="lux-hero">
      <div className="lux-hero__bg" aria-hidden />
      <div className="container lux-hero__inner">
        <div className="lux-hero__text">
          <p className="eyebrow">NEW • LIMITED</p>
          <h1 className="lux-hero__title">Edge Pro
            <span className="thin"> Titanium</span>
          </h1>
          <p className="lux-hero__lead">Feather‑light, ceramic shield, MagCharge 2. The next chapter in premium protection.</p>
          <div className="lux-cta">
            <Link to="/product/edge-pro" className="btn btn--primary">Buy now</Link>
            <Link to="/edge-pro" className="btn btn--ghost">Learn more</Link>
          </div>
        </div>
        <div className="lux-hero__media">
          <picture>
            <source srcSet="/assets/hero-phone.avif" type="image/avif" />
            <source srcSet="/assets/hero-phone.webp" type="image/webp" />
            <img src="/assets/hero-phone.png" alt="Edge Pro Titanium case on phone" className="lux-hero__img"/>
          </picture>
        </div>
      </div>
    </section>
  );
}
