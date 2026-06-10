import { NavLink } from 'react-router';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-item">
                <NavLink to="/" end>
                  Home
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink to="/music" end>
                    Music
                </NavLink>
            </div>
            <div className="nav-item">
                <NavLink to="/programming">
                    Programming
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar;