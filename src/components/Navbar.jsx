import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../layouts/MainLayout";

const Navbar = () => {
    const { handleLogout } = useContext(authContext);

    return (
        <div className="space-x-8 flex justify-center py-4 bg-red-300 text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/signin">Login</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/statistic">Statistic</NavLink>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Navbar;