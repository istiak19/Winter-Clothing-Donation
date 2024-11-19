import React from "react";
import { Helmet } from "react-helmet";
import { FaTshirt, FaHandHoldingHeart, FaShareAlt, FaDonate } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HowToHelp = () => {
    const navigate = useNavigate()

    return (
        <div className="py-10 px-5 md:px-16">
            <Helmet>
                <meta charSet="utf-8" />
                <title>HowToHelp - Winter Clothes Donation</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center text-[#1CABE2] mb-8">How to Help</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="card shadow-md p-6 text-center border border-[#1CABE2]">
                    <FaTshirt className="text-4xl text-[#1CABE2] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[#1CABE2]">Donate Warm Clothes</h3>
                    <p className="text-gray-600">
                        Pack unused warm clothes and schedule a pickup or drop-off using our donation form.
                    </p>
                </div>
                <div className="card shadow-md p-6 text-center border border-[#1CABE2]">
                    <FaHandHoldingHeart className="text-4xl text-[#1CABE2] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[#1CABE2]">Volunteer Your Time</h3>
                    <p className="text-gray-600">
                        Join our team to help collect and distribute donations. Sign up as a volunteer!
                    </p>
                </div>
                <div className="card shadow-md p-6 text-center border border-[#1CABE2]">
                    <FaShareAlt className="text-4xl text-[#1CABE2] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[#1CABE2]">Spread the Word</h3>
                    <p className="text-gray-600">
                        Share this initiative with your network and use the hashtag <b>#WarmBangladesh</b>.
                    </p>
                </div>
                <div className="card shadow-md p-6 text-center border border-[#1CABE2]">
                    <FaDonate className="text-4xl text-[#1CABE2] mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[#1CABE2]">Donate Funds</h3>
                    <p className="text-gray-600">
                        Support us financially to help with logistics and purchase additional clothing items.
                    </p>
                </div>
            </div>

            <div className="mt-8 text-center">
                <button onClick={() => navigate('/campaigns')} className="btn bg-[#1CABE2] text-white mx-2">Donate Now</button>
            </div>
        </div>
    );
};

export default HowToHelp;