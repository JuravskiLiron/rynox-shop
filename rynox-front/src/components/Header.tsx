import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchOverlay from "./SearchOverlay";

const NAV = [
  { to: "/catalog?type=phone", label: "Смартфоны" },
  { to: "/catalog?type=laptop", label: "Ноутбуки" },
  { to: "/catalog?type=headphones", label: "Наушники" },
  { to: "/support", label: "Поддержка" },
];

export default function Header(){
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // блокируем скролл при открытом меню/поиске
  useEffect(()=>{
    const lock = searchOpen || menuOpen;
    document.documentElement.style.overflow = lock ? "hidden" : "";
    document.body.style.overflow = lock ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [searchOpen, menuOpen]);

  return (
    <>
      <header className="hd">
        <div className="container hd__in">
          <div className="hd__capsule">
            <button className="hd__burger" aria-label="Меню" onClick={()=>setMenuOpen(true)}>☰</button>

            <Link to="/" className="brand" aria-label="Rynox">
              <strong>Rynox</strong><span>Store</span>
            </Link>

            <nav className="hd__nav" aria-label="Primary">
              {NAV.map(n=>(
                <NavLink key={n.to} to={n.to} className="hd__link">{n.label}</NavLink>
              ))}
            </nav>

            <div className="hd__right">
              <button className="hd__btn" onClick={()=>setSearchOpen(true)} aria-label="Поиск">🔍</button>
              <Link to="/cart" className="hd__cart" aria-label="Корзина">
                🛒<span className="hd__badge">0</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Мобильное меню */}
        <div className={`mm ${menuOpen ? "open":""}`} aria-hidden={!menuOpen}>
          <div className="mm__backdrop" onClick={()=>setMenuOpen(false)} />
          <aside className="mm__panel" role="dialog" aria-label="Навигация">
            <button className="mm__close" onClick={()=>setMenuOpen(false)} aria-label="Закрыть">×</button>
            <Link to="/" className="brand" onClick={()=>setMenuOpen(false)} style={{margin:"8px 0 14px"}}><strong>Rynox</strong><span>Store</span></Link>
            {NAV.map(n=>(
              <NavLink key={n.to} to={n.to} className="mega__link" onClick={()=>setMenuOpen(false)}>
                {n.label}
              </NavLink>
            ))}
            <hr style={{margin:"12px 0"}} />
            <button className="hd__btn" onClick={()=>{ setMenuOpen(false); setSearchOpen(true); }}>🔍 Поиск</button>
            <Link to="/cart" className="mega__link" onClick={()=>setMenuOpen(false)}>Корзина</Link>
            <Link to="/support" className="mega__link" onClick={()=>setMenuOpen(false)}>Поддержка</Link>
          </aside>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={()=>setSearchOpen(false)} />
    </>
  );
}
