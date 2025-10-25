import { useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { PRODUCTS, type Product } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function Catalog(){
  const [sp, setSp] = useSearchParams();
  const q = (sp.get("q")||"").toLowerCase();
  const type = sp.get("type")||"";
  const max = Number(sp.get("max")||"0");
  const sort = sp.get("sort")||"popular";

  const filtered = useMemo(() => {
    let list: Product[] = PRODUCTS;
    if (q) list = list.filter(p => (p.name+p.subtitle).toLowerCase().includes(q));
    if (type) list = list.filter(p => p.type === type);
    if (max>0) list = list.filter(p => p.price <= max);
    if (sort==="price_asc") list = [...list].sort((a,b)=>a.price-b.price);
    if (sort==="price_desc") list = [...list].sort((a,b)=>b.price-a.price);
    return list;
  }, [q,type,max,sort]);

  function upd(k:string, v:string){ if(v) sp.set(k,v); else sp.delete(k); setSp(sp, { replace:true }); }

  return (
    <section className="container catalog">
      <aside className="filters">
        <h3>Фильтры</h3>
        <label>Поиск<input value={q} onChange={e=>upd("q", e.target.value)} placeholder="чехол, стекло..." /></label>
        <label>Категория
          <select value={type} onChange={e=>upd("type", e.target.value)}>
            <option value="">Все</option><option value="case">Чехлы</option><option value="glass">Стекла</option>
            <option value="charger">Зарядки</option><option value="strap">Ремешки</option><option value="cable">Кабели</option>
          </select>
        </label>
        <label>Цена до
          <input type="number" min={0} step={10} value={max||""} onChange={e=>upd("max", e.target.value)} placeholder="например 200"/>
        </label>
        <button className="btn btn--light" onClick={()=>setSp(new URLSearchParams(), {replace:true})}>Сбросить</button>
      </aside>

      <div className="results">
        <div className="results__bar">
          <div>{filtered.length} товаров</div>
          <select value={sort} onChange={e=>upd("sort", e.target.value)}>
            <option value="popular">Популярные</option>
            <option value="price_asc">Сначала дешёвые</option>
            <option value="price_desc">Сначала дорогие</option>
          </select>
        </div>

        {filtered.length===0 ? (
          <div className="empty">
            <p>Ничего не нашлось. Попробуйте убрать часть фильтров.</p>
            <Link className="btn btn--primary" to="/catalog">Сбросить</Link>
          </div>
        ):(
          <div className="grid grid--3">
            {filtered.map(p => (
              <ProductCard key={p.id}
                id={p.id} name={p.name} subtitle={p.subtitle||""} price={p.price}
                img={p.imgBase} rating={p.rating} colors={p.colors}/>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
