import { useEffect, useRef } from "react";

function pad(n:number){ return String(n).padStart(2,"0"); }

export default function PromoCountdown({ until, label }:{until:string; label:string}) {
  const dRef = useRef<HTMLSpanElement>(null);
  const hRef = useRef<HTMLSpanElement>(null);
  const mRef = useRef<HTMLSpanElement>(null);
  const sRef = useRef<HTMLSpanElement>(null);

  useEffect(()=>{
    const target = new Date(until).getTime();
    const tick = () => {
      const sec = Math.max(0, Math.floor((target - Date.now())/1000));
      const d = Math.floor(sec / 86400);
      const h = Math.floor((sec % 86400) / 3600);
      const m = Math.floor((sec % 3600) / 60);
      const s = sec % 60;
      if (dRef.current) dRef.current.textContent = d>0 ? `${d}д` : "";
      if (hRef.current) hRef.current.textContent = pad(h);
      if (mRef.current) mRef.current.textContent = pad(m);
      if (sRef.current) sRef.current.textContent = pad(s);
    };
    tick();
    const id = setInterval(tick, 1000);
    return ()=>clearInterval(id);
  },[until]);

  return (
    <div className="promo">
      <div className="container promo__inner">
        <span className="clock">
  <b className="clock__d" />       {/* дни (может быть пусто) */}
  <b className="clock__num" />:    {/* часы */}
  <b className="clock__num" />:    {/* минуты */}
  <b className="clock__num" />     {/* секунды */}
</span>

        <a className="btn btn--light" href="/sale">Купить со скидкой</a>
      </div>
    </div>
  );
}
