/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../layouts/MainLayout";

const PrivetRoute = ({ children }) => {
    console.log(children);
    const {user, loading} = useContext(authContext)
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (!user) {
        return <Navigate to="/signin"></Navigate>
    }
    return <div>{children}</div>;
};

export default PrivetRoute;