import React, { useState, useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (updatedClass: any) => void;
    className: string;
    teacherName: string;
    description: string;
    classDate: string;
}

const Modal: React.FC<ModalProps> = ({
                                         isOpen,
                                         onClose,
                                         onSave,
                                         className: initialClassName,
                                         teacherName: initialTeacherName,
                                         description: initialDescription,
                                         classDate: initialClassDate
                                     }) => {
    // Initialize state with props values
    const [className, setClassName] = useState(initialClassName);
    const [teacherName, setTeacherName] = useState(initialTeacherName);
    const [description, setDescription] = useState(initialDescription);
    const [classDate, setClassDate] = useState(initialClassDate);

    useEffect(() => {
        // Update state if props change (in case of editing)
        setClassName(initialClassName);
        setTeacherName(initialTeacherName);
        setDescription(initialDescription);
        setClassDate(initialClassDate);
    }, [initialClassName, initialTeacherName, initialDescription, initialClassDate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedClass = { className, teacherName, description, classDate };
        onSave(updatedClass);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Update Class</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Class Name</label>
                        <input
                            type="text"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Teacher Name</label>
                        <input
                            type="text"
                            value={teacherName}
                            onChange={(e) => setTeacherName(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Class Date</label>
                        <input
                            type="date"
                            value={classDate}
                            onChange={(e) => setClassDate(e.target.value)}
                            className="w-full p-3 border rounded-lg"
                            required
                        />
                    </div>

                    <div className="flex justify-between mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-purple-400 text-white px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                            Update Class
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
