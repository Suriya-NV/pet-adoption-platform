import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <Link to="/home" className="logo">
                🐾 Suriya's Pet House
            </Link>

            <div className="nav-links">
                <Link to="/home">Home</Link>
                <Link to="/browse-pets">Browse Pets</Link>
                <Link to="/post-pet">Post a Pet</Link>
                <Link to="/my-requests">My Requests</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/about">About</Link>

                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;