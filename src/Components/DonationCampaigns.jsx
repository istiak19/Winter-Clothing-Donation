import { useLoaderData } from "react-router-dom";
import DonationCampaign from "../pages/DonationCampaign";
import { Helmet } from "react-helmet";

const DonationCampaigns = () => {
    const clothes = useLoaderData()
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-3 w-11/12 mx-auto">
            <Helmet>
                <title>DonationCampaign - Winter Clothes Donation</title>
            </Helmet>
            {
                clothes.map(clothe => <DonationCampaign key={clothe.id} clothe={clothe}></DonationCampaign>)
            }
        </div>
    );
};

export default DonationCampaigns;