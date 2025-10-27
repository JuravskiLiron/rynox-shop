import { useEffect, useMemo, useState } from "react";

function pad(n: number) { return String(n).padStart(2, "0"); }

export default function PromoCountdown({
  until,
  label = "Весенняя распродажа",
  ctaHref = "/catalog",
  ctaText = "Купить со скидкой",
}: { until: string; label?: string; ctaHref?: string; ctaText?: string }) {

  const target = useMemo(() => new Date(until).getTime(), [until]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(target - now, 0);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  return (
    <section className="promo">
      <div className="container promo__inner">
        <strong>{label}</strong>
        <div className="clock" aria-live="polite" aria-label="До конца акции">
          <span><b className="clock__num">{pad(d)}</b>д</span>{" "}
          <span><b className="clock__num">{pad(h)}</b>ч</span>{" "}
          <span><b className="clock__num">{pad(m)}</b>м</span>{" "}
          <span><b className="clock__num">{pad(s)}</b>с</span>
        </div>
        <a className="btn btn--light" href={ctaHref}>{ctaText}</a>
      </div>
    </section>
  );
}
