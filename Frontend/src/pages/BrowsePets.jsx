import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BrowsePets.css";

function BrowsePets() {
    const navigate = useNavigate();

    const [pets, setPets] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/api/pets/all")
            .then((response) => response.json())
            .then((data) => setPets(data))
            .catch((error) => console.log(error));
    }, []);

    const filteredPets = pets.filter((pet) => {
        const matchesSearch =
            pet.petName.toLowerCase().includes(search.toLowerCase()) ||
            pet.breed.toLowerCase().includes(search.toLowerCase());

        const matchesType =
            type === "" || pet.petType === type;

        return matchesSearch && matchesType;
    });

    return (
        <div>
            <section className="browse-header">
                <h1>Find Your Perfect Companion</h1>
                <p>
                    Browse pets who are looking for a loving forever home.
                </p>
            </section>

            <section className="filters">
                <input
                    type="text"
                    placeholder="Search by pet name or breed..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="">All Pets</option>
                    <option value="Dog">Dogs</option>
                    <option value="Cat">Cats</option>
                    <option value="Other">Other</option>
                </select>
            </section>

            <section className="pet-grid">
                {filteredPets.length === 0 ? (
                    <p>No pets found.</p>
                ) : (
                    filteredPets.map((pet) => (
                        <div className="pet-card" key={pet._id}>
                            <img
                                src={
                                    "http://localhost:5000/uploads/" +
                                    pet.image
                                }
                                alt={pet.petName}
                            />

                            <div className="pet-info">
                                <h2>{pet.petName}</h2>

                                <p>
                                    {pet.petType} • {pet.breed}
                                </p>

                                <p>
                                    {pet.age} years old • {pet.gender}
                                </p>

                                <p className="pet-description">
                                    {pet.description}
                                </p>

                                <button
                                    onClick={() =>
                                        navigate("/adopt", {
                                            state: pet
                                        })
                                    }
                                >
                                    Adopt {pet.petName}
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </section>
        </div>
    );
}

export default BrowsePets;