import {createBrowserRouter, RouterProvider} from 'react-router';
import './App.css'
import {Provider} from "react-redux";
import {RootLayOut} from "./components/RootLayOut.tsx";
import {store} from "./store/store.ts";
import {Dashboard} from "./pages/dashboard.tsx";
import {Student} from "./pages/student.tsx";
import {Class} from "./pages/class.tsx";
import {Exam} from "./pages/exam.tsx";





function App() {
    const routes=createBrowserRouter([


        {
            path:'',
            element:<RootLayOut/>,
            children:[
                {path :'',element :<Dashboard/>},
                {path :'/student',element :<Student/>},
                {path :'/class',element :<Class/>},
                {path :'/exam',element :<Exam/>},
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