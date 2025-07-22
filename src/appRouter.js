import { createBrowserRouter } from "react-router";
import Browser from "./component/Browser";
import { App } from "./App";
import { Login } from "./component/Login";

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
            defaultElement: <h1>Page not found</h1>
        }
    ])
export default appRouter;