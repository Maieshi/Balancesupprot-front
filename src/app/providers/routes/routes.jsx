import { createBrowserRouter } from "react-router-dom";
import { AccountsPage } from "@/pages/accounts";
import { MessagesPage } from "@/pages/messages";
import { Settings } from "@/pages/settings";
import { Login } from "@/pages/login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AccountsPage/>,
    },
    {
        path: '/messages',
        element: <MessagesPage/>,
    },
    {
        path: '/settings',
        element: <Settings/>,
    },
    {
        path: '/login',
        element: <Login/>,
    }
])

export default router