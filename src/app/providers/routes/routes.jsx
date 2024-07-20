import { createBrowserRouter } from "react-router-dom";
import { AccountsPage } from "@/pages/accounts";


const router = createBrowserRouter([
    {
        path: '/',
        element: <AccountsPage/>,
    }
])

export default router