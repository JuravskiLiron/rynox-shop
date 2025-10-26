// src/components/Footer.tsx
export default function Footer(){
  return (
    <footer className="ft">
      <div className="container" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <nav style={{display:"flex", gap:12}}>
          <a href="/about">О нас</a>
          <a href="/privacy">Конфиденциальность</a>
          <a href="/terms">Условия</a>
        </nav>
        <span>© {new Date().getFullYear()} Rynox</span>
      </div>
    </footer>
  );
}
