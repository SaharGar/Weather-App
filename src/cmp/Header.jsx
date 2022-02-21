
import { NavLink, Link } from "react-router-dom";


export function Header() {
    

    return (
        <section className="app-header flex space-between">
            <Link to='/'><h1>Weather App</h1></Link>
            <ul className="nav-list flex clean-list">
                <NavLink exact to='/'><li>Home</li></NavLink>
                <NavLink to='/search'><li>Search</li></NavLink>
                <NavLink to='/favorites'><li>Favorites</li></NavLink>
            </ul>
        </section>
    )
}