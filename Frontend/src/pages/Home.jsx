import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div>
            <Navbar />

            <section className="hero">
                <div className="hero-content">
                    <h1>Give a Pet a Loving Home</h1>

                    <p>
                        Find your perfect companion and give a deserving pet
                        the love and care they deserve.
                    </p>

                    <Link to="/browse-pets" className="hero-btn">
                        Find a Pet
                    </Link>
                </div>
            </section>

            <section className="how-section">
                <h2>How It Works</h2>

                <div className="steps">
                    <div className="step-card">
                        <div className="step-icon">🐶</div>
                        <h3>Find a Pet</h3>
                        <p>
                            Browse our available pets and find a companion
                            that matches your heart.
                        </p>
                    </div>

                    <div className="step-card">
                        <div className="step-icon">📝</div>
                        <h3>Send a Request</h3>
                        <p>
                            Submit an adoption request with your details and
                            tell us why you want to adopt.
                        </p>
                    </div>

                    <div className="step-card">
                        <div className="step-icon">❤️</div>
                        <h3>Give Them a Home</h3>
                        <p>
                            Welcome your new friend into a safe, caring and
                            loving forever home.
                        </p>
                    </div>
                </div>
            </section>

            <section className="why-section">
                <h2>Why Adopt?</h2>

                <p>
                    Every pet deserves a second chance, a safe home and a
                    family that will love them. Your adoption can change a
                    life forever.
                </p>

                <Link to="/browse-pets" className="secondary-btn">
                    Browse Available Pets
                </Link>
            </section>

            <footer className="footer">
                <p>© 2026 Suriya's Pet House. Every pet deserves a loving home. 🐾</p>
            </footer>
        </div>
    );
}

export default Home;