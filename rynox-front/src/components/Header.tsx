import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="hd">
      <div className="container hd__row">
        <Link to="/" className="brand" aria-label="Rynox — на главную">
          <strong>Rynox</strong><span>Store</span>
        </Link>

        <nav className="hd__nav" aria-label="Основная навигация">
          <NavLink to="/catalog?type=phone">Смартфоны</NavLink>
          <NavLink to="/catalog?type=laptop">Ноутбуки</NavLink>
          <NavLink to="/catalog?type=headphones">Наушники</NavLink>
          <NavLink to="/support">Поддержка</NavLink>
        </nav>

        <form className="hd__search" role="search" onSubmit={e=>e.preventDefault()}>
          <input placeholder="Поиск товаров…" />
          <button type="submit">Найти</button>
        </form>

        <Link to="/cart" className="hd__cart" aria-label="Корзина">🛒<span className="hd__badge">0</span></Link>
      </div>
    </header>
  );
}
