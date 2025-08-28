export default function ProductCard({title, desc}){
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:'.5rem'}}>
        <h3 style={{margin:'0 0 .25rem'}}>{title}</h3>
        <span className="badge">Seasonal</span>
      </div>
      <p style={{color:'var(--muted)'}}>{desc}</p>
    </div>
  )
}
