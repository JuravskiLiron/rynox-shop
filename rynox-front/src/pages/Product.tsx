import { useParams } from "react-router-dom";
import { byId } from "../data/products";
import { useCart } from "../app/CartContext";

export default function Product(){
  const { id } = useParams();
  const p = byId(id||"");
  const { add } = useCart();
  if(!p) return <div className="container" style={{padding:"24px 0"}}><h2>Товар не найден</h2></div>;

  return (
    <section className="container product">
      <div className="product__media">
        <img src={`${p.imgBase}.jpg`} alt={p.name}/>
      </div>
      <div className="product__info">
        <h1>{p.name}</h1>
        <p className="muted">{p.subtitle}</p>
        <div className="price">₪{p.price}</div>

        <div className="swatches">{p.colors.map(c => <span key={c.hex} className="dot" title={c.name} style={{["--dot" as any]: c.hex}}/>)}</div>

        <button className="btn btn--primary" onClick={()=>add({id:p.id, name:p.name, price:p.price, img:p.imgBase})}>
          В корзину
        </button>

        <div className="details">
          <h3>Особенности</h3>
          <ul>{p.features?.map(f => <li key={f}>{f}</li>)}</ul>
          <h3>Совместимость</h3>
          <ul>{p.compatibility.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
