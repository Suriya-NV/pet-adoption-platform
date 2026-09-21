import Navbar from "../components/Navbar";
import "./About.css";

function About() {
    return (
        <div>
            <Navbar />

            <main className="about-page">
                <section className="about-hero">
                    <div className="about-hero-content">
                        <div className="about-icon">🐾</div>

                        <h1>About Suriya's Pet House</h1>

                        <p>
                            Helping pets find loving families and giving
                            people the opportunity to welcome a new
                            companion into their lives.
                        </p>
                    </div>
                </section>

                <section className="about-content">
                    <div className="about-card">
                        <div className="about-card-icon">❤️</div>

                        <h2>Our Mission</h2>

                        <p>
                            Our mission is to make pet adoption simple,
                            transparent and accessible. We connect people
                            looking to adopt with pets waiting for a
                            caring forever home.
                        </p>
                    </div>

                    <div className="about-card">
                        <div className="about-card-icon">🏠</div>

                        <h2>Our Goal</h2>

                        <p>
                            Every pet deserves a safe home, proper care
                            and a loving family. Suriya's Pet House helps
                            make that connection easier through a simple
                            adoption platform.
                        </p>
                    </div>

                    <div className="about-card">
                        <div className="about-card-icon">🐶</div>

                        <h2>How It Works</h2>

                        <p>
                            Browse available pets, learn about them,
                            submit an adoption request and follow the
                            request status from your account.
                        </p>
                    </div>
                </section>

                <section className="about-bottom">
                    <h2>Give a Pet a Second Chance</h2>

                    <p>
                        Your decision to adopt can give a deserving pet
                        a new beginning and a loving place to call home.
                    </p>
                </section>
            </main>

            <footer className="about-footer">
                <p>
                    © 2026 Suriya's Pet House. Every pet deserves a loving home. 🐾
                </p>
            </footer>
        </div>
    );
}

export default About;