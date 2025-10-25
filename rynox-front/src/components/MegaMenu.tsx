import { Link } from "react-router-dom";
import { MEGA_MENU } from "../data/nav";
import { useState } from "react";

export default function MegaMenu(){
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="mega">
      <ul className="mega__top">
        {Object.keys(MEGA_MENU).map(cat => (
          <li key={cat}
              onMouseEnter={()=>setOpen(cat)}
              onMouseLeave={()=>setOpen(prev => prev===cat ? null : prev)}>
            <button className={`mega__tab ${open===cat ? "is-active":""}`} aria-expanded={open===cat}>{cat}</button>
            {open===cat && (
              <div className="mega__panel">
                {MEGA_MENU[cat].map((col, idx) => (
                  <div className="mega__col" key={idx}>
                    <div className="mega__title">{col.title}</div>
                    {col.items.map(it => <Link key={it.to} to={it.to} className="mega__link">{it.label}</Link>)}
                  </div>
                ))}
                <div className="mega__promo">
                  <div className="mega__promo-in">
                    <div className="badge">NEW</div>
                    <h4>Весенняя распродажа</h4>
                    <p>Скидки до 30% на аксессуары</p>
                    <Link to="/catalog?promo=1" className="btn btn--primary">К акциям</Link>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
