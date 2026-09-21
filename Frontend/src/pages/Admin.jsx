import { useEffect, useState } from "react";
import "./Admin.css";

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

    const approvePet = (id) => {
        fetch(`http://localhost:5000/api/admin/pets/approve/${id}`, {
            method: "PUT"
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const rejectPet = (id) => {
        fetch(`http://localhost:5000/api/admin/pets/reject/${id}`, {
            method: "PUT"
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deletePet = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to completely delete this pet?"
        );

        if (!confirmDelete) {
            return;
        }

        fetch(`http://localhost:5000/api/admin/pets/delete/${id}`, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to delete pet.");
            });
    };

    return (
        <div className="admin-page">
            <div className="admin-container">
                <div className="admin-header">
                    <h1>Admin Dashboard</h1>
                    <p>Manage pets submitted for adoption.</p>
                </div>

                <div className="admin-section">
                    <h2>Manage Pets</h2>

                    {pets.length === 0 ? (
                        <div className="admin-empty">
                            <h3>No Pets Found</h3>

                            <p>
                                There are currently no pets submitted for
                                adoption.
                            </p>
                        </div>
                    ) : (
                        <div className="admin-pet-grid">
                            {pets.map((pet) => (
                                <div
                                    className="admin-pet-card"
                                    key={pet._id}
                                >
                                    <img
                                        src={`http://localhost:5000/uploads/${pet.image}`}
                                        alt={pet.petName}
                                    />

                                    <div className="admin-pet-info">
                                        <h3>{pet.petName}</h3>

                                        <p>
                                            <strong>Type:</strong>{" "}
                                            {pet.petType}
                                        </p>

                                        <p>
                                            <strong>Breed:</strong>{" "}
                                            {pet.breed}
                                        </p>

                                        <p>
                                            <strong>Age:</strong>{" "}
                                            {pet.age}
                                        </p>

                                        <p>
                                            <strong>Gender:</strong>{" "}
                                            {pet.gender}
                                        </p>

                                        <div
                                            className={`admin-status ${pet.status.toLowerCase()}`}
                                        >
                                            {pet.status}
                                        </div>

                                        {pet.status === "Pending" && (
                                            <div className="admin-actions">
                                                <button
                                                    className="approve-btn"
                                                    onClick={() =>
                                                        approvePet(pet._id)
                                                    }
                                                >
                                                    Approve
                                                </button>

                                                <button
                                                    className="reject-btn"
                                                    onClick={() =>
                                                        rejectPet(pet._id)
                                                    }
                                                >
                                                    Reject
                                                </button>
                                            </div>
                                        )}

                                        <button
                                            className="delete-pet-btn"
                                            onClick={() =>
                                                deletePet(pet._id)
                                            }
                                        >
                                            Delete Pet
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Admin;