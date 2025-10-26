// src/pages/Home.tsx
import { Link } from "react-router-dom";
import PromoCountdown from "../components/PromoCountdown";
import { ProductCard } from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);
  const news = PRODUCTS.filter((p: any) => p?.isNew).slice(0, 6);
  const fallback = [...PRODUCTS].sort((a, b) => (b?.id ?? 0) - (a?.id ?? 0)).slice(0, 6);
  const newsToShow = news.length ? news : fallback;

  return (
    <>
      {/* Промо-таймер (полоса сверху) */}
      <PromoCountdown until="2025-12-31T23:59:59" label="Весенняя распродажа" />

      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <h1>Лучшие аксессуары по честной цене</h1>
            <p>Чехлы, стекла, зарядки — быстро, понятно и надёжно.</p>
            <div className="hero__cta">
              <Link to="/catalog" className="btn btn--primary">Перейти в каталог</Link>
              <Link to="/support" className="btn btn--ghost">Доставка и возврат</Link>
            </div>
          </div>
          {/* положи картинку в public/assets/hero-phone.png или поправь путь */}
          <img src="/assets/hero-phone.png" alt="Новинки" className="hero__img" />
        </div>
      </section>

      {/* Новинки */}
      <section className="container sec">
        <div className="sec__head">
          <h2>Новинки</h2>
          <Link to="/catalog?sort=new" className="link">Смотреть всё →</Link>
        </div>
        <div className="grid grid--3">
          {newsToShow.map((p: any) => (
            <ProductCard
              key={p?.id}
              id={p?.id}
              name={p?.name ?? "Товар"}
              subtitle={p?.subtitle ?? ""}
              price={p?.price ?? 0}
              img={p?.imgBase ?? "/assets/placeholder"}
              rating={p?.rating ?? 0}
              colors={p?.colors ?? []}
              badge={p?.isNew ? "Новинка" : undefined}
            />
          ))}
        </div>
      </section>

      {/* Популярное */}
      <section className="container sec">
        <div className="sec__head">
          <h2>Популярное</h2>
          <Link to="/catalog" className="link">Смотреть всё →</Link>
        </div>
        <div className="grid grid--3">
          {featured.map((p: any) => (
            <ProductCard
              key={p?.id}
              id={p?.id}
              name={p?.name ?? "Товар"}
              subtitle={p?.subtitle ?? ""}
              price={p?.price ?? 0}
              img={p?.imgBase ?? "/assets/placeholder"}
              rating={p?.rating ?? 0}
              colors={p?.colors ?? []}
              badge="Хит"
            />
          ))}
        </div>
      </section>
    </>
  );
}
