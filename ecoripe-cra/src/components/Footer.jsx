export default function Footer(){
  return (
    <footer>
      <div className="container grid" style={{gap:'2rem'}}>
        <div>
          <div className="nav-logo"><span aria-hidden>🥭</span><strong>Ecoripe Tropicals</strong></div>
          <p className="mono">The sweet taste of quality.</p>
          <p className="badge">Since 2004 • Medley, Florida</p>
        </div>
        <div className="grid" style={{gridTemplateColumns:'repeat(3, minmax(0,1fr))', gap:'1rem'}}>
          <div className="card">
            <h4>Sales Office</h4>
            <p>305-889-1734<br/>sales@ecoripe.com</p>
          </div>
          <div className="card">
            <h4>Admin Office</h4>
            <p>305-889-5980<br/>admin@ecoripe.com</p>
          </div>
          <div className="card">
            <h4>Shipping Office</h4>
            <p>305-889-3295<br/>dispatch@ecoripe.com</p>
          </div>
        </div>
      </div>
      <div className="container" style={{marginTop:'1rem', fontSize:'.85rem'}}>
        © {new Date().getFullYear()} Ecoripe Tropicals. All rights reserved.
      </div>
    </footer>
  )
}
