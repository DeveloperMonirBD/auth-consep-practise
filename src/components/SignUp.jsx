import { useContext } from "react";
import { authContext } from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";

const SignUp = () => {
    const { handleSignUp } = useContext(authContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPassword = e.target.conPassword.value;
        if (password.length < 6) {
            alert("Password must be at least 6 characters")
            return;
        }
        if (password != conPassword) {
            alert("Password didn't match")
            return;
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})(?=.*[$#%&@*!^~]).+$/.test(password)) {
            alert('Password not valid');
            return;
        }


        // console.log(email, password, conPassword)
        handleSignUp(email, password)
    }
    return (
        <div className="flex justify-center mt-20">
            <form onSubmit={handleSubmit} action="" className="space-y-4 bg-base-200 px-20 py-14 rounded-3xl text-base">
                Email : <input name="email" placeholder="your email" className="p-2" type="text" />
                <br />
                Password : <input name="password" placeholder="your password" className="p-2" type="name" />
                <br />
                Conform Password : <input name="conPassword" placeholder="your conform password" className="p-2" type="name" />
                <br />
                <button type="submit" className="btn w-full bg-white text-xl text-gray-500">
                    Sign Up
                </button>
            </form>
            <NavLink to="/signin">Sign in</NavLink>
        </div>
    );
};

export default SignUp;