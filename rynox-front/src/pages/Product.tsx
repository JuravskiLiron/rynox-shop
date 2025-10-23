// src/pages/Product.tsx
import { useParams, Link } from "react-router-dom";
import { getBySlug } from "../data/products";
import "../styles/App.css"; // подключи стили (временный фон и базовые классы)
export default function Product() {
  const { id } = useParams();              // slug или id
  const product = getBySlug(id || "");

  if (!product) {
    return (
      <section className="container lux-section">
        <h2>Product not found</h2>
        <Link className="btn btn--primary" to="/accessories">Back to accessories</Link>
      </section>
    );
  }

  return (
    <article className="container lux-section" style={{paddingBottom: 64}}>
      <div className="mini">
        <h1 className="mini__title">{product.name}</h1>
        <div className="pcard__price">₪{product.price}</div>
      </div>

      <div className="grid" style={{gridTemplateColumns: "1.1fr .9fr", gap: 24}}>
        <div>
          <picture>
            <source srcSet={`${product.imgBase}.avif`} type="image/avif" />
            <source srcSet={`${product.imgBase}.webp`} type="image/webp" />
            <img src={`${product.imgBase}.jpg`} alt={product.name} style={{width:"100%", borderRadius: 16}} />
          </picture>
        </div>

        <div>
          <p className="lux-copy">{product.subtitle}</p>

          <div style={{marginTop: 12}}>
            <div className="pcard__colors" aria-label="Colors">
              {product.colors.map(c => (
                <span key={c.hex} className="dot" title={c.name} style={{["--dot" as any]: c.hex}} />
              ))}
            </div>
          </div>

          <div style={{marginTop: 16}}>
            <h3>Features</h3>
            <ul>
              {product.features?.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>

          <div style={{marginTop: 16}}>
            <h3>Compatibility</h3>
            <ul>
              {product.compatibility?.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>

          <div style={{marginTop: 20, display:"flex", gap:10}}>
            <button className="btn btn--primary">Add to Cart</button>
            <Link to="/accessories" className="btn btn--ghost">Back</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
