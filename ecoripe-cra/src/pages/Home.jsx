import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Home(){
  return (
    <main>
      <Hero />
      <section className="section">
        <div className="container">
          <h2>Featured Categories</h2>
          <div className="grid grid-3">
            <ProductCard title="Tropical Fruits" desc="Mango, papaya, dragon fruit, guava, lychee, longan, soursop."/>
            <ProductCard title="Roots & Spices" desc="Ginger, turmeric, cassava, taro—conventional & organic programs."/>
            <ProductCard title="Exotics" desc="Cherimoya, kumquat, breadfruit, passionfruit, and more."/>
          </div>
          <div style={{marginTop:'1rem'}}>
            <Link to="/products" className="btn">See full catalog</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid" style={{gap:'1.5rem'}}>
          <div className="card">
            <h3>Food Safety & Certifications</h3>
            <p style={{color:'var(--muted)'}}>PrimusGFS certified warehouse • USDA Organic Handler • SEPC member</p>
          </div>
          <div className="card">
            <h3>Logistics</h3>
            <p style={{color:'var(--muted)'}}>Refrigerated facility in Medley, Florida • National & regional distribution</p>
          </div>
        </div>
      </section>
    </main>
  )
}
