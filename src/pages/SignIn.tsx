import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
import { AppDispatch } from "../store/store.ts";
import { User } from "../model/User.ts";
import { loginUser } from "../slice/UserSlice.ts";

import bgImage from "../assets/edu-bg-img -01.jpg"; // Import your background image

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    function handleLogIn(e: React.FormEvent) {
        e.preventDefault();
        const user: User = { email, password, role };
        dispatch(loginUser(user))
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Login Successful!",
                    text: "You are successfully logged in!",
                    confirmButtonColor: "#3085d6",
                }).then(() => {
                    navigate("/Dashboard");
                });
            })
            .catch((error) => {
                console.error("Error Logging: ", error);
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: "An error occurred while logging in. Please try again.",
                });
            });
    }

    return (
        <section
            className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="w-full max-w-4xl shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">

                <div className="hidden md:block bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden">
                    <img
                        src="src/assets/signup.png"
                        alt="Login Image"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-8 flex flex-col justify-center bg-white bg-opacity-10 backdrop-blur-lg ">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>

                    <form className="w-full space-y-5" onSubmit={handleLogIn}>

                        <div>
                            <label htmlFor="email" className="block text-gray-600 font-medium">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-600 font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-600 font-medium">Role</label>
                            <select
                                required
                                defaultValue=""
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option disabled value="">Choose Your Role</option>
                                <option value="ADMIN">Admin</option>
                                <option value="MANAGER">Manager</option>
                                <option value="SUPERVISORS">Supervisors</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-gray-600 text-center mt-4">
                        Don't have an account?{" "}
                        <Link to="/signUp" className="text-blue-500 font-medium hover:underline">
                            Sign Up here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
