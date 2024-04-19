import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import BodyComp from "./component/BodyComp";
import About from "./component/About";
import Error from "./component/Error";
import Header from "./component/Header";
import TwoLayer from "./component/TwoLayer";
import Footer from "./component/Footer";

const AppComp = () => {
    return(
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComp />,
        children: [
            {
                path: "/",
                element: <BodyComp />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/two_layer",
                element: <TwoLayer />
            }
        ],
        errorElement: <Error />,
    },
]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);