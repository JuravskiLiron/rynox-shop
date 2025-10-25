import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../data/products";

export default function SearchAutocomplete(){
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => { if(boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("click", h); return () => document.removeEventListener("click", h);
  }, []);

  const sugg = useMemo(() => {
    if (!q.trim()) return [];
    const s = q.toLowerCase();
    return PRODUCTS.filter(p => (p.name + " " + (p.subtitle||"")).toLowerCase().includes(s)).slice(0,8);
  }, [q]);

  function submit(value?: string){
    const val = value ?? q;
    if (!val.trim()) return;
    nav(`/catalog?q=${encodeURIComponent(val)}`);
    setOpen(false);
  }

  return (
    <div className="ac" ref={boxRef}>
      <input
        value={q} onChange={e=>{setQ(e.target.value); setOpen(true);}}
        placeholder="Поиск: клавиатуры, чехлы, зарядки..."
        onKeyDown={e=>{ if(e.key==="Enter") submit(); }}
      />
      <button onClick={()=>submit()} aria-label="Найти">Найти</button>

      {open && sugg.length>0 && (
        <div className="ac__panel">
          <div className="ac__title">Совпадения</div>
          {sugg.map(p => (
            <button key={p.id} className="ac__item" onClick={()=>submit(p.name)}>
              <img src={`${p.imgBase}.jpg`} alt="" />
              <span>{p.name}</span>
              <span className="ac__price">₪{p.price}</span>
            </button>
          ))}
          <button className="ac__all" onClick={()=>submit()}>Все результаты →</button>
        </div>
      )}
    </div>
  );
}
