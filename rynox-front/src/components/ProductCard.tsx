import { Link } from "react-router-dom";
import "../styles/App.css"; // подключи стили (временный фон и базовые классы)
type Color = { name: string; hex: string };

type Props = {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  img: string;      // без расширения, как "/assets/pro-case"
  rating: number;
  badge?: string;
  colors: Color[];  // <-- ВАЖНО: массив ОБЪЕКТОВ
};

export function ProductCard({
  id, name, subtitle, price, img, rating, badge, colors,
}: Props) {
  return (
    <article className="pcard">
      {badge && <span className="badge">{badge}</span>}

      <div className="pcard__media">
        <picture>
          <source srcSet={`${img}.avif`} type="image/avif" />
          <source srcSet={`${img}.webp`} type="image/webp" />
          <img src={`${img}.jpg`} alt={name} loading="lazy" decoding="async" />
        </picture>
      </div>

      <div className="pcard__body">
        <h3 className="pcard__title">{name}</h3>
        <p className="pcard__sub">{subtitle}</p>

        <div className="pcard__meta">
          <div className="pcard__colors" aria-label="Available colors">
            {colors.map(c => (
              <span
                key={c.hex}
                className="dot"
                title={c.name}
                style={{ ["--dot" as any]: c.hex }}
              />
            ))}
          </div>

          <div className="stars">★ ★ ★ ★ ★</div>
        </div>

        <div className="pcard__foot">
          <div className="pcard__price">₪{price}</div>
          <Link to={`/product/${id}`} className="btn btn--light">View</Link>
        </div>
      </div>
    </article>
  );
}
