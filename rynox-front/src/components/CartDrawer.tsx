import { useCart } from "../app/CartContext";
import { useUI } from "../app/UIContext";
import { Link } from "react-router-dom";
import { LoyaltyMeter } from "./LoyaltyMetter";

export default function CartDrawer() {
  const { cartOpen, closeCart } = useUI();
  const { items, setQty, remove, total } = useCart();
  return (
    <aside className={`cart ${cartOpen?"open":""}`} aria-hidden={!cartOpen}>
      <div className="cart__panel">
        <div className="cart__head">
          <h3>Корзина</h3>
          <button onClick={closeCart} aria-label="Close">×</button>
        </div>
        <div className="cart__body">
          {items.length===0 ? <p>Корзина пуста</p> : items.map(it=>(
            <div key={it.id} className="cart__row">
              <img src={`${it.img}.jpg`} alt={it.name} />
              <div className="cart__info">
                <strong>{it.name}</strong>
                <span>₪{it.price}</span>
                <div className="cart__qty">
                  <button onClick={()=>setQty(it.id, Math.max(1, it.qty-1))}>−</button>
                  <input value={it.qty} onChange={e=>setQty(it.id, Math.max(1, Number(e.target.value)||1))}/>
                  <button onClick={()=>setQty(it.id, it.qty+1)}>+</button>
                </div>
              </div>
              <button className="cart__remove" onClick={()=>remove(it.id)}>Удалить</button>
            </div>
          ))}
        </div>
        <div className="cart__foot">
          <div className="cart__total">Итого: <b>₪{total.toFixed(2)}</b></div>
          <Link to="/support" className="btn btn--primary" onClick={closeCart}>Оформить (mock)</Link>
        </div>
      </div>
      <div className="cart__backdrop" onClick={closeCart}/>
     

    </aside>
    
  );
}
