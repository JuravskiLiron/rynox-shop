import { createContext, useContext, useState, type ReactNode } from "react";
type UIState = { menuOpen: boolean; cartOpen: boolean; openMenu:()=>void; closeMenu:()=>void; openCart:()=>void; closeCart:()=>void; };
const Ctx = createContext<UIState | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenu] = useState(false);
  const [cartOpen, setCart] = useState(false);
  const value: UIState = {
    menuOpen, cartOpen,
    openMenu: () => setMenu(true), closeMenu: () => setMenu(false),
    openCart: () => setCart(true), closeCart: () => setCart(false)
  };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export const useUI = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useUI must be used within UIProvider");
  return v;
};
