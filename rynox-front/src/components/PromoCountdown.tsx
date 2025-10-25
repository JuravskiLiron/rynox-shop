import { useEffect, useState } from "react";

function diff(to: Date){
  const s = Math.max(0, Math.floor((to.getTime() - Date.now())/1000));
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return { d, h, m, s: sec };
}

export default function PromoCountdown({ until, label }:{ until: string; label?: string }){
  const date = new Date(until);
  const [t, setT] = useState(()=>diff(date));
  useEffect(()=>{ const id = setInterval(()=>setT(diff(date)), 1000); return ()=>clearInterval(id); }, [until]);

  return (
    <div className="promo">
      <div className="container promo__inner">
        <span className="promo__label">{label || "Супер-скидки заканчиваются через:"}</span>
        <div className="promo__clock" aria-live="polite">
          <span><b>{t.d}</b>д</span><span><b>{t.h}</b>ч</span><span><b>{t.m}</b>м</span><span><b>{t.s}</b>с</span>
        </div>
        <a className="btn btn--primary" href="/catalog?promo=1">Купить со скидкой</a>
      </div>
    </div>
  );
}
