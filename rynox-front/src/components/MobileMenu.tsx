import { Link, NavLink } from "react-router-dom";
import { useUI } from "../app/UIContext";

export default function MobileMenu() {
  const { menuOpen, closeMenu } = useUI();
  return (
    <div className={`mm ${menuOpen ? "open":""}`} aria-hidden={!menuOpen}>
      <div className="mm__panel">
        <button className="mm__close" onClick={closeMenu} aria-label="Close">×</button>
        <Link to="/" onClick={closeMenu} className="mm__brand">LuxStore</Link>
        <NavLink to="/catalog?type=case" onClick={closeMenu}>Чехлы</NavLink>
        <NavLink to="/catalog?type=glass" onClick={closeMenu}>Стекла</NavLink>
        <NavLink to="/catalog?type=charger" onClick={closeMenu}>Зарядки</NavLink>
        <NavLink to="/support" onClick={closeMenu}>Поддержка</NavLink>
      </div>
      <div className="mm__backdrop" onClick={closeMenu}/>
    </div>
  );
}
