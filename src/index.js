import ReactDOM from "react-dom/client";
import appRouter from "./appRouter";
import { RouterProvider } from "react-router";

import { Provider } from "react-redux";
import  store  from "./utility/appStore";
import React from "react";
const AppLayout = () =>{
    return (
        <Provider store={store}>
            <RouterProvider router={appRouter}/>
        </Provider>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);