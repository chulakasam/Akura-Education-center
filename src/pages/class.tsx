import { useEffect, useState } from "react";
import bgImage from "../assets/edu-bg-img-02.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store.ts";
import {deleteClass, getAllClasses, saveClass} from "../slice/ClassSlice.ts";
import Classes from "../model/Classes.ts";

export function Class() {
    const [className, setClassName] = useState("");
    const [teacherName, setTeacherName] = useState("");
    const [description, setDescription] = useState("");
    const [classDate, setClassDate] = useState("");
    const [editingClass, setEditingClass] = useState<Classes | null>(null);

    const dispatch = useDispatch<AppDispatch>();

    const subjects = ["Accounting", "Biology", "Chemistry", "Physics", "Economics", "Business Studies"];


    const classes = useSelector((state: any) => state.class);

    useEffect(() => {
        dispatch(getAllClasses());
    }, [dispatch]);

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

        if (editingClass) {
            // Update existing class
           // const updatedClass = { ...editingClass, className, teacherName, description, classDate };
            //dispatch(updateClass(updatedClass));
            setEditingClass(null);
        } else {
            // Add new class
            const newClass = new Classes(className, teacherName, description, classDate);
            dispatch(saveClass(newClass));
        }

        alert("Class saved successfully!");


        setClassName("");
        setTeacherName("");
        setDescription("");
        setClassDate("");
    };

    const handleEdit = (cls: Classes) => {
        setEditingClass(cls);
        setClassName(cls.className);
        setTeacherName(cls.teacherName);
        setDescription(cls.description);
        setClassDate(cls.date);
    };

    const handleDelete = (className: string) => {
        if (window.confirm("Are you sure you want to delete this class?")) {
            dispatch(deleteClass(className)).then(() => {
                dispatch(getAllClasses());
            });

        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-cover bg-center p-6" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="bg-white bg-opacity-90 shadow-xl rounded-lg p-8 w-full max-w-lg transform transition-all duration-300">
                <h2 className="text-3xl font-bold text-gray-900 text-left mb-6">
                    {editingClass ? "Update Class" : "Add a New Class"}
                </h2>
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
                        {editingClass ? "Update Class" : "Add Class"}
                    </button>
                </form>
            </div>


            <div className="w-full max-w-7xl mx-auto mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">All Classes</h3>
                <table className="min-w-full table-auto">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 text-left text-white">Class Name</th>
                        <th className="px-4 py-2 text-left text-white">Teacher Name</th>
                        <th className="px-4 py-2 text-left text-white">Description</th>
                        <th className="px-4 py-2 text-left text-white">Class Date</th>
                        <th className="px-4 py-2 text-left text-white">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(classes) && classes.length > 0 ? (
                        classes.map((cls: Classes) => (
                            <tr key={cls.className} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2 text-gray-900">{cls.className}</td>
                                <td className="px-4 py-2 text-gray-900">{cls.teacherName}</td>
                                <td className="px-4 py-2 text-gray-900">{cls.description}</td>
                                <td className="px-4 py-2 text-gray-900">{cls.date}</td>
                                <td className="px-4 py-2 flex gap-2">
                                    <button
                                        className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600 transition"
                                        onClick={() => handleEdit(cls)}
                                    >
                                        Update
                                    </button>
                                    <button className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition" onClick={() => handleDelete(cls.className)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={5} className="px-4 py-2 text-center text-gray-500">
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
