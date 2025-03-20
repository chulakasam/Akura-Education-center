import { FaUsers, FaBook, FaChalkboardTeacher, FaClipboardList, FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../assets/edu-bg-img -01.jpg";
import { useState, useEffect } from "react";

export function Dashboard() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="relative min-h-screen bg-cover bg-center flex flex-col p-6 text-white"
            style={{ backgroundImage: `url(${bgImage})` }}
        >

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="relative z-10">

                <header className="bg-white bg-opacity-20 backdrop-blur-lg shadow-md rounded-xl p-4 flex justify-between items-center border border-white border-opacity-10">
                    <h1 className="text-2xl font-semibold">📊 Dashboard</h1>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow-lg">
                        Logout
                    </button>
                </header>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <StatCard icon={<FaUsers />} title="Total Students" value="1,200" />
                    <StatCard icon={<FaBook />} title="Courses" value="45" />
                    <StatCard icon={<FaChalkboardTeacher />} title="Teachers" value="75" />
                    <StatCard icon={<FaClipboardList />} title="Exams Scheduled" value="12" />
                </section>

                {/* Date and Time Section */}
                <section className="mt-6 flex flex-col md:flex-row gap-6">
                    <motion.div
                        className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white border-opacity-10 w-full md:w-1/2 text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-lg font-semibold flex items-center justify-center gap-2">
                            <FaClock /> Current Time
                        </h2>
                        <p className="text-3xl font-bold mt-2">{time.toLocaleTimeString()}</p>
                    </motion.div>

                    <motion.div
                        className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-xl p-6 border border-white border-opacity-10 w-full md:w-1/2"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-lg font-semibold flex items-center justify-center gap-2">
                            <FaCalendarAlt /> Calendar
                        </h2>
                        <Calendar />
                    </motion.div>
                </section>

                <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <motion.div
                        className="bg-white bg-opacity-20 backdrop-blur-lg shadow-xl rounded-xl p-6 border border-white border-opacity-10"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-lg font-semibold">📈 Student Performance Overview</h2>
                        <div className="h-48 bg-gray-300 bg-opacity-20 rounded-lg mt-4 flex items-center justify-center text-gray-400 text-2xl">
                            📊 Chart Placeholder
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-white bg-opacity-20 backdrop-blur-lg shadow-xl rounded-xl p-6 border border-white border-opacity-10"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-lg font-semibold">📢 Recent Announcements</h2>
                        <ul className="mt-4 space-y-3 text-gray-200">
                            <li className="border-b border-gray-500 pb-2">📢 Midterm exams start next week!</li>
                            <li className="border-b border-gray-500 pb-2">📅 School trip scheduled for next month.</li>
                            <li>📝 Assignments deadline extended to Friday.</li>
                        </ul>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}

function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
    return (
        <motion.div
            className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-xl p-5 flex items-center space-x-4 border border-white border-opacity-10 transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
        >
            <div className="text-teal-300 text-4xl">{icon}</div>
            <div>
                <p className="text-gray-200">{title}</p>
                <h2 className="text-3xl font-bold">{value}</h2>
            </div>
        </motion.div>
    );
}

function Calendar() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    const currentMonth = today.toLocaleString("default", { month: "long" });
    const currentYear = today.getFullYear();

    // Generate the days of the month
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const calendarDays = Array(firstDay).fill("").concat([...Array(daysInMonth).keys()].map(i => i + 1));

    return (
        <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg">
            <h3 className="text-center text-lg font-semibold text-white">{currentMonth} {currentYear}</h3>
            <div className="grid grid-cols-7 gap-2 mt-3 text-center">
                {days.map(day => (
                    <div key={day} className="font-bold text-gray-300">{day}</div>
                ))}
                {calendarDays.map((day, index) => (
                    <div
                        key={index}
                        className={`p-2 rounded-lg ${day === today.getDate() ? "bg-blue-500 text-white" : "text-gray-200"}`}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
    );
}
