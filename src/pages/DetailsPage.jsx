import { Link, useLoaderData } from "react-router-dom";

const DetailsPage = () => {

    const clothe = useLoaderData()
    const { id, image, division, description, title, contactInfo, status } = clothe

    return (
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
    );
};

export default DetailsPage;