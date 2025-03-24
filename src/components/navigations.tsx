import { Link } from "react-router-dom";
import { useState } from "react";
import "./navigations.css";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-teal-900 shadow-lg">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo or Brand */}
                <div className="text-white text-2xl font-semibold">EduPortal</div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6">
                    {["DashBoard", "Student", "Class", "Exam","Payment"].map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item === "DashBoard" ? "/" : `/${item.toLowerCase()}`}
                                className="text-white hover:text-teal-300 transition duration-300"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </nav>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <ul className="md:hidden bg-teal-800 py-2">
                    {["DashBoard", "Student", "Class", "Exam","Payment"].map((item, index) => (
                        <li key={index} className="px-6 py-2 border-b border-teal-700">
                            <Link
                                to={item === "DashBoard" ? "/" : `/${item.toLowerCase()}`}
                                className="text-white block"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    );
}
