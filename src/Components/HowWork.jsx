import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HowWork = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="w-11/12 mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold text-[#F59E0B] mb-4" data-aos="fade-up">How It Works</h2>
            <p className="text-lg text-gray-600 mb-8" data-aos="fade-up">
                Donating winter clothing has never been easier! Follow these simple steps to contribute and make a difference in someone's life.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 border border-[#1CABE2] rounded-lg shadow-lg" data-aos="fade-right">
                    <h4 className="text-xl font-semibold text-[#1CABE2] mb-4">Step 1: Choose Your Donation</h4>
                    <p className="text-gray-600 italic">
                        Select gently used winter clothing that you wish to donate. Items like jackets, sweaters and blankets are greatly appreciated.
                    </p>
                </div>
                <div className="p-6 border border-[#1CABE2] rounded-lg shadow-lg" data-aos="fade-up">
                    <h4 className="text-xl font-semibold text-[#1CABE2] mb-4">Step 2: Fill Out the Donation Form</h4>
                    <p className="text-gray-600 italic">
                        Fill out the donation form on our website. Specify the items you're donating, along with your contact details and preferred collection point.
                    </p>
                </div>
                <div className="p-6 border border-[#1CABE2] rounded-lg shadow-lg" data-aos="fade-left">
                    <h4 className="text-xl font-semibold text-[#1CABE2] mb-4">Step 3: Drop Off or Schedule Pickup</h4>
                    <p className="text-gray-600 italic">
                        Choose a nearby collection point or schedule a pickup for your donation. We'll ensure that your contribution reaches those in need.
                    </p>
                </div>
            </div>
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-[#1CABE2] mb-4" data-aos="fade-up">Collection Points</h3>
                <p className="text-lg text-gray-700 mb-6" data-aos="fade-up">
                    We have several collection points across Bangladesh where you can drop off your donations. Here are a few of them:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border border-[#1CABE2] p-6 rounded-lg shadow-lg" data-aos="zoom-in">
                        <h4 className="text-xl font-semibold text-[#1CABE2] mb-2">Dhaka</h4>
                        <p className="text-gray-600 italic">Community Center, Mohakhali - Drop off donations between 9 AM and 5 PM.</p>
                    </div>
                    <div className="border border-[#1CABE2] p-6 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="200">
                        <h4 className="text-xl font-semibold text-[#1CABE2] mb-2">Chittagong</h4>
                        <p className="text-gray-600 italic">Chittagong City Hall - Available for drop-off from 10 AM to 4 PM.</p>
                    </div>
                    <div className="border border-[#1CABE2] p-6 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="400">
                        <h4 className="text-xl font-semibold text-[#1CABE2] mb-2">Sylhet</h4>
                        <p className="text-gray-600 italic">Sylhet District Office - Visit us between 8 AM and 3 PM for drop-offs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWork;