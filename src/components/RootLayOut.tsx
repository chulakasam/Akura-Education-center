import { Outlet } from "react-router";
import { Navigation } from "./navigations";

export function RootLayOut(){
    return(
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    )
}