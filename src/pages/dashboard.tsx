import { FaUsers, FaBook, FaChalkboardTeacher, FaClipboardList } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../assets/edu-bg-img -01.jpg";

export function Dashboard() {
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
