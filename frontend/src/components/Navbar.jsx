import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <header className="header_navigation" id="header_navigation">
        <div className="main_container">
          <nav className="navigation_bar">
            <div href="#" className="navigation_container">
              <div className="navigation_logo">
                <h2>MD</h2>
              </div>
            </div>

            <input type="checkbox" id="navigation_toggle" name="dropdown" />
              <div className="navigation_extras">
                <label htmlFor="navigation_toggle">
                  <div className="navigation_open" id="navigation_open">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.8"
                          fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                  </div>
                  <div className="navigation_close" id="navigation_close">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.8"
                          fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                    </svg>
                  </div>
                </label>
              </div>

            <ul className="navigation_list">
              <Link to="/archive" className="navigation_link">Archive</Link>
              <Link to="/" className="navigation_link">Showcase</Link>
              <Link to="/about-me" className="navigation_link">About Me</Link>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}