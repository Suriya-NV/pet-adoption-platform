import { useEffect, useState } from "react";

function MyRequests() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/adoption/requests")
            .then((response) => response.json())
            .then((data) => {
                setRequests(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>My Adoption Requests</h1>

            {requests.length === 0 ? (
                <p>No adoption requests found.</p>
            ) : (
                requests.map((request) => (
                    <div key={request._id}>
                        <h2>{request.petName}</h2>
                        <p>Phone: {request.phone}</p>
                        <p>Address: {request.address}</p>
                        <p>Reason: {request.reason}</p>
                        <p>Status: {request.status}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default MyRequests;