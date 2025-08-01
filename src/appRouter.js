import { createBrowserRouter } from "react-router";
import Browser from "./component/Browser";
import { App } from "./App";
import { Login } from "./component/Login";
import ErrorPage from "./component/ErrorPage"
const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: "/browser",
            element: <Browser />
        },
        {
            path: "/login",
            element: <Login />
        },
         {
    path: "*", // Catch-all route for unmatched paths
    element: <ErrorPage />,
  }
    ])
export default appRouter;