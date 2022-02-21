import { NavLink } from "react-router-dom";


export function Home() {

    
    return (
        <section className="home-page">
            <h1>Welcome to our weather app</h1>
            <p>Is it a good day for the beach?</p>
            <p>Is umbrella needed?</p>
            <p>Should I unpack my winter wardrobe?</p>
            <p>Get all the answers you need and more in our Weather App</p>
            <button><NavLink to='/search'>Start here</NavLink></button>
        </section>
    )
}