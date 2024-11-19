import { Helmet } from "react-helmet";
import About from "./About";
import Banner from "./Banner";
import FAQ from "./FAQ";
import HowWork from "./HowWork";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Home - Winter Clothes Donation
                </title>
            </Helmet>
           <Banner></Banner>
           <About></About>
           <HowWork></HowWork>
           <Testimonials></Testimonials>
           <FAQ></FAQ>
        </div>
    );
};

export default Home;