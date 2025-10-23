// src/data/products.ts
import "../styles/App.css"; // подключи стили (временный фон и базовые классы)
export type Color = { name: string; hex: string };
export type Product = {
  id: number;
  slug: string;         // для URL
  name: string;
  subtitle?: string;
  price: number;
  rating: number;
  colors: Color[];
  imgBase: string;      // путь без расширения: /assets/pro-case
  features?: string[];
  compatibility?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: 1, slug: "edge-pro-titanium",
    name: "Edge Pro Titanium",
    subtitle: "MagCharge 2 / Ceramic Shield",
    price: 299, rating: 4.9,
    colors: [{name:"Natural",hex:"#d2d3d6"}, {name:"Graphite",hex:"#3a3b3f"}, {name:"Navy",hex:"#0f1a2c"}],
    imgBase: "/assets/pro-case",
    features: ["Titanium frame", "Ceramic shield", "MagCharge 2"],
    compatibility: ["iPhone 16/16 Pro", "iPhone 15/15 Pro"]
  },
  {
    id: 2, slug: "aurora-glass",
    name: "Aurora Glass",
    subtitle: "Ultra-clear screen protector",
    price: 89, rating: 4.8,
    colors: [{name:"Clear",hex:"#e5eefb"}],
    imgBase: "/assets/pro-glass",
    features: ["9H hardness", "Oleophobic", "Easy align"],
    compatibility: ["iPhone 16/15/14"]
  },
  // добавляй остальные товары...
];

export function getBySlug(slug: string) {
  return PRODUCTS.find(p => p.slug === slug || String(p.id) === slug) || null;
}
