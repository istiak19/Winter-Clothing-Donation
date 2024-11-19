import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch("/testimonials.json")
            .then((res) => res.json())
            .then((data) => setTestimonials(data));

        AOS.init({
            duration: 2000,
            offset: 50,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="w-11/12 mx-auto text-center px-4 py-12">
            <h2 className="text-3xl font-semibold text-[#1CABE2] mb-4">
                What People Are Saying
            </h2>
            <p className="text-lg text-gray-600 mb-8">
                Hear from the people whose lives have been changed by your generosity. These donations make a world of difference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg border border-[#1CABE2]"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <p className="text-gray-600 italic mb-4">
                            "{testimonial.message}"
                        </p>
                        <h4 className="text-xl font-semibold text-[#1CABE2]">
                            {testimonial.name}
                        </h4>
                        <p className="text-gray-500">{testimonial.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;