import { useEffect, useState } from "react";

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
        <div>
            <h1>Adoption Requests</h1>

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

                        {request.status === "Pending" && (
                            <div>
                                <button
                                    onClick={() =>
                                        approveRequest(request._id)
                                    }
                                >
                                    Approve
                                </button>

                                <button
                                    onClick={() =>
                                        rejectRequest(request._id)
                                    }
                                >
                                    Reject
                                </button>
                            </div>
                        )}
                    </div>
                ))
            )}
        </div>
    );
}

export default AdminRequests;