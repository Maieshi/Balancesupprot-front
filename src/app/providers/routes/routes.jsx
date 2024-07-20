import { createBrowserRouter } from "react-router-dom";
import { AddAccountPage } from "@/pages/add-account";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AddAccountPage/>,
    }
])

export default router