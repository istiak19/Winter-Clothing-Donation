import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdateProfile = () => {
        navigate('/update-profile'); 
    };

    return (
        <div className="max-w-lg mx-auto p-10 border border-[#F59E0B] rounded-lg shadow-md mt-10">
            <h1 className="text-3xl text-[#F59E0B] font-bold text-center mb-4">
                Welcome, {user?.displayName}!
            </h1>
            <div className="flex flex-col items-center">
                <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-24 h-24 rounded-full mb-4"
                />
                <div className="text-left w-full">
                    <p className="text-lg">
                        <span className="font-semibold">Name:</span> {user?.displayName}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold">Email:</span> {user?.email}
                    </p>
                </div>
                <button onClick={handleUpdateProfile} className="mt-5 px-10 py-3 bg-[#F59E0B] text-white rounded-md font-semibold">Update Profile</button>
            </div>
        </div>
    );
};

export default Dashboard;