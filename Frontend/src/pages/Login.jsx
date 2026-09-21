import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
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
                "http://localhost:5000/api/users/login",
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
                localStorage.setItem("user", JSON.stringify(data.user));
                navigate("/home");
            }
        } catch (error) {
            console.log(error);
            alert("Server error. Please try again.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-header">
                    <div className="login-logo">🐾</div>

                    <h1>Welcome</h1>

                    <p>
                        Login to continue your pet adoption journey.
                    </p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-form-group">
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

                    <div className="login-form-group">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>

                <div className="register-link">
                    <span>Don't have an account?</span>

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;