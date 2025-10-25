export type Color = { name: string; hex: string };
export type Product = {
  id: number; slug: string; name: string; subtitle?: string; price: number; rating: number;
  imgBase: string; colors: Color[]; type: "case"|"glass"|"charger"|"strap"|"cable";
  compatibility: string[]; features?: string[];
  isNew?: boolean;
};
export const PRODUCTS: Product[] = [
  { id:1, slug:"edge-pro-titanium", name:"Edge Pro Titanium", subtitle:"MagCharge 2 / Ceramic Shield", price:299, rating:4.9,
    imgBase:"/assets/pro-case", colors:[{name:"Natural",hex:"#d2d3d6"},{name:"Graphite",hex:"#3a3b3f"},{name:"Navy",hex:"#0f1a2c"}],
    type:"case", compatibility:["iPhone 16","iPhone 15"], features:["Titanium","MagCharge 2","Raised lip"] },
  { id:2, slug:"aurora-glass", name:"Aurora Glass", subtitle:"Ultra-clear screen protector", price:89, rating:4.8,
    imgBase:"/assets/pro-glass", colors:[{name:"Clear",hex:"#e5eefb"}], type:"glass", compatibility:["iPhone 16","iPhone 15"] },
  { id:3, slug:"air-dock-qi2", name:"Air Dock Qi2", subtitle:"15W magnetic stand", price:219, rating:4.7,
    imgBase:"/assets/cat-phones", colors:[{name:"Silver",hex:"#cdd3db"},{name:"Black",hex:"#0b0e12"}], type:"charger", compatibility:["MagSafe / Qi2"], isNew :true },
  // ...добавь ещё
];
export const byId = (idOrSlug: string) => PRODUCTS.find(p => p.slug===idOrSlug || String(p.id)===idOrSlug) || null;
