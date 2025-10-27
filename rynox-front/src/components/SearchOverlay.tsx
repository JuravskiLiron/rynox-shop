// src/components/SearchOverlay.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../data/products";

type Props = { open: boolean; onClose: () => void };

export default function SearchOverlay({ open, onClose }: Props){
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const nav = useNavigate();

  useEffect(()=>{
    if(open){
      setTimeout(()=> inputRef.current?.focus(), 50);
    } else {
      setQ("");
    }
  }, [open]);

  const items = useMemo(()=>{
    const k = q.trim().toLowerCase();
    if(!k) return [];
    return PRODUCTS
      .filter(p => [p.name, p.subtitle, p.type, ...(p.compatibility||[])].join(" ").toLowerCase().includes(k))
      .slice(0, 10);
  }, [q]);

  function goSearch(){
    if(!q.trim()) return;
    onClose();
    nav(`/catalog?search=${encodeURIComponent(q.trim())}`);
  }

  return (
    <div className={`search ${open ? "open": ""}`} role="dialog" aria-modal="true" aria-label="Поиск по каталогу">
      <div className="search__backdrop" onClick={onClose}/>
      <div className="search__panel">
        <div className="search__row">
          <input
            ref={inputRef}
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            placeholder="Поиск товаров…"
            onKeyDown={(e)=>{ if(e.key==='Enter') goSearch(); if(e.key==='Escape') onClose(); }}
          />
          <button onClick={goSearch}>Найти</button>
          <button onClick={onClose}>Закрыть</button>
        </div>

        <div className="search__body" aria-live="polite">
          {q && items.length === 0 && <div style={{padding:"8px"}}>Ничего не найдено</div>}
          {items.map(p=>(
<Link key={p.id} className="sitem" to={`/product/${p.slug}`} onClick={onClose}>
              <img src={`${p.imgBase}.jpg`} alt="" />
              <div>
                <div style={{fontWeight:700}}>{p.name}</div>
                {p.subtitle && <div style={{color:"#64748b", fontSize:".9rem"}}>{p.subtitle}</div>}
              </div>
              <div className="sitem__price">₪{p.price}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
