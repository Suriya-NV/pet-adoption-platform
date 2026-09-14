import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h2>Pet Adoption 🐾</h2>

            <div>
                <Link to="/home">Home</Link>
                <Link to="/browse-pets">Browse Pets</Link>
                <Link to="/post-pet">Post a Pet</Link>
                <Link to="/login">Login</Link>
                <Link to="/">Register</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default Navbar;