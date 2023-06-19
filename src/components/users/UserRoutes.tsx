import { createBrowserRouter, RouterProvider, Outlet, } from "react-router-dom"
import { Suspense, lazy, useState, useEffect } from "react"
import Loader from "../Loader"
import Createworkspace from "./Createworkspace"
const Login = lazy(() => import("./Login"))
const SignUp = lazy(() => import("./SignUp"))
const DashBoard = lazy(() => import("../DashBoard/DashBoard"))
const UserRoutes = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(loader, 1000)
    }, [])
    const loader = () => {
        setLoading(false)
    }
    if (loading) {
        return <h1><Loader/></h1>
    } else {
        <SignUp/>
    }
    const router = createBrowserRouter([
        {
            path: 'dashboard',
            element: <Suspense fallback={<><p>Loading.....</p></>}><DashBoard /></Suspense>
        },
        {
            path: 'login',
            element: <Suspense fallback={<><p>Loading.....</p></>}><Login /></Suspense>
        }, {
        path: '/',
        element: <Suspense fallback={<><p>Loading.......</p></>}><SignUp /></Suspense>
        }, {
        path: '/workspace',
            element: <Suspense><Createworkspace/></Suspense>
    }
    ])

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default UserRoutes