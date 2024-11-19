import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Errors/ErrorPage";
import Home from "../Components/Home";
import DonationCampaigns from "../Components/DonationCampaigns";
import DetailsPage from "../pages/DetailsPage";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateProvider from "../providers/PrivateProvider";
import Dashboard from "../Components/Dashboard";
import Profile from "../Components/Profile";
import HowToHelp from "../Components/HowToHelp";

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
            element: <PrivateProvider><DetailsPage></DetailsPage></PrivateProvider>
         },
         {
            path: '/dashboard',
            element: <PrivateProvider><Dashboard></Dashboard></PrivateProvider>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         },
         {
            path: '/update-profile',
            element: <PrivateProvider><Profile></Profile></PrivateProvider>
         },
         {
            path:'/help',
            element:<HowToHelp></HowToHelp>
         }
      ]
   }
])

export default routers;