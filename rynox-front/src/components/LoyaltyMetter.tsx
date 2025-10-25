// LoyaltyMeter.tsx
export function LoyaltyMeter({ points, nextAt }: { points: number; nextAt: number }) {
  const pct = Math.min(100, Math.round((points / nextAt) * 100));
  return (
    <div className="lm">
      <div className="lm__row">
        <span>Rynox Points</span>
        <b>{points} / {nextAt}</b>
      </div>
      <div className="lm__bar"><div style={{width:`${pct}%`}}/></div>
      <p className="muted">Накопите ещё <b>{Math.max(0,nextAt-points)}</b> RP — купон −50₪</p>
    </div>
  );
}
