import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {
    const { updateProfileUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        updateProfileUser({ displayName: name, photoURL: photo })
            .then(() => {
                navigate("/dashboard");
                toast.success("Profile updated successfully!");
            })
            .catch((error) => {
                console.log(error.message)
            })
    };

    return (
        <div className="max-w-lg mx-auto p-5 rounded-lg shadow-md mt-10 border border-[#F59E0B]">
            <h1 className="text-2xl font-bold text-center mb-4">
                Update Profile
            </h1>
            <form onSubmit={handleUpdate} className="flex flex-col">
                <label className="mb-2 text-lg font-semibold">
                    Name
                </label>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="mb-4 px-3 py-2 border rounded"
                />
                <label className="mb-2 text-lg font-semibold">
                    Photo URL
                </label>
                <input
                    type="text"
                    placeholder="Photo"
                    name="photo"
                    className="mb-4 px-3 py-2 border rounded"
                />
                <button
                    className="px-4 py-2 text-white rounded-md bg-[#F59E0B]"
                >
                    Update Information
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
