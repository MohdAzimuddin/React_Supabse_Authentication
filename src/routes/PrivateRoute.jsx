import { Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { session,loading } = userAuth();

  if(loading){
    return(
     <div className="flex justify-center items-center h-screen">
      <div className="w-12 h-12 border-4 border-green-400 border-dashed rounded-full animate-spin"></div>
     </div>
    )
      
  }

  return <>{session ? <>{children}</> : <Navigate to="/signin" />}</>;
};

export default PrivateRoute;
