import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:5000/api/users/registration",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            alert(data.message);

            if (response.ok) {
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
            alert("Server error. Please try again.");
        }
    };

    return (
        <div className="registration-page">
            <div className="registration-card">

                <div className="registration-header">
                    <div className="registration-logo">🐾</div>

                    <h1>Suriya's Pet House</h1>

                    <p>
                        Create your account and start your adoption journey.
                    </p>
                </div>

                <form
                    className="registration-form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label>Name</label>

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>

                        <input
                            type="text"
                            name="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Address</label>

                        <input
                            type="text"
                            name="address"
                            placeholder="Enter your address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="registration-btn"
                    >
                        Create Account
                    </button>
                </form>

                <div className="login-link">
                    <span>Already have an account?</span>

                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Registration;