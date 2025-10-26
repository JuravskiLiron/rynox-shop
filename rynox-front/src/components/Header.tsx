import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="hd">
        <div className="container hd__row">
          {/* 1. Бургер */}
          <button className="hd__burger" aria-label="Открыть меню" onClick={()=>setOpen(true)}>☰</button>

          {/* 2. Логотип */}
          <Link to="/" className="brand" aria-label="Rynox — на главную">
            <strong>Rynox</strong><span>Store</span>
          </Link>

          {/* 3. Навигация (десктоп) */}
          <nav className="hd__nav" aria-label="Основная навигация">
            <NavLink to="/catalog?type=phone">Смартфоны</NavLink>
            <NavLink to="/catalog?type=laptop">Ноутбуки</NavLink>
            <NavLink to="/catalog?type=headphones">Наушники</NavLink>
            <NavLink to="/support">Поддержка</NavLink>
          </nav>

          {/* 4. Поиск */}
          <form className="hd__search" role="search" onSubmit={(e)=>e.preventDefault()}>
            <input placeholder="Поиск товаров…" />
            <button type="submit">Найти</button>
          </form>

          {/* 5. Корзина */}
          <Link to="/cart" className="hd__cart" aria-label="Корзина">
            🛒<span className="hd__badge">0</span>
          </Link>
        </div>
      </header>

      {/* Мобильное меню */}
      <div className={`mm ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mm__panel">
          <button className="mm__close" aria-label="Закрыть" onClick={()=>setOpen(false)}>×</button>
          <Link to="/" onClick={()=>setOpen(false)} className="mm__brand">Rynox</Link>
          <NavLink to="/catalog?type=phone" onClick={()=>setOpen(false)}>Смартфоны</NavLink>
          <NavLink to="/catalog?type=laptop" onClick={()=>setOpen(false)}>Ноутбуки</NavLink>
          <NavLink to="/catalog?type=headphones" onClick={()=>setOpen(false)}>Наушники</NavLink>
          <NavLink to="/support" onClick={()=>setOpen(false)}>Поддержка</NavLink>
        </div>
        <div className="mm__backdrop" onClick={()=>setOpen(false)}/>
      </div>
    </>
  );
}
