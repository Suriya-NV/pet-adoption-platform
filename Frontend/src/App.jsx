import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BrowsePets from "./pages/BrowsePets";
import PostPet from "./pages/PostPet";
import About from "./pages/About";
import Admin from "./pages/Admin";
import AdoptPet from "./pages/AdoptPet";
import MyRequests from "./pages/MyRequests";
import AdminRequests from "./pages/AdminRequests";
import Profile from "./pages/Profile";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/browse-pets" element={<BrowsePets />} />
                <Route path="/post-pet" element={<PostPet />} />
                <Route path="/about" element={<About />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/adopt" element={<AdoptPet />} />
                <Route path="/my-requests" element={<MyRequests />} />
                <Route path="/admin-requests" element={<AdminRequests />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
