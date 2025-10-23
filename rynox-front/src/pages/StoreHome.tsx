import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { ProductCard } from "../components/ProductCard";
import { MiniHeadline } from "../components/Badge";
import "../styles/App.css"; // подключи стили (временный фон и базовые классы)
export default function StoreHome() {
  return (
    <div className="lux-page">
     
      <main>
        <Hero/>

        <section className="container lux-section">
          <MiniHeadline title="Featured" sub="Meticulous materials. Effortless function."/>
          <div className="grid grid--3">
            <ProductCard id={1} name="Edge Pro Titanium" subtitle="MagCharge 2 / Ceramic Shield" price={299} img="/assets/pro-case" rating={4.9} badge="New" colors={[{name:"Natural",hex:"#d2d3d6"},{name:"Graphite",hex:"#3a3b3f"},{name:"Navy",hex:"#0f1a2c"}]}/>
            <ProductCard id={2} name="Aurora Glass" subtitle="Ultra‑clear screen protector" price={89} img="/assets/pro-glass" rating={4.8} badge="Best‑seller" colors={[{name:"Clear",hex:"#e5eefb"}]}/>
            <ProductCard id={3} name="Air Dock Qi2" subtitle="15W magnetic stand" price={219} img="/assets/qi2-dock" rating={4.7} colors={[{name:"Silver",hex:"#cdd3db"},{name:"Black",hex:"#0b0e12"}]}/>
          </div>
        </section>

        <section className="lux-promo">
          <div className="container lux-promo__inner">
            <div className="lux-promo__text">
              <h2>Bundle & Save</h2>
              <p>Pick any case + glass + charger and get <strong>10% off</strong>. Premium gear, perfected together.</p>
              <a href="#" className="btn btn--primary">Build your bundle</a>
            </div>
            <div className="lux-promo__media">
              <img src="/assets/bundle.webp" alt="Case, glass and charger bundle"/>
            </div>
          </div>
        </section>

        <section className="container lux-section">
          <MiniHeadline title="For iPhone" sub="Cases, charging, audio."/>
          <div className="grid grid--4">
            <ProductCard id={4} name="Feather Sleeve" subtitle="Microfibre inlay" price={159} img="/assets/feather-sleeve" rating={4.6} colors={[{name:"Sand",hex:"#dbd2c7"},{name:"Black",hex:"#0b0e12"}]} />
            <ProductCard id={5} name="MagCharge Duo" subtitle="Phone + Watch" price={289} img="/assets/mag-duo" rating={4.8} colors={[{name:"Silver",hex:"#cdd3db"}]} />
            <ProductCard id={6} name="Carbon Cable" subtitle="USB‑C 60W" price={69} img="/assets/carbon-cable" rating={4.7} colors={[{name:"Black",hex:"#111"}]} />
            <ProductCard id={7} name="Silk Strap" subtitle="Apple Watch" price={129} img="/assets/silk-strap" rating={4.5} colors={[{name:"Olive",hex:"#5f6b53"},{name:"Blue",hex:"#2f465f"}]} />
          </div>
        </section>
      </main>
   
    </div>
  );
}
