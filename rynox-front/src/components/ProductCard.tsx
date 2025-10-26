import { Link } from "react-router-dom";

type Color = { name: string; hex: string };
type Props = {
  id: number;
  name: string;
  price: number;
  img: string;             // базовый путь без расширения ИЛИ полный src с расширением
  subtitle?: string;
  rating?: number;
  colors?: Color[];
  badge?: string;
};

const FALLBACK = "/assets/placeholder.png";

function hasExt(path: string) {
  return /\.[a-z0-9]+$/i.test(path);
}

export function ProductCard({
  id, name, price, img, subtitle = "", rating = 0, colors = [], badge
}: Props) {
  const useExt = hasExt(img);

  return (
    <article className="card" style={{border:"1px solid #eee", borderRadius:12, overflow:"hidden"}}>
      {badge && <span className="card__badge" style={{position:"absolute", margin:10, background:"#eef2ff", padding:"4px 8px", borderRadius:999}}>{badge}</span>}
      <div className="card__media" style={{aspectRatio:"4/3", display:"grid", placeItems:"center", background:"#fafafa", borderBottom:"1px solid #eee"}}>
        {useExt ? (
          <img src={img} alt={name} style={{width:"80%", height:"auto"}} onError={(e)=>{const t=e.currentTarget; if (t.src.endsWith(FALLBACK)) return; t.onerror=null; t.src=FALLBACK;}} />
        ) : (
          <picture>
            <source srcSet={`${img}.avif`} type="image/avif" />
            <source srcSet={`${img}.webp`} type="image/webp" />
            <img src={`${img}.png`} alt={name} style={{width:"80%", height:"auto"}} onError={(e)=>{const t=e.currentTarget; if (t.src.endsWith(FALLBACK)) return; (t as any).onerror=null; t.src=FALLBACK;}} />
          </picture>
        )}
      </div>
      <div className="card__body" style={{padding:12}}>
        <h3 style={{margin:"6px 0"}}>{name}</h3>
        {subtitle && <p style={{margin:"4px 0", color:"#556070"}}>{subtitle}</p>}
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:8}}>
          <div style={{display:"flex", gap:6}}>
            {colors.map(c => (
              <span key={`${c.name}-${c.hex}`} title={c.name} style={{width:14, height:14, borderRadius:999, border:"1px solid #d1d5db", background:c.hex}}/>
            ))}
          </div>
          <div>⭐ {rating.toFixed(1)}</div>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:10}}>
          <div style={{fontWeight:800}}>₪{price}</div>
          
          <Link to={`/product/${id}`} className="card__overlay" aria-label={`Открыть ${name}`} />
            


        </div>
      </div>
    </article>
  );
}
