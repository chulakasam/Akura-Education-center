import {createBrowserRouter, RouterProvider} from 'react-router';
import './App.css'
import {Provider} from "react-redux";
import {RootLayOut} from "./components/RootLayOut.tsx";
import {store} from "./store/store.ts";





function App() {
    const routes=createBrowserRouter([


        {
            path:'',
            element:<RootLayOut/>,
            children:[

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