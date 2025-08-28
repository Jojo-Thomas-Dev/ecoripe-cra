import { useState } from 'react';

export default function Contact(){
  const [status, setStatus] = useState(null);

  function onSubmit(e){
    e.preventDefault();
    // Placeholder success simulation
    setStatus('Thanks! Your message has been queued. A team member will respond shortly.');
    e.currentTarget.reset();
  }

  return (
    <main className="section">
      <div className="container">
        <h2>Contact</h2>
        <div className="grid" style={{gridTemplateColumns:'2fr 1fr', gap:'1.5rem'}}>
          <form className="card" onSubmit={onSubmit}>
            <div className="grid" style={{gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
              <div>
                <label>First name</label>
                <input name="firstName" required placeholder="Jane" />
              </div>
              <div>
                <label>Last name</label>
                <input name="lastName" required placeholder="Doe" />
              </div>
              <div style={{gridColumn:'1 / -1'}}>
                <label>Company</label>
                <input name="company" required placeholder="Your Company LLC" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="email" required placeholder="you@example.com" />
              </div>
              <div>
                <label>Phone</label>
                <input name="phone" pattern="^[0-9+()\-\s]{7,}$" placeholder="+1 (555) 555‑5555" />
              </div>
              <div style={{gridColumn:'1 / -1'}}>
                <label>Message</label>
                <textarea name="message" rows="4" placeholder="What can we help you source?"></textarea>
              </div>
            </div>
            <div style={{display:'flex',gap:'.75rem',marginTop:'1rem'}}>
              <button className="btn btn-primary" type="submit">Send Inquiry</button>
              <a className="btn" href="tel:3058891734">Call Sales</a>
            </div>
            {status && <p style={{marginTop:'1rem', color:'var(--accent)'}}>{status}</p>}
          </form>

          <aside className="grid" style={{gap:'1rem'}}>
            <div className="card">
              <strong>Sales Office</strong>
              <div>305-889-1734</div>
              <div>sales@ecoripe.com</div>
            </div>
            <div className="card">
              <strong>Admin Office</strong>
              <div>305-889-5980</div>
              <div>admin@ecoripe.com</div>
            </div>
            <div className="card">
              <strong>Shipping Office</strong>
              <div>305-889-3295</div>
              <div>dispatch@ecoripe.com</div>
            </div>
            <div className="card">
              <strong>Office Hours</strong>
              <div>Mon–Fri: 8:00am – 10:00pm</div>
              <div>Wed: 8:00am – 5:00pm</div>
              <div>Address: 11087 NW 122nd St, Medley, FL 33178</div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
