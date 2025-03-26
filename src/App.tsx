import {createBrowserRouter, RouterProvider} from 'react-router';
import './App.css'
import {Provider} from "react-redux";
import {RootLayOut} from "./components/RootLayOut.tsx";
import {store} from "./store/store.ts";
import {Dashboard} from "./pages/dashboard.tsx";
import {Student} from "./pages/student.tsx";
import {Class} from "./pages/class.tsx";
import {Exam} from "./pages/exam.tsx";
import {Payment} from "./pages/payment.tsx";
import AuthLayout from "./components/AuthLayOut.tsx";
import SignIn from "./pages/SignIn.tsx";
import {Signup} from "./pages/SignUp.tsx";





function App() {
    const routes=createBrowserRouter([
        {
            path: "",
            element: <AuthLayout />,
            children: [
                { path: "/signin", element: <SignIn /> },
                { path: "", element: <Signup /> },
            ],
        },

        {
            path:'',
            element:<RootLayOut/>,
            children:[
                {path :'/dashboard',element :<Dashboard/>},
                {path :'/student',element :<Student/>},
                {path :'/class',element :<Class/>},
                {path :'/exam',element :<Exam/>},
                {path :'/payment',element :<Payment/>},
            ]
        },

    ])

    return (
        <>
            <Provider store={store}>
                <RouterProvider router={routes}/>
            </Provider>
        </>
    )
}

export default App