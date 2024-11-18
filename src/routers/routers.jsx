import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Errors/ErrorPage";
import Home from "../Components/Home";
import DonationCampaigns from "../Components/DonationCampaigns";

const routers = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/campaigns',
            loader:()=>fetch('/clothesData.json'),
            element: <DonationCampaigns></DonationCampaigns>
         }
      ]
   }
])

export default routers;