// src/pages/Catalog.tsx
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function Catalog(){
  const [sp] = useSearchParams();
  const q = (sp.get("search")||"").toLowerCase();
  const type = sp.get("type") || "";

  const items = useMemo(()=>{
    let list = PRODUCTS;
    if(type) list = list.filter(p=> p.type === type);
    if(q) list = list.filter(p => [p.name, p.subtitle, p.type, ...(p.compatibility||[])].join(" ").toLowerCase().includes(q));
    return list;
  }, [q, type]);

  return (
    <main className="container sec">
      <div className="sec__head">
        <h2>Каталог</h2>
        {q && <div style={{color:"#64748b"}}>По запросу: “{q}”</div>}
      </div>

      {items.length === 0 ? (
        <div className="empty">По вашему запросу ничего не найдено.</div>
      ) : (
        <div className="grid grid--3">
          {items.map(p=>(
            <ProductCard
  key={p.id}
  id={p.id}
  slug={p.slug}         // ← важно
  name={p.name}
  subtitle={p.subtitle || ""}
  price={p.price}
  img={p.imgBase}
  rating={p.rating ?? 0}
  colors={p.colors ?? []}
  badge={p.isNew ? "Новинка" : undefined}
/>

          ))}
        </div>
      )}
    </main>
  );
}
