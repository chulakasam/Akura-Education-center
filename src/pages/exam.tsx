import { useEffect, useState } from "react";
import bgImage from "../assets/edu-bg-img-02.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store.ts";
import { deleteExam, examRegister, getAllExams, saveExam } from "../slice/ExamSlice.ts";
import Exams from "../model/Exam.ts";
import ExamRegistration from "../model/ExamRegistration.ts";

type Exam = {
    id: number;
    name: string;
    date: string;
    time: string;
    hallNo: string;
    duration: string;
};

export function Exam() {
    const [nic, setNic] = useState<string>("");
    const [selectedExam, setSelectedExam] = useState<Exam | null>(null);
    const [registered, setRegistered] = useState<boolean>(false);
    const [editingExam, setEditingExam] = useState<Exam | null>(null);

    const dispatch = useDispatch<AppDispatch>();
    const exams = useSelector((state: any) => state.exam);

    // Separate useState for each field
    const [examName, setExamName] = useState<string>("");
    const [examDate, setExamDate] = useState<string>("");
    const [examTime, setExamTime] = useState<string>("");
    const [examHall, setExamHall] = useState<string>("");
    const [examDuration, setExamDuration] = useState<string>("");

    const handleRegister = (nic: string, examName: string) => {
        if (!nic) {
            alert("Please enter your NIC before registering.");
            return;
        }
       // setSelectedExam(exam);
        setRegistered(true);
        const examRegistrationDetails = new ExamRegistration(Number(nic),examName);
        dispatch(examRegister(examRegistrationDetails));
    };

    const addNewExam = () => {
        if (!examName || !examDate || !examTime || !examHall || !examDuration) {
            alert("Please fill all exam fields.");
            return;
        }
        const newExam = new Exams(examName, examDate, examTime, examHall, examDuration);
        dispatch(saveExam(newExam));

        // Reset fields
        setExamName("");
        setExamDate("");
        setExamTime("");
        setExamHall("");
        setExamDuration("");
    };

    const handleRemoveExam = (examName: string) => {
        if (window.confirm("Are you sure you want to delete this exam?")) {
            dispatch(deleteExam(examName)).then(() => {
                dispatch(getAllExams());
            });
        }
    };

    const startEditingExam = (exam: Exam) => {
        setEditingExam(exam);
        setExamName(exam.name);
        setExamDate(exam.date);
        setExamTime(exam.time);
        setExamHall(exam.hallNo);
        setExamDuration(exam.duration);
    };

    useEffect(() => {
        dispatch(getAllExams());
    }, [dispatch]);

    return (
        <div
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-6"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-3xl">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Exam Registration</h2>

                <div className="mb-4">
                    <label className="text-white font-medium block">NIC:</label>
                    <input
                        type="text"
                        value={nic}
                        onChange={(e) => setNic(e.target.value)}
                        className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your NIC"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
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

                            <div className="mt-4 flex gap-2">
                                <button
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-200"
                                    onClick={() => handleRegister(nic,exam.examName)}
                                >
                                    Register
                                </button>

                                <button
                                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-sm font-semibold hover:bg-yellow-600 transition"
                                    onClick={() => startEditingExam(exam)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition"
                                    onClick={() => handleRemoveExam(exam.name)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 p-6 bg-white bg-opacity-40 backdrop-blur-md rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-white mb-4">
                        {editingExam ? "Edit Exam" : "Add New Exam"}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            value={examName}
                            onChange={(e) => setExamName(e.target.value)}
                            className="p-2 border rounded-lg"
                            placeholder="Exam Name"
                        />
                        <input
                            type="date"
                            value={examDate}
                            onChange={(e) => setExamDate(e.target.value)}
                            className="p-2 border rounded-lg"
                        />
                        <input
                            type="time"
                            value={examTime}
                            onChange={(e) => setExamTime(e.target.value)}
                            className="p-2 border rounded-lg"
                        />
                        <input
                            type="text"
                            value={examHall}
                            onChange={(e) => setExamHall(e.target.value)}
                            className="p-2 border rounded-lg"
                            placeholder="Hall No"
                        />
                        <input
                            type="text"
                            value={examDuration}
                            onChange={(e) => setExamDuration(e.target.value)}
                            className="p-2 border rounded-lg"
                            placeholder="Duration (e.g., 60 mins)"
                        />
                    </div>
                    <button
                        className={`mt-4 px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 w-full ${
                            editingExam ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-600 hover:bg-green-700"
                        } text-white`}
                        onClick={editingExam ? () => {} : addNewExam}
                    >
                        {editingExam ? "Update Exam" : "Add Exam"}
                    </button>
                </div>
            </div>
        </div>
    );
}
