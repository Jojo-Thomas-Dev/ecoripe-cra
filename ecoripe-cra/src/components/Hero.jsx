import { Link } from 'react-router-dom';

export default function Hero(){
  return (
    <section className="hero">
      <div className="container">
        <span className="badge">Importer • Distributor • Organics</span>
        <h1>Fresh, exotic & organic tropical produce — delivered with care.</h1>
        <p style={{maxWidth:720,color:'var(--muted)'}}>
          Ecoripe Tropicals supplies national and regional markets with mangoes, papayas, roots, and specialty fruit.
          Food-safety certified, USDA Organic Handler, and member of SEPC.
        </p>
        <div style={{display:'flex', gap:'.75rem', marginTop:'1rem'}}>
          <Link to="/products" className="btn btn-primary">Browse Products</Link>
          <a href="tel:3058891734" className="btn">Call Sales</a>
        </div>
        <div className="kpis" style={{marginTop:'2rem'}}>
          <div className="card"><strong style={{fontSize:'1.5rem'}}>20+</strong><div>Years of tropical excellence</div></div>
          <div className="card"><strong style={{fontSize:'1.5rem'}}>PrimusGFS</strong><div>Refrigerated warehouse certified</div></div>
          <div className="card"><strong style={{fontSize:'1.5rem'}}>USDA Organic</strong><div>Certified handler</div></div>
        </div>
      </div>
    </section>
  )
}
