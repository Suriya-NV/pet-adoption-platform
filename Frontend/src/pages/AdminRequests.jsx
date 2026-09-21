import { useEffect, useState } from "react";
import "./AdminRequests.css";

function AdminRequests() {
    const [requests, setRequests] = useState([]);

    const getRequests = () => {
        fetch("http://localhost:5000/api/adoption/requests")
            .then((response) => response.json())
            .then((data) => {
                setRequests(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getRequests();
    }, []);

    const approveRequest = (id) => {
        fetch(`http://localhost:5000/api/adoption/approve/${id}`, {
            method: "PUT"
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
                getRequests();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const rejectRequest = (id) => {
        fetch(`http://localhost:5000/api/adoption/reject/${id}`, {
            method: "PUT"
        })
            .then((response) => response.json())
            .then((data) => {
                alert(data.message);
                getRequests();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="admin-requests-page">
            <div className="admin-requests-container">
                <div className="admin-requests-header">
                    <h1>Adoption Requests</h1>
                    <p>Review and manage pet adoption requests.</p>
                </div>

                {requests.length === 0 ? (
                    <div className="requests-empty">
                        <h2>No Adoption Requests</h2>
                        <p>
                            There are currently no adoption requests.
                        </p>
                    </div>
                ) : (
                    <div className="admin-requests-list">
                        {requests.map((request) => (
                            <div
                                className="admin-request-card"
                                key={request._id}
                            >
                                <div className="admin-request-info">
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

                                <div className="admin-request-side">
                                    <div
                                        className={`admin-request-status ${request.status.toLowerCase()}`}
                                    >
                                        {request.status}
                                    </div>

                                    {request.status === "Pending" && (
                                        <div className="admin-request-actions">
                                            <button
                                                className="approve-request-btn"
                                                onClick={() =>
                                                    approveRequest(
                                                        request._id
                                                    )
                                                }
                                            >
                                                Approve
                                            </button>

                                            <button
                                                className="reject-request-btn"
                                                onClick={() =>
                                                    rejectRequest(
                                                        request._id
                                                    )
                                                }
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AdminRequests;