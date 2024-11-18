import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Errors/ErrorPage";
import Home from "../Components/Home";
import DonationCampaigns from "../Components/DonationCampaigns";
import DetailsPage from "../pages/DetailsPage";

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
            loader: () => fetch('/clothesData.json'),
            element: <DonationCampaigns></DonationCampaigns>
         },
         {
            path: '/details/:id',
            loader: async ({ params }) => {
               const clothesRes = await fetch('/clothesData.json')
               const clothes = await clothesRes.json()
               const clothe = clothes.find(c => c.id == params.id)
               return clothe
            },
            element: <DetailsPage></DetailsPage>
         }
      ]
   }
])

export default routers;