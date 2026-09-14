import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <Navbar />

            <section>
                <h1>Find Your Perfect Companion 🐾</h1>
                <p>
                    Give a loving pet a forever home and make a difference in their life.
                </p>
                <Link to="/browse-pets">Browse Pets</Link>
            </section>

            <section>
                <h2>How It Works</h2>

                <div>
                    <h3>1. Find a Pet</h3>
                    <p>Browse pets looking for a loving home.</p>
                </div>

                <div>
                    <h3>2. Send Adoption Request</h3>
                    <p>Submit your details and adoption reason.</p>
                </div>

                <div>
                    <h3>3. Give Them a Home</h3>
                    <p>Complete the adoption process and welcome your new friend.</p>
                </div>
            </section>

            <section>
                <h2>Why Adopt?</h2>
                <p>
                    Every pet deserves love, care, and a safe place to call home.
                </p>
            </section>
        </div>
    );
}

export default Home;