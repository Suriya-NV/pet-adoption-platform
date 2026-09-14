import { useEffect, useState } from "react";

function BrowsePets() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/pets/all")
            .then((response) => response.json())
            .then((data) => {
                setPets(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Browse Pets</h1>
            <p>Find your perfect companion.</p>

            <input
                type="text"
                placeholder="Search pets..."
            />

            <select>
                <option>All Pets</option>
                <option>Dogs</option>
                <option>Cats</option>
                <option>Other</option>
            </select>

            {pets.map((pet) => (
                <div key={pet._id}>
                    <img
                        src={`http://localhost:5000/uploads/${pet.image}`}
                        alt={pet.petName}
                        width="250"
                    />

                    <h2>{pet.petName}</h2>
                    <p>{pet.petType}</p>
                    <p>{pet.breed}</p>
                    <p>{pet.age} years old</p>
                </div>
            ))}
        </div>
    );
}

export default BrowsePets;