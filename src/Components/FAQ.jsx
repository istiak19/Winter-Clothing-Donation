const FAQ = () => {
    return (
        <div className="w-11/12 mx-auto my-12 flex flex-col gap-5">
            <h2 className="text-3xl font-semibold mb-10 text-center">Frequently Asked <span className="text-[#F59E0B]">Questions</span></h2>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">How do I donate winter clothing?</div>
                <div className="collapse-content">
                    <p>To donate winter clothing, simply fill out the donation form on our website. You can choose to drop off your items at a collection point or schedule a pickup.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What type of clothing can I donate?</div>
                <div className="collapse-content">
                    <p>We accept gently used winter clothing such as jackets, sweaters and blankets. Please ensure the items are clean and in good condition.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Can I volunteer for this cause?</div>
                <div className="collapse-content">
                    <p>Yes! Volunteers are an essential part of the donation process. You can help with spreading awareness, collecting donations, and distributing clothes to those in need.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Are donations tax-deductible?</div>
                <div className="collapse-content">
                    <p>At this time, donations are not tax-deductible, but we ensure that all contributions go directly to those in need.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;