import { useContext } from "react";
import { authContext } from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";

const Login = () => {
    const {handleSignIn} = useContext(authContext)
     const handleSubmit = e => {
         e.preventDefault();
         const email = e.target.email.value;
         const password = e.target.password.value;

         //  console.log(email, password, conPassword);
         handleSignIn(email, password)


    };
    
    return (
        <div className="flex justify-center mt-20">
            <form onSubmit={handleSubmit} action="" className="space-y-4 bg-base-200 px-20 py-14 rounded-3xl text-base">
                Email : <input name="email" placeholder="your email" className="p-2" type="text" />
                <br />
                Password : <input name="password" placeholder="your password" className="p-2" type="password" />
                <br />
                <button type="submit" className="btn w-full bg-white text-xl text-gray-500">
                    Sign In
                </button>
            </form>
            <NavLink to="/signup">Sign Up</NavLink>
        </div>
    );
};

export default Login;