import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store.ts";
import { User } from "../model/User.ts";
import { registerUser } from "../slice/UserSlice.ts";

import bgImage from "../assets/edu-bg-img -01.jpg"; // Import your background image

export function Signup() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [role, setRole] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    function handleRegister(e: React.FormEvent) {
        e.preventDefault();

        if (!email || !password || !role) {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'All fields are required. Please fill in all the fields before saving.',
                confirmButtonColor: '#3085d6',
            });
            return;
        }
        const user: User = { email: email, password: password, role: role };
        dispatch(registerUser(user)).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'User Registered!',
                text: 'The User has been successfully Registered.',
                confirmButtonColor: '#3085d6',
            }).then(() => {
                navigate("/SignIn");
            });
        }).catch((error) => {
            console.error('Error adding User: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Register Failed',
                text: 'An error occurred while saving the User. Please try again.',
            });
        });
    }

    return (
        <section
            className="flex items-center justify-center min-h-screen p-5 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="flex w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/2 hidden md:block">
                    <img src="src/assets/signup.png" alt="Signup" className="w-full h-full object-cover" />
                </div>

                <div className="w-full md:w-1/2 bg-white bg-opacity-10 backdrop-blur-lg p-8 text-white flex flex-col items-center">
                    <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

                    <form className="w-full space-y-4" onSubmit={handleRegister}>
                        <div>
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Enter email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-1">Role</label>
                            <select
                                required
                                defaultValue=""
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                            >
                                <option disabled value="">Choose Your Role</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="MANAGER">MANAGER</option>
                                <option value="SUPERVISORS">SUPERVISORS</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300"
                        >
                            Sign Up
                        </button>

                        <p className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link to="/SignIn" className="underline hover:text-blue-300">
                                Sign In
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
