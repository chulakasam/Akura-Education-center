import { useState } from "react";
import bgImage from "../assets/edu-bg-img-02.jpg";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store.ts";
import {saveStudent} from "../slice/student-reducer.ts";
import Students from "../model/student.ts";

export function Student() {
    const [studentName, setStudentName] = useState("");
    const [nic, setNic] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [guardianContactNo, setGuardianContactNo] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Student Data:", { studentName, nic, dob, address, email, mobileNo, guardianContactNo });
        alert("Student added successfully!");

        const student = new Students(studentName, Number(nic), dob, address, email, Number(mobileNo),Number(guardianContactNo));
        dispatch(saveStudent(student));


        // Reset form after submission
        setStudentName("");
        setNic("");
        setDob("");
        setAddress("");
        setEmail("");
        setMobileNo("");
        setGuardianContactNo("");
    };

    return (
        <div
            className="min-h-screen flex items-center justify-start bg-cover bg-center p-6"
            style={{ backgroundImage: `url(${bgImage})` }}
        >



            <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-xl w-full max-w-md md:max-w-lg ml-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Add a New Student</h2>
                <form onSubmit={handleSubmit} className="space-y-4">

                    <div>
                        <label className="block text-gray-800 font-medium">Student Name:</label>
                        <input
                            type="text"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)}
                            className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter student's name"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-gray-800 font-medium">NIC:</label>
                        <input
                            type="text"
                            value={nic}
                            onChange={(e) => setNic(e.target.value)}
                            className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter NIC"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-gray-800 font-medium">Date of Birth:</label>
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-gray-800 font-medium">Address:</label>
                        <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter address"
                            required
                        ></textarea>
                    </div>


                    <div>
                        <label className="block text-gray-800 font-medium">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter student's email"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-gray-800 font-medium">Mobile Number:</label>
                        <input
                            type="text"
                            value={mobileNo}
                            onChange={(e) => setMobileNo(e.target.value)}
                            className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter mobile number"
                            required
                        />
                    </div>


                    <div>
                        <label className="block text-gray-800 font-medium">Guardian Contact No:</label>
                        <input
                            type="text"
                            value={guardianContactNo}
                            onChange={(e) => setGuardianContactNo(e.target.value)}
                            className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter guardian contact number"
                            required
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200"
                    >
                        Add Student
                    </button>
                </form>
            </div>
        </div>
    );
}
