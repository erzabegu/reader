import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { FileDetails, FilesList } from "reader/pages";

const Routes = () => {
    const routes = [
        {
            path: '*',
            element: <h1>ska kurgjo</h1>,
        },
        {
            path: '/',
            element: <FilesList />
        },
        {
            path: '/:id',
            element: <FileDetails />
        }
    ]
    const routing = useRoutes(routes);
    return <>
        {routing}
        <Outlet />
    </>;
}

export default Routes