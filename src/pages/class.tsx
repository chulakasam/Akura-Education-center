import { useState } from "react";
import bgImage from "../assets/edu-bg-img-02.jpg";

export function Class() {
    const [className, setClassName] = useState("");
    const [teacherName, setTeacherName] = useState("");
    const [description, setDescription] = useState("");
    const [classDate, setClassDate] = useState("");

    const subjects = ["Accounting", "Biology", "Chemistry", "Physics", "Economics", "Business Studies"];

    const handleClassNameChange = (e) => {
        setClassName(e.target.value);
    };

    const handleTeacherNameChange = (e) => {
        setTeacherName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleClassDateChange = (e) => {
        setClassDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Data:", { className, teacherName, description, classDate });
        alert("Class added successfully!");


        setClassName("");
        setTeacherName("");
        setDescription("");
        setClassDate("");
    };

    return (
        <div
            className="min-h-screen flex items-center justify-left bg-cover bg-center p-6"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="bg-white bg-opacity-90 shadow-xl rounded-lg p-8 w-full max-w-lg transform transition-all duration-300">
                <h2 className="text-3xl font-bold text-gray-900 text-left mb-6">Add a New Class</h2>
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div>
                        <label className="block text-gray-800 font-medium">Class Name:</label>
                        <select
                            value={className}
                            onChange={handleClassNameChange}
                            className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select a class</option>
                            {subjects.map((subject) => (
                                <option key={subject} value={subject}>{subject}</option>
                            ))}
                        </select>
                    </div>


                    <div>
                        <label className="block text-gray-800 font-medium">Teacher Name:</label>
                        <input
                            type="text"
                            value={teacherName}
                            onChange={handleTeacherNameChange}
                            className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter teacher's name"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-gray-800 font-medium">Description:</label>
                        <textarea
                            value={description}
                            onChange={handleDescriptionChange}
                            className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter class details"
                            required
                        ></textarea>
                    </div>


                    <div>
                        <label className="block text-gray-800 font-medium">Class Date:</label>
                        <input
                            type="date"
                            value={classDate}
                            onChange={handleClassDateChange}
                            className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        Add Class
                    </button>
                </form>
            </div>
        </div>
    );
}
