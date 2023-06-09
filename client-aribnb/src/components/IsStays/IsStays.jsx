import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function IsStays() {
    const [hasToken] = useState(localStorage.getItem("AccessToken"))
    return(
        (hasToken && hasToken !== "" && hasToken !== null) ? <Outlet/> : <Navigate to="/auth/sign-in" />
    )
}
export default IsStays;