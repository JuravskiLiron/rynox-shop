// src/components/ProductCard.tsx
import { Link } from "react-router-dom";
import type React from "react";

type Color = { name: string; hex: string };

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  img: string;         // базовый путь без расширения, напр. "/assets/pro-case"
  rating: number;
  colors: Color[];
  subtitle?: string;
  badge?: string;
};

// Тип для style с кастомной CSS-переменной --dot
type StyleWithDotVar = React.CSSProperties & { ["--dot"]?: string };

export function ProductCard({
  id, name, subtitle, price, img, rating, badge, colors,
}: ProductCardProps) {
  return (
    <article className="card">
      {badge && <span className="card__badge">{badge}</span>}

      <div className="card__media">
        <picture>
          <source srcSet={`${img}.avif`} type="image/avif" />
          <source srcSet={`${img}.webp`} type="image/webp" />
          <img src={`${img}.jpg`} alt={name} />
        </picture>
      </div>

      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        {subtitle && <p className="card__sub">{subtitle}</p>}

        <div className="card__meta">
          <div className="card__colors" aria-label="Доступные цвета">
            {colors.map((c) => {
              const dotStyle: StyleWithDotVar = { "--dot": c.hex };
              return <span key={c.hex} className="dot" title={c.name} style={dotStyle} />;
            })}
          </div>
          <div className="card__rating">⭐ {rating.toFixed(1)}</div>
        </div>

        <div className="card__foot">
          <div className="card__price">₪{price}</div>
          <Link to={`/product/${id}`} className="btn btn--light">Подробнее</Link>
        </div>
      </div>
    </article>
  );
}
    