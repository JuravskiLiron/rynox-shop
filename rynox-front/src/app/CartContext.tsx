import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type CartItem = { id: number; name: string; price: number; img: string; qty: number };
type CartCtx = {
  items: CartItem[];
  add: (it: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: number) => void;
  setQty: (id: number, qty: number) => void;
  total: number;
  count: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add: CartCtx["add"] = (it, qty = 1) => {
    setItems(s => {
      const i = s.findIndex(x => x.id === it.id);
      if (i >= 0) { const cp = [...s]; cp[i] = { ...cp[i], qty: cp[i].qty + qty }; return cp; }
      return [...s, { ...it, qty }];
    });
  };
  const remove = (id: number) => setItems(s => s.filter(x => x.id !== id));
  const setQty = (id: number, qty: number) => setItems(s => s.map(x => x.id === id ? { ...x, qty } : x));
  const total = useMemo(() => items.reduce((sum, x) => sum + x.price * x.qty, 0), [items]);
  const count = useMemo(() => items.reduce((n, x) => n + x.qty, 0), [items]);

  const value = useMemo(() => ({ items, add, remove, setQty, total, count }), [items, total, count]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useCart = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used within CartProvider");
  return v;
};
