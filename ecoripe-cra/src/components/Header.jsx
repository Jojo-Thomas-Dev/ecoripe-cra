import { Link, NavLink } from 'react-router-dom';

export default function Header(){
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="nav-logo">
          <span aria-hidden>🥭</span>
          <span>Ecoripe Tropicals</span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/organics">Organics</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}
