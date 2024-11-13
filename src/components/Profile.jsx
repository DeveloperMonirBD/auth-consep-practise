import { useContext } from "react";
import { authContext } from "../layouts/MainLayout";
import { Navigate } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(authContext)
    // console.log(user)
    // if (!user) {
    //     return <Navigate to="/signin"></Navigate>
    // }
    return (
        <div>
            I am Profile
        </div>
    );
};

export default Profile;