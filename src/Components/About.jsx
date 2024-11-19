const About = () => {
    return (
        <div className="w-11/12 mx-auto text-center px-4 py-12">
            <h2 className="text-3xl font-semibold text-[#1CABE2] mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
                At Winter Donation, our mission is simple: to help vulnerable communities in Bangladesh
                stay warm during the cold winter months. By connecting generous donors with volunteers,
                we make it easy for people to contribute clothing and bring warmth to those who need it
                most.
            </p>
            <h3 className="text-2xl font-semibold text-[#1CABE2] mb-4">How You Can Contribute</h3>
            <p className="text-lg text-gray-600 mb-8">
                Your contributions can make a real difference. Here are some ways you can help:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 border border-[#1CABE2] rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-semibold text-[#1CABE2] mb-4">Donate Clothing</h4>
                    <p className="text-gray-600">
                        Clean, gently used winter clothing can help a family or individual survive the cold
                        months. Simply fill out the donation form and choose where to drop off your items.
                    </p>
                </div>
                <div className="p-6 border border-[#1CABE2] rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-semibold text-[#1CABE2] mb-4">Volunteer Your Time</h4>
                    <p className="text-gray-600">
                        Volunteers are the heart of this mission. Help by spreading the word, assisting with
                        collection drives, or distributing donations to those in need.
                    </p>
                </div>
                <div className="p-6 border border-[#1CABE2] rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-xl font-semibold text-[#1CABE2] mb-4">Spread the Word</h4>
                    <p className="text-gray-600">
                        Share our mission with friends and family. The more people who know about our cause,
                        the more support we can receive. Every little bit counts!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;