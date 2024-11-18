import { Link } from "react-router-dom";

const DonationCampaign = ({ clothe }) => {
    const { id, image, division, description, title } = clothe

    return (
        <div className="border-2 border-blue-300 rounded-lg p-4 space-y-4 h-full">
            <figure>
                <img className="h-56 w-80 rounded-xl"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="space-y-4">
                <h2 className="card-title">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <p><span className="font-semibold">Division: </span>{division}</p>
                <div className="card-actions justify-start">
                    <Link to={`/details/${id}`} className="btn bg-[#F59E0B] text-white">Donate Now</Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCampaign;