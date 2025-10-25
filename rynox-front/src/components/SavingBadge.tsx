// SavingsBadge.tsx
export function SavingsBadge({ price, compareAt }: { price: number; compareAt?: number }) {
  if (!compareAt || compareAt <= price) return null;
  const save = compareAt - price;
  const pct = Math.round((save / compareAt) * 100);
  return (
    <span className="sv-badge" title={`Экономия ₪${save} (${pct}%)`}>−{pct}%</span>
  );
}
