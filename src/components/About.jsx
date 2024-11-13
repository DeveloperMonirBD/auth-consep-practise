import { useContext } from "react";
import { authContext } from "../layouts/MainLayout";
import { Navigate } from "react-router-dom";

const About = () => {
    const { handleGoogleLogin, user } = useContext(authContext);

    // console.log(user);
    // if (!user) {
    //     return <Navigate to="/signin"></Navigate>;
    // }

    return (
        <div>
            {user?.displayName}
            {user?.email}
            <button onClick={handleGoogleLogin} className="btn">
                Google login
            </button>
        </div>
    );
};

export default About;