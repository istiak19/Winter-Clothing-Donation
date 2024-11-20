import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
import { FcDonate } from "react-icons/fc";
import { GiClothes } from "react-icons/gi";
import { IoShareSocial } from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HowToHelp = () => {
    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="py-10 px-5 md:px-16">
            <Helmet>
                <meta charSet="utf-8" />
                <title>HowToHelp - Winter Clothes Donation</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center text-[#F59E0B] mb-8" data-aos="fade-up">How to Help</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="card shadow-md p-6 text-center border border-[#1CABE2]"data-aos="flip-left">
                    <GiClothes className="text-4xl text-[#F59E0B] mx-auto mb-4"></GiClothes>
                    <h3 className="text-lg font-semibold text-[#1CABE2]">Donate Warm Clothes</h3>
                    <p className="text-gray-600">
                        Pack unused warm clothes and schedule a pickup or drop-off using our donation form.
                    </p>
                </div>
                <div className="card shadow-md p-6 text-center border border-[#1CABE2]"data-aos="flip-left">
                    <MdOutlineVolunteerActivism className="text-4xl text-[#F59E0B] mx-auto mb-4"></MdOutlineVolunteerActivism>
                    <h3 className="text-lg font-semibold text-[#1CABE2]">Volunteer Your Time</h3>
                    <p className="text-gray-600">
                        Join our team to help collect and distribute donations. Sign up as a volunteer!
                    </p>
                </div>
                <div className="card shadow-md p-6 text-center border border-[#1CABE2]"data-aos="flip-left">
                    <IoShareSocial className="text-4xl text-[#F59E0B] mx-auto mb-4"></IoShareSocial>
                    <h3 className="text-lg font-semibold text-[#1CABE2]">Spread the Word</h3>
                    <p className="text-gray-600">
                        Share this initiative with your network and use the hashtag <b>#WarmBangladesh</b>.
                    </p>
                </div>
                <div className="card shadow-md p-6 text-center border border-[#1CABE2]"data-aos="flip-left">
                    <FcDonate className="text-4xl text-[#1CABE2] mx-auto mb-4"></FcDonate>
                    <h3 className="text-lg font-semibold text-[#1CABE2]">Donate Funds</h3>
                    <p className="text-gray-600">
                        Support us financially to help with logistics and purchase additional clothing items.
                    </p>
                </div>
            </div>

            <div className="mt-8 text-center" data-aos="fade-up">
                <button onClick={() => navigate('/campaigns')} className="btn bg-[#F59E0B] text-white mx-2">Donate Now</button>
            </div>
        </div>
    );
};

export default HowToHelp;