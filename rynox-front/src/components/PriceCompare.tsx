// PriceCompare.tsx
type Row = { shop: string; price: number; delivery?: string; note?: string };
export function PriceCompare({ our, rows }: { our: number; rows: Row[] }) {
  const best = Math.min(our, ...rows.map(r => r.price));
  return (
    <div className="pcmp">
      <div className="pcmp__head">
        <h3>Сравнение цен</h3>
        {our === best ? <span className="pcmp__best">Лучшая цена</span> : null}
      </div>
      <div className="pcmp__grid">
        <div className="pcmp__row pcmp__row--ours">
          <div>Rynox</div><div>₪{our}</div><div>Доставка: 1–3 дня</div><div>Официальная гарантия</div>
        </div>
        {rows.map(r => (
          <div key={r.shop} className="pcmp__row">
            <div>{r.shop}</div>
            <div>₪{r.price}</div>
            <div>{r.delivery || "—"}</div>
            <div>{r.note || "—"}</div>
          </div>
        ))}
      </div>
      {our !== best && (
        <div className="pcmp__claim">
          Нашли дешевле? <button className="link-btn">Запросить купон</button> на разницу.
        </div>
      )}
    </div>
  );
}
