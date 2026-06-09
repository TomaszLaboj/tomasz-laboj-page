import { NavLink } from 'react-router';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/music" end>
                Music
            </NavLink>
            <NavLink to="/programming">
                Programming
            </NavLink>
        </nav>
    )
}

export default NavBar;