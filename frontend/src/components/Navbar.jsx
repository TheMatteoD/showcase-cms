import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <Link to="/archive">Archive</Link>
        <Link to="/">Showcase</Link>
        <Link to="/about-me">About Me</Link>
    </nav>
  );
}