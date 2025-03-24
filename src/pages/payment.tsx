import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bgImage from "../assets/edu-bg-img-02.jpg";

export function Payment() {
    const [students, setStudents] = useState([]);
    const [exams, setExams] = useState([]);
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        // Fetch data for students, exams, and classes from the API
        const fetchData = async () => {
            try {
                const studentsRes = await axios.get('http://localhost:3000/student/view');
                const examsRes = await axios.get('http://localhost:3000/exam/view');
                const classesRes = await axios.get('http://localhost:3000/class/view');

                setStudents(studentsRes.data);
                setExams(examsRes.data);
                setClasses(classesRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-6" style={{ backgroundImage: `url(${bgImage})` }}>
            <h1 className="text-4xl font-bold text-white mb-8">Payments</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {/* Exam Payment Section */}
                <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-200 transform hover:scale-105 transition duration-300">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Exam Payment</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium">Student Name</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" placeholder="Enter student name" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Student ID</label>
                            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" required>
                                <option value="">Select Student NIC</option>
                                {students.map(student => (
                                    <option key={student.nic} value={student.nic}>{student.nic}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Exam Name</label>
                            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" required>
                                <option value="">Select Exam Name</option>
                                {exams.map(exam => (
                                    <option key={exam.examName} value={exam.examName}>{exam.examName}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Amount (USD)</label>
                            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" placeholder="Enter amount" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">Make Exam Payment</button>
                    </form>
                </div>

                {/* Class Payment Section */}
                <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-200 transform hover:scale-105 transition duration-300">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Class Payment</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium">Student Name</label>
                            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200" placeholder="Enter student name" required />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Student ID</label>
                            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200" required>
                                <option value="">Select Student NIC</option>
                                {students.map(student => (
                                    <option key={student.nic} value={student.nic}>{student.nic}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Class Name</label>
                            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200" required>
                                <option value="">Select Class Name</option>
                                {classes.map(cls => (
                                    <option key={cls.className} value={cls.className}>{cls.className}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium">Amount (USD)</label>
                            <input type="number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-green-200" placeholder="Enter amount" required />
                        </div>
                        <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">Make Class Payment</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
