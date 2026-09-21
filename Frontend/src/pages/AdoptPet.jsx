import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./AdoptPet.css";

function AdoptPet() {
    const location = useLocation();
    const pet = location.state;

    const [formData, setFormData] = useState({
        phone: "",
        address: "",
        reason: ""
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
                "http://localhost:5000/api/adoption/request",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        petId: pet._id,
                        petName: pet.petName,
                        phone: formData.phone,
                        address: formData.address,
                        reason: formData.reason
                    })
                }
            );

            const data = await response.json();

            alert(data.message);

            if (response.ok) {
                setFormData({
                    phone: "",
                    address: "",
                    reason: ""
                });
            }
        } catch (error) {
            alert("Server error. Please try again.");
            console.log(error);
        }
    };

    if (!pet) {
        return (
            <div className="adopt-page">
                <div className="adopt-container">
                    <h1>Pet Not Found</h1>
                    <p>Please go back and select a pet.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="adopt-page">
            <div className="adopt-container">
                <div className="adopt-pet-info">
                    <img
                        src={
                            "http://localhost:5000/uploads/" +
                            pet.image
                        }
                        alt={pet.petName}
                    />

                    <div>
                        <h1>Adopt {pet.petName}</h1>

                        <p>
                            {pet.petType} • {pet.breed}
                        </p>

                        <p>
                            {pet.age} years old • {pet.gender}
                        </p>

                        <p>{pet.description}</p>
                    </div>
                </div>

                <div className="adopt-form-section">
                    <h2>Adoption Request</h2>
                    <p className="confirmation-message">
    After submitting your request, our team will contact you by phone for confirmation before the adoption is approved.
</p>

                    <p>
                        Tell us a little about yourself and why you
                        would like to adopt {pet.petName}.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
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

                        <textarea
                            name="reason"
                            placeholder="Why do you want to adopt this pet?"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                        />

                        <button type="submit">
                            Submit Adoption Request
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdoptPet;