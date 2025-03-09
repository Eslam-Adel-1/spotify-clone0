// useContext Imports
import { useContext } from "react";
import { userContext } from "../../useContext/userContext.jsx";

// React Router Imports
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user } = useContext(userContext);

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoutes;
