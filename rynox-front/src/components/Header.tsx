// src/components/Header.tsx
import { Link, NavLink } from "react-router-dom";
import "../styles/App.css"; // подключи стили (временный фон и базовые классы)
function SearchIcon(){ return (<svg viewBox="0 0 24 24" className="i"><path d="M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 14 15.5l.27.28v.79L20 21.5 21.5 20l-6-6Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z"/></svg>); }
function BagIcon(){ return (<svg viewBox="0 0 24 24" className="i"><path d="M7 7V6a5 5 0 1 1 10 0v1h3a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1h3Zm2 0h6V6a3 3 0 1 0-6 0v1Z"/></svg>); }

export function Header() {
  return (
    <header className="lux-header">
      <div className="container lux-header__inner">
        <Link to="/" className="lux-brand" aria-label="Home">
          <span className="lux-logo" aria-hidden>◦</span> Rynox
        </Link>

        <nav className="lux-nav" aria-label="Primary">
          <NavLink to="/" end className="lux-nav__link">Store</NavLink>
          <NavLink to="/accessories" className="lux-nav__link">Accessories</NavLink>
          <NavLink to="/support" className="lux-nav__link">Support</NavLink>
        </nav>

        <div className="lux-actions">
          <button className="icon-btn" aria-label="Search">{SearchIcon()}</button>
          <button className="icon-btn" aria-label="Cart">{BagIcon()}</button>
        </div>
      </div>
    </header>
  );
}
