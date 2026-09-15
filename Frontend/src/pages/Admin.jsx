import { useEffect, useState } from "react";

function Admin() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/admin/pets")
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
            <h1>Admin Dashboard</h1>
            <h2>Manage Pets</h2>

            {pets.length === 0 ? (
                <p>No pets found.</p>
            ) : (
                pets.map((pet) => (
                    <div key={pet._id}>
                        <img
                            src={`http://localhost:5000/uploads/${pet.image}`}
                            alt={pet.petName}
                            width="200"
                        />

                        <h3>{pet.petName}</h3>
                        <p>Type: {pet.petType}</p>
                        <p>Breed: {pet.breed}</p>
                        <p>Age: {pet.age}</p>
                        <p>Gender: {pet.gender}</p>
                        <p>Status: {pet.status}</p>

                        <button
    onClick={() => {
        fetch(`http://localhost:5000/api/admin/pets/approve/${pet._id}`, {
            method: "PUT"
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
                window.location.reload();
            });
    }}
>
    Approve
</button>
                        <button
    onClick={() => {
        fetch(`http://localhost:5000/api/admin/pets/reject/${pet._id}`, {
            method: "PUT"
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
                window.location.reload();
            });
    }}
>
    Reject
</button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Admin;