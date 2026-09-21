import { useState } from "react";
import "./PostPet.css";

function PostPet() {
    const [formData, setFormData] = useState({
        petName: "",
        petType: "",
        breed: "",
        age: "",
        gender: "",
        description: "",
        image: null
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
            const data = new FormData();

            data.append("petName", formData.petName);
            data.append("petType", formData.petType);
            data.append("breed", formData.breed);
            data.append("age", formData.age);
            data.append("gender", formData.gender);
            data.append("description", formData.description);
            data.append("image", formData.image);

            const response = await fetch(
                "http://localhost:5000/api/pets/add",
                {
                    method: "POST",
                    body: data
                }
            );

            const result = await response.json();

            alert(result.message);
        } catch (error) {
            alert("Server error. Please try again.");
            console.log(error);
        }
    };

    return (
        <div className="post-pet-page">
            <div className="post-pet-container">
                <h1>Post a Pet</h1>

                <p>Help a pet find a loving home.</p>

                <form
                    onSubmit={handleSubmit}
                    className="post-pet-form"
                >
                    <input
                        type="text"
                        name="petName"
                        placeholder="Pet Name"
                        value={formData.petName}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="petType"
                        value={formData.petType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Pet Type</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Other">Other</option>
                    </select>

                    <input
                        type="text"
                        name="breed"
                        placeholder="Breed"
                        value={formData.breed}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />

                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                image: e.target.files[0]
                            })
                        }
                        required
                    />

                    <button type="submit">
                        Post Pet
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PostPet;