import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const DetailsPage = () => {

    const clothe = useLoaderData()
    const { id, image, division, description, title, contactInfo, status } = clothe

    const handleDonationForm = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const quantity = form.get('quantity')
        const itemType = form.get('itemType')
        const pickupLocation = form.get('pickupLocation')
        const additionalNotes = form.get('additionalNotes')
        e.target.reset()
        toast.success('Thank you ! We will reach your destination soon')
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mt-10">
                <div className="border-2 border-blue-300 rounded-lg p-4 space-y-4">
                    <figure>
                        <img className="rounded-xl h-96"
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="space-y-4">
                        <h2 className="card-title">{title}</h2>
                        <p className="text-gray-600">{description}</p>
                        <p className="text-gray-600"><span className="text-black font-semibold">Status: </span>{status}</p>
                        <p className="text-gray-600"><span className="text-black font-semibold">Contact: </span>{contactInfo}</p>
                        <p><span className="font-semibold text-black">Division: </span>{division}</p>
                    </div>
                </div>
            </div>
            <div className="border-2 border-blue-300 rounded-lg p-4 mt-10">
                <form onSubmit={handleDonationForm} className="p-4 space-y-4 rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Enter quantity (e.g.,2 jackets, 3 blankets)"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Type</span>
                        </label>
                        <select
                            name="itemType"
                            className="select select-bordered"
                            required
                        >
                            <option value="" disabled>
                                Select item type
                            </option>
                            <option value="Blanket">Blanket</option>
                            <option value="Jacket">Jacket</option>
                            <option value="Sweater">Sweater</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Pickup Location</span>
                        </label>
                        <input
                            type="text"
                            name="pickupLocation"
                            placeholder="Enter pickup location"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Additional Notes</span>
                        </label>
                        <textarea
                            name="additionalNotes"
                            placeholder="Enter any additional notes (optional)"
                            className="textarea textarea-bordered"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn bg-[#F59E0B] w-full text-white">
                        Submission
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DetailsPage;