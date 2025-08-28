export default function About(){
  return (
    <main className="section">
      <div className="container">
        <h2>About Ecoripe</h2>
        <p style={{color:'var(--muted)'}}>
          Since 2004, Ecoripe Tropicals has brought the flavors of the tropics to markets across the U.S.
          We focus on quality, consistency, and collaborative relationships with growers and customers.
        </p>
        <div className="grid grid-3" style={{marginTop:'1rem'}}>
          <div className="card"><strong>Worker‑oriented</strong><p>Team-first culture with shared responsibility.</p></div>
          <div className="card"><strong>Food Safety</strong><p>PrimusGFS‑certified refrigerated warehouse.</p></div>
          <div className="card"><strong>Community</strong><p>Active at trade shows and industry associations.</p></div>
        </div>
      </div>
    </main>
  )
}
