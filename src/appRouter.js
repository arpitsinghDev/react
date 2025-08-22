import { createBrowserRouter } from "react-router";
import Browser from "./component/Browser";
import { App } from "./App";
import { Login } from "./component/Login";
import ErrorPage from "./component/ErrorPage";
import MovieCover from "./component/MainMovie/MovieCover";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Browser />,
      },
      {
        path: "/Browser",
        element: <Browser />,
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
