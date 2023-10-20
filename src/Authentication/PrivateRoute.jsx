import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <div className="flex justify-center items-center mt-60">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if(user){
        return children;
    }

    return <Navigate 
    state={location.pathname} 
    to="/login"></Navigate> ;
};

export default PrivateRoute;