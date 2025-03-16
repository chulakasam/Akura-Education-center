import { useEffect, useState } from "react";
import bgImage from "../assets/edu-bg-img-02.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store.ts";
import { getAllExams, saveExam } from "../slice/ExamSlice.ts";
import Exams from "../model/Exam.ts";

// Define TypeScript type for Exam
type Exam = {
    id: number;
    name: string;
    date: string;
    time: string;
    hallNo: string;
    duration: string;
};

export function Exam() {
    const [studentName, setStudentName] = useState<string>("");
    const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
    const [registered, setRegistered] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    // Fetch exams from the Redux store
    const exams = useSelector((state:any) => state.exam);

    // State for new exam inputs
    const [newExam, setNewExam] = useState<Partial<Exam>>({
        name: "",
        date: "",
        time: "",
        hallNo: "",
        duration: "",
    });

    // Handle registration
    const handleRegister = (exam: Exam) => {
        if (!studentName) {
            alert("Please enter your name before registering.");
            return;
        }
        setSelectedExam(exam);
        setRegistered(true);
    };
    console.log(exams)

    // Handle input change for new exam
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewExam({ ...newExam, [e.target.name]: e.target.value });
    };

    // Handle new exam submission
    const addNewExam = () => {
        if (!newExam.name || !newExam.date || !newExam.time || !newExam.hallNo || !newExam.duration) {
            alert("Please fill all exam fields.");
            return;
        }
        const exam = new Exams(newExam.name, newExam.date, newExam.time, newExam.hallNo, newExam.duration);
        dispatch(saveExam(exam));
    };

    useEffect(() => {
        dispatch(getAllExams()); // Fetch all exams from the store
    }, [dispatch]);

    return (
        <div
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-6"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content */}
            <div className="relative bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-3xl">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Exam Registration</h2>

                {/* Student Name Input */}
                <div className="mb-4">
                    <label className="text-white font-medium block">Student Name:</label>
                    <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Exam List as Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exams.map((exam) => (
                        <div
                            key={exam.id}
                            className="flex flex-col justify-between p-6 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-md"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-white">{exam.examName}</h3>
                                <p className="text-sm text-gray-200">Date: {exam.examDate}</p>
                                <p className="text-sm text-gray-200">Time: {exam.examTime}</p>
                                <p className="text-sm text-gray-200">Hall No: {exam.examHall}</p>
                                <p className="text-sm text-gray-200">Duration: {exam.duration}</p>
                            </div>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-200"
                                onClick={() => handleRegister(exam)}
                            >
                                Register
                            </button>
                        </div>
                    ))}
                </div>

                {/* Add New Exam Form */}
                <div className="mt-6 p-6 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-white mb-4">Add New Exam</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            value={newExam.name}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg"
                            placeholder="Exam Name"
                        />
                        <input
                            type="date"
                            name="date"
                            value={newExam.date}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg"
                        />
                        <input
                            type="time"
                            name="time"
                            value={newExam.time}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg"
                        />
                        <input
                            type="text"
                            name="hallNo"
                            value={newExam.hallNo}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg"
                            placeholder="Hall No"
                        />
                        <input
                            type="text"
                            name="duration"
                            value={newExam.duration}
                            onChange={handleInputChange}
                            className="p-2 border rounded-lg"
                            placeholder="Duration (e.g., 60 mins)"
                        />
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition duration-200 w-full"
                        onClick={addNewExam}
                    >
                        Add Exam
                    </button>
                </div>

                {/* Confirmation Message */}
                {registered && selectedExam && (
                    <div className="mt-6 p-4 bg-green-600 text-white rounded-lg text-center">
                        Successfully registered for <strong>{selectedExam.name}</strong> on {selectedExam.date} at {selectedExam.time} in Hall {selectedExam.hallNo}.
                    </div>
                )}
            </div>
        </div>
    );
}
