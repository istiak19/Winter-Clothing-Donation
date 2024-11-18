import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <footer className="mt-96">
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;