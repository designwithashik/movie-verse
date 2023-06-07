import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import SingleMovieDetails from "../Pages/SingleMovieDetails";

export const routes = createBrowserRouter([{
    path: '/',
    element: <MainLayout/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'movie/:id',
            element: <SingleMovieDetails/>
        }
    ]
}])