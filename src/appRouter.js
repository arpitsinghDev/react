import { createBrowserRouter } from "react-router";
import Browser from "./component/Browser";
import { App } from "./App";
import { Login } from "./component/Login";
import ErrorPage from "./component/ErrorPage";
import MovieCover from "./component/MainMovie/MovieCover";
import { PopularMovie } from "./component/PopularMovie";
import { ComingMovie } from "./component/ComingMovie";
import { TopRatedMovie } from "./component/TopRatedMovie";
import { ReleasedMovie } from "./component/ReleasedMovie";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/popular",
        element: <PopularMovie />,
      },
      {
        path: "/",
        element: <Browser />,
      },
      {
        path: "/browser",
        element: <h1>Search Box</h1>,
      },
      {
        path: "/released",
        element: <ReleasedMovie />,
      },
      {
        path: "/top-rated",
        element: <TopRatedMovie />,
      },
      {
        path: "/coming-up",
        element: <ComingMovie />,
      },
      {
        path: "/movie/:id",
        element: <MovieCover />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*", // Catch-all route for unmatched paths
    element: <ErrorPage />,
  },
]);
export default appRouter;
