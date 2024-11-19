import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateProvider = ({children}) => {
    const {user}=useContext(AuthContext)
    if(user){
        return children
    }
    return (
        <div>
           <Navigate to='/login'></Navigate> 
        </div>
    );
};

export default PrivateProvider;