import { useEffect, useState } from "react";
import "./MyRequests.css";

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
        <div className="requests-page">
            <div className="requests-container">
                <div className="requests-header">
                    <h1>My Adoption Requests</h1>
                    <p>
                        Track the status of your pet adoption requests.
                    </p>
                </div>

                {requests.length === 0 ? (
                    <div className="no-requests">
                        <h2>No Adoption Requests</h2>
                        <p>
                            You haven't submitted any adoption requests yet.
                        </p>
                    </div>
                ) : (
                    <div className="requests-list">
                        {requests.map((request) => (
                            <div
                                className="request-card"
                                key={request._id}
                            >
                                <div className="request-info">
                                    <h2>{request.petName}</h2>

                                    <p>
                                        <strong>Phone:</strong>{" "}
                                        {request.phone}
                                    </p>

                                    <p>
                                        <strong>Address:</strong>{" "}
                                        {request.address}
                                    </p>

                                    <p>
                                        <strong>Reason:</strong>{" "}
                                        {request.reason}
                                    </p>
                                </div>

                                <div
                                    className={`request-status ${request.status.toLowerCase()}`}
                                >
                                    {request.status}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyRequests;