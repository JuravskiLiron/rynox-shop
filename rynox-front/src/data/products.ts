export type Color = { name: string; hex: string };

export type Product = {
  id: number;
  slug: string;
  name: string;
  subtitle?: string;
  price: number;
  rating?: number;
  imgBase: string;       // базовый путь БЕЗ расширения (для public)
  colors?: Color[];
  type?: string;
  compatibility?: string[];
  features?: string[];
  compareAt?: number;
  isNew?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "edge-pro-titanium",
    name: "Edge Pro Titanium",
    subtitle: "MagCharge 2 / Ceramic Shield",
    price: 299,
    rating: 4.9,
    imgBase: "/assets/placeholder", // => public/assets/placeholder.png|jpg|webp|avif
    colors: [{ name: "Natural", hex: "#d2d3d6" }],
    isNew: true,
  },
  {
    id: 2,
    slug: "aurora-glass",
    name: "Aurora Glass",
    price: 89,
    rating: 4.8,
    imgBase: "/assets/placeholder",
    colors: [{ name: "Clear", hex: "#e5eefb" }],
    isNew: true,
  },
  {
    id: 3,
    slug: "air-dock-qi2",
    name: "Air Dock Qi2",
    price: 219,
    rating: 4.7,
    imgBase: "/assets/placeholder",
    colors: [{ name: "Black", hex: "#0b0e12" }],
  },
];
