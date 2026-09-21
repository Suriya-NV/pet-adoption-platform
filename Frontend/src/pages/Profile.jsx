import { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
    const [user, setUser] = useState(null);
    const [editing, setEditing] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        const savedUser = localStorage.getItem("user");

        if (savedUser) {
            const userData = JSON.parse(savedUser);

            setUser(userData);

            setFormData({
                name: userData.name,
                phone: userData.phone,
                address: userData.address
            });
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `http://localhost:5000/api/users/update/${user._id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            alert(data.message);

            if (response.ok) {
                setUser(data.user);

                localStorage.setItem(
                    "user",
                    JSON.stringify(data.user)
                );

                setEditing(false);
            }
        } catch (error) {
            alert("Server error. Please try again.");
            console.log(error);
        }
    };

    if (!user) {
        return (
            <div className="profile-page">
                <div className="profile-container">
                    <h1>Please Login</h1>
                    <p>Please login to view your profile.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="profile-page">
            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-icon">
                        👤
                    </div>

                    <h1>My Profile</h1>

                    <p>Manage your personal information.</p>
                </div>

                <div className="profile-section">
                    <h2>Profile Information</h2>

                    <div className="profile-details">
                        <div className="profile-item">
                            <span>Name</span>
                            <strong>{user.name}</strong>
                        </div>

                        <div className="profile-item">
                            <span>Email</span>
                            <strong>{user.email}</strong>
                        </div>

                        <div className="profile-item">
                            <span>Phone</span>
                            <strong>{user.phone}</strong>
                        </div>

                        <div className="profile-item">
                            <span>Address</span>
                            <strong>{user.address}</strong>
                        </div>
                    </div>

                    <button
                        className="edit-profile-btn"
                        onClick={() => setEditing(!editing)}
                    >
                        {editing ? "Cancel" : "Edit Profile"}
                    </button>
                </div>

                {editing && (
                    <div className="profile-section edit-section">
                        <h2>Edit Profile</h2>

                        <form onSubmit={handleUpdate}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />

                            <button type="submit">
                                Update Profile
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;