import { useEffect, useState } from "react";
import bgImage from "../assets/edu-bg-img-02.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store.ts";
import { getAllClasses, saveClass } from "../slice/ClassSlice.ts";
import Classes from "../model/Classes.ts";

export function Class() {
    const [className, setClassName] = useState("");
    const [teacherName, setTeacherName] = useState("");
    const [description, setDescription] = useState("");
    const [classDate, setClassDate] = useState("");

    const dispatch = useDispatch<AppDispatch>();

    const subjects = ["Accounting", "Biology", "Chemistry", "Physics", "Economics", "Business Studies"];

    // Fetch classes from the Redux store
    const classes = useSelector((state: any) => state.class);


    const handleClassNameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setClassName(e.target.value);
    };

    const handleTeacherNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTeacherName(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handleClassDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClassDate(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted Data:", { className, teacherName, description, classDate });
        alert("Class added successfully!");

        const newClass = new Classes(className, teacherName, description, classDate);

        dispatch(saveClass(newClass));

        // Reset form fields
        setClassName("");
        setTeacherName("");
        setDescription("");
        setClassDate("");
    };
    useEffect(() => {
        dispatch(getAllClasses());
    }, [dispatch]);


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

            {/* Table to display all classes */}
            <div className="w-full max-w-7xl mx-auto mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">All Classes</h3>
                <table className="min-w-full table-auto">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 text-left text-white">Class Name</th>
                        <th className="px-4 py-2 text-left text-white">Teacher Name</th>
                        <th className="px-4 py-2 text-left text-white">Description</th>
                        <th className="px-4 py-2 text-left text-white">Class Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(classes) && classes.length > 0 ? (
                        classes.map((cls: Classes) => (
                            <tr key={cls.className} className="border-b  hover:bg-gray-100">
                                <td className="px-4 py-2 text-gray-700">{cls.className}</td>
                                <td className="px-4 py-2 text-gray-700">{cls.teacherName}</td>
                                <td className="px-4 py-2 text-gray-700">{cls.description}</td>
                                <td className="px-4 py-2 text-gray-400">{cls.date}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                                No classes available
                            </td>
                        </tr>
                    )}

                    </tbody>
                </table>
            </div>
        </div>
    );
}
