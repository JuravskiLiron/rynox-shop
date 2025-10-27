import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";

export default function Product(){
  const { slug } = useParams<{slug:string}>();
  const item = useMemo(()=> PRODUCTS.find(p=> p.slug === slug), [slug]);

  if(!item) return <main className="container sec"><div className="empty">Товар не найден.</div></main>;

  return (
    <main className="container product">
      <div className="product__media">
        <picture>
          <source srcSet={`${item.imgBase}.avif`} type="image/avif"/>
          <source srcSet={`${item.imgBase}.webp`} type="image/webp"/>
          <img src={`${item.imgBase}.jpg`} alt={item.name}/>
        </picture>
      </div>
      <div>
        <h1 style={{marginTop:0}}>{item.name}</h1>
        {item.subtitle && <p className="muted">{item.subtitle}</p>}
        <div className="price">₪{item.price}</div>

        {item.colors?.length ? (
          <>
            <div className="muted">Цвета:</div>
            <div className="swatches">
              {item.colors.map(c=>(
                <span key={c.hex} className="dot" title={c.name} style={{["--dot" as any]: c.hex} as any}/>
              ))}
            </div>
          </>
        ) : null}

        {item.features?.length ? (
          <>
            <h3>Особенности</h3>
            <ul>{item.features.map(f=> <li key={f}>{f}</li>)}</ul>
          </>
        ) : null}

        {item.compatibility?.length ? (
          <>
            <h3>Совместимость</h3>
            <p className="muted">{item.compatibility.join(" • ")}</p>
          </>
        ) : null}

        <button className="btn btn--primary" style={{marginTop:12}}>Добавить в корзину</button>
      </div>
    </main>
  );
}
