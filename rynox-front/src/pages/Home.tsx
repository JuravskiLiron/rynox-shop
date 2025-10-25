// src/pages/Home.tsx
import { Link } from "react-router-dom";
import PromoCountdown from "../components/PromoCountdown";
import { ProductCard } from "../components/ProductCard";
import { PRODUCTS } from "../data/products";

// Если картинки лежат в src/assets — импортируем так:
import catPhones   from "../assets/cat-phones.jpg";
import catLaptops  from "../assets/cat-phones.jpg";
import catGaming   from "../assets/cat-phones.jpg";
import catAudio    from "../assets/cat-phones.jpg";
import catSmart    from "../assets/cat-phones.jpg";
import catPower    from "../assets/cat-phones.jpg";

const CATEGORIES = [
  { title: "Смартфоны", to: "/catalog?type=phone",      img: catPhones },
  { title: "Ноутбуки",  to: "/catalog?type=laptop",     img: catLaptops },
  { title: "Гейминг",   to: "/catalog?type=console",    img: catGaming },
  { title: "Наушники",  to: "/catalog?type=headphones", img: catAudio },
  { title: "Умный дом", to: "/catalog?type=smarthome",  img: catSmart },
  { title: "Энергия",   to: "/catalog?type=power",      img: catPower },
];

export default function Home() {
  const featured = PRODUCTS.slice(0, 3);

  // Если в товарах есть флаг isNew — показываем их; иначе — последние по id
  const news = PRODUCTS.filter((p: any) => p.isNew).slice(0, 6);
  const fallbackNews = [...PRODUCTS].sort((a, b) => b.id - a.id).slice(0, 6);
  const newsToShow = news.length ? news : fallbackNews;

  return (
    <>
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
          <img src="/assets/hero-phone.png" alt="Новинки" className="hero__img" />
        </div>
      </section>

      {/* Категории */}
      <section className="container sec">
        <div className="sec__head"><h2>Категории Rynox</h2></div>
        <div className="grid grid--3">
          {CATEGORIES.map((c) => (
            <Link key={c.to} to={c.to} className="cat" aria-label={c.title}>
              <img src={c.img} alt="" loading="lazy" />
              <span>{c.title}</span>
            </Link>
          ))}
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
              key={p.id}
              id={p.id}
              name={p.name}
              subtitle={p.subtitle || ""}
              price={p.price}
              img={p.imgBase}
              rating={p.rating}
              colors={p.colors}
              badge={p.isNew ? "Новинка" : undefined}
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
          {featured.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              subtitle={p.subtitle || ""}
              price={p.price}
              img={p.imgBase}
              rating={p.rating}
              colors={p.colors}
              badge="Хит"
            />
          ))}
        </div>
      </section>
    </>
  );
}
