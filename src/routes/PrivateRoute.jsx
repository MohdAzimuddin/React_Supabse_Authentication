import { Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { session } = userAuth();
  return <>{session ? <>{children}</> : <Navigate to="/signin" />}</>;
};

export default PrivateRoute;
