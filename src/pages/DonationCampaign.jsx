import { Link } from "react-router-dom";

const DonationCampaign = ({ clothe }) => {
    const { id, image, division, description, title } = clothe

    return (
        <div className="border-2 flex flex-col border-blue-300 rounded-lg p-3 space-y-5">
            <figure>
                <img className="h-56 w-80 rounded-lg"
                    src={image}
                    alt="Donation" />
            </figure>
            <div className="space-y-4 flex flex-col flex-1">
                <h2 className="card-title">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <p className="flex flex-grow gap-2"><span className="font-semibold">Division: </span>{division}</p>
                <div className="card-actions">
                    <Link to={`/details/${id}`} className="btn bg-[#F59E0B] text-white flex-grow">Donate Now</Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCampaign;