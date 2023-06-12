import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"
const UserRoutes = () => {
    const router = createBrowserRouter([{
        path: 'login',
        element: <Login />
    }, {
        path: '/',
        element: <SignUp />
    }
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default UserRoutes