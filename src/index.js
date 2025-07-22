import ReactDOM from "react-dom/client";
import appRouter from "./appRouter.js";
import { RouterProvider } from "react-router";
const AppLayout = () =>{
    return (
    <RouterProvider router={appRouter}/>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);