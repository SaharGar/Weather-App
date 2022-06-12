
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";


export function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <section className="app-header flex space-between">
            <Link to='/'><h1 className="logo">Weather App</h1></Link>
            <ul className="nav-list flex clean-list align-center">
                <NavLink exact to='/'><li>Home</li></NavLink>
                <NavLink to='/search'><li>Search</li></NavLink>
                <NavLink to='/favorites'><li>Favorites</li></NavLink>
            </ul>
            <i className="lni lni-menu bars-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}></i>
            {isMobileMenuOpen && <div className="mobile-menu-container" onClick={() => setIsMobileMenuOpen(false)}></div>}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : 'close'}`}>
                <ul className="nav-list-mobile flex clean-list column align-center justify-center">
                    <NavLink exact to='/'><li onClick={() => setIsMobileMenuOpen(false)}>Home</li></NavLink>
                    <NavLink to='/search'><li onClick={() => setIsMobileMenuOpen(false)}>Search</li></NavLink>
                    <NavLink to='/favorites'><li onClick={() => setIsMobileMenuOpen(false)}>Favorites</li></NavLink>
                </ul>
            </div>
        </section>
    )
}