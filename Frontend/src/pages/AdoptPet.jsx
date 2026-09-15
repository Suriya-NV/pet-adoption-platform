import { useState } from "react";
import { useLocation } from "react-router-dom";

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
        } catch (error) {
            alert("Server error. Please try again.");
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Adopt {pet?.petName}</h1>

            <form onSubmit={handleSubmit}>
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
    );
}

export default AdoptPet;