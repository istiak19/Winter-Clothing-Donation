const HowWork = () => {
    return (
        <div className="container mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold text-[#1CABE2] mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 mb-8">
                Donating winter clothing has never been easier! Follow these simple steps to contribute and make a difference in someone's life.
            </p>

            {/* Steps to Donate */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 border border-[#1CABE2] rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-[#1CABE2] mb-4">Step 1: Choose Your Donation</h4>
                    <p className="text-gray-600">
                        Select gently used winter clothing that you wish to donate. Items like jackets, sweaters and blankets are greatly appreciated.
                    </p>
                </div>

                <div className="p-6 border border-[#1CABE2] rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-[#1CABE2] mb-4">Step 2: Fill Out the Donation Form</h4>
                    <p className="text-gray-600">
                        Fill out the donation form on our website. Specify the items you're donating, along with your contact details and preferred collection point.
                    </p>
                </div>

                <div className="p-6 border border-[#1CABE2] rounded-lg shadow-lg">
                    <h4 className="text-xl font-semibold text-[#1CABE2] mb-4">Step 3: Drop Off or Schedule Pickup</h4>
                    <p className="text-gray-600">
                        Choose a nearby collection point or schedule a pickup for your donation. We'll ensure that your contribution reaches those in need.
                    </p>
                </div>
            </div>

            {/* Collection Points */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-[#1CABE2] mb-4">Collection Points</h3>
                <p className="text-lg text-gray-700 mb-6">
                    We have several collection points across Bangladesh where you can drop off your donations. Here are a few of them:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="border border-[#1CABE2] p-6 rounded-lg shadow-lg">
                        <h4 className="text-xl font-semibold text-[#1CABE2] mb-2">Dhaka</h4>
                        <p className="text-gray-600">Community Center, Mohakhali - Drop off donations between 9 AM and 5 PM.</p>
                    </div>
                    <div className="border border-[#1CABE2] p-6 rounded-lg shadow-lg">
                        <h4 className="text-xl font-semibold text-[#1CABE2] mb-2">Chittagong</h4>
                        <p className="text-gray-600">Chittagong City Hall - Available for drop-off from 10 AM to 4 PM.</p>
                    </div>
                    <div className="border border-[#1CABE2] p-6 rounded-lg shadow-lg">
                        <h4 className="text-xl font-semibold text-[#1CABE2] mb-2">Sylhet</h4>
                        <p className="text-gray-600">Sylhet District Office - Visit us between 8 AM and 3 PM for drop-offs.</p>
                    </div>
                </div>
            </div>

            {/* Supported Divisions */}
            <div className="mt-12">
                <h3 className="text-2xl font-semibold text-[#1CABE2] mb-4">Supported Divisions</h3>
                <p className="text-lg text-gray-600 mb-6">
                    Our donation drive supports various divisions across Bangladesh. Here are the divisions where your donations will make an impact:
                </p>
                <ul className="pl-6 text-gray-600">
                    <li>Dhaka</li>
                    <li>Sylhet</li>
                    <li>Khulna</li>
                    <li>Barisal</li>
                    <li>Rajshahi</li>
                    <li>Rangpur</li>
                    <li>Chittagong</li>
                    <li>Mymensingh</li>
                </ul>
            </div>
        </div>
    );
};

export default HowWork;