import { Link, NavLink } from "react-router-dom";

export default function MobileMenu({open, onClose}:{open:boolean; onClose:()=>void}) {
  return (
    <div className={`mm ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="mm__panel">
        <button className="mm__close" aria-label="Закрыть" onClick={onClose}>×</button>
        <Link to="/" className="mm__brand" onClick={onClose}>Rynox</Link>
        <NavLink to="/catalog?type=phone" onClick={onClose}>Смартфоны</NavLink>
        <NavLink to="/catalog?type=laptop" onClick={onClose}>Ноутбуки</NavLink>
        <NavLink to="/catalog?type=headphones" onClick={onClose}>Наушники</NavLink>
        <NavLink to="/support" onClick={onClose}>Поддержка</NavLink>
      </div>
      <div className="mm__backdrop" onClick={onClose}/>
    </div>
  );
}
