import {useEffect, useState} from "react";
import bgImage from "../assets/edu-bg-img-02.jpg";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store/store.ts";
import {getAllStudent, saveStudent, deleteStudent} from "../slice/StudentSlice.ts";
import Students from "../model/student.ts";
import Swal from 'sweetalert2';



export function Student() {
    const [studentName, setStudentName] = useState("");
    const [nic, setNic] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [guardianContactNo, setGuardianContactNo] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const students = useSelector((state) => state.student);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Student Data:", { studentName, nic, dob, address, email, mobileNo, guardianContactNo });


        const student = new Students(studentName, Number(nic), dob, address, email, Number(mobileNo), Number(guardianContactNo));
        dispatch(saveStudent(student));
        Swal.fire({
            title: "Success!",
            text: "Student added successfully!",
            icon: "success",
            confirmButtonText: "OK"
        });

        setStudentName("");
        setNic("");
        setDob("");
        setAddress("");
        setEmail("");
        setMobileNo("");
        setGuardianContactNo("");
    };

     const handleDelete = (email:string) => {
         // if (window.confirm("Are you sure you want to delete this student?")) {
         //     dispatch(deleteStudent(email)).then(() => {
         //         dispatch(getAllStudent());
         //     });
         //
         // }
         Swal.fire({
             title: "Are you sure?",
             text: "You won’t be able to revert this!",
             icon: "warning",
             showCancelButton: true,
             confirmButtonColor: "#d33",
             cancelButtonColor: "#3085d6",
             confirmButtonText: "Yes, delete it!"
         }).then((result) => {
             if (result.isConfirmed) {
                 dispatch(deleteStudent(email)).then(() => {
                     dispatch(getAllStudent());
                     Swal.fire("Deleted!", "The student has been removed.", "success");
                 });
             }
         });

     };

    useEffect(() => {
        dispatch(getAllStudent())
    }, [dispatch]);

    return (
        <div className="min-h-screen flex items-center justify-start bg-cover bg-center p-6" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="relative bg-white bg-opacity-90 p-8 rounded-lg shadow-xl w-full max-w-md md:max-w-lg ml-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Add a New Student</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-800 font-medium">Student Name:</label>
                        <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500" placeholder="Enter student's name" required />
                    </div>
                    <div>
                        <label className="block text-gray-800 font-medium">NIC:</label>
                        <input type="text" value={nic} onChange={(e) => setNic(e.target.value)} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500" placeholder="Enter NIC" required />
                    </div>
                    <div>
                        <label className="block text-gray-800 font-medium">Date of Birth:</label>
                        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label className="block text-gray-800 font-medium">Address:</label>
                        <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500" placeholder="Enter address" required></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-800 font-medium">Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500" placeholder="Enter student's email" required />
                    </div>
                    <div>
                        <label className="block text-gray-800 font-medium">Mobile Number:</label>
                        <input type="text" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500" placeholder="Enter mobile number" required />
                    </div>
                    <div>
                        <label className="block text-gray-800 font-medium">Guardian Contact No:</label>
                        <input type="text" value={guardianContactNo} onChange={(e) => setGuardianContactNo(e.target.value)} className="w-full p-3 border rounded-lg mt-1 focus:ring-2 focus:ring-blue-500" placeholder="Enter guardian contact number" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200">Add Student</button>
                </form>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">All Students</h3>
                <table className="min-w-full table-auto">
                    <thead>
                    <tr>
                        <th className="px-4 py-2 text-left text-white">Student Name</th>
                        <th className="px-4 py-2 text-left text-white">NIC No</th>
                        <th className="px-4 py-2 text-left text-white">Date of Birth</th>
                        <th className="px-4 py-2 text-left text-white">Address</th>
                        <th className="px-4 py-2 text-left text-white">Email</th>
                        <th className="px-4 py-2 text-left text-white">Mobile Phone</th>
                        <th className="px-4 py-2 text-left text-white">Guardian Phone</th>
                        <th className="px-4 py-2 text-left text-white">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Array.isArray(students) && students.length > 0 ? (
                        students.map((stu: Students) => (
                            <tr key={stu.nic} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2 text-gray-700">{stu.studentName}</td>
                                <td className="px-4 py-2 text-gray-700">{stu.nic}</td>
                                <td className="px-4 py-2 text-gray-700">{stu.dob}</td>
                                <td className="px-4 py-2 text-gray-700">{stu.address}</td>
                                <td className="px-4 py-2 text-gray-700">{stu.email}</td>
                                <td className="px-4 py-2 text-gray-700">{stu.mobilePhone}</td>
                                <td className="px-4 py-2 text-gray-700">{stu.guardianphone}</td>
                                <td className="px-4 py-2 text-gray-700">
                                    <button onClick={() => handleDelete(stu.email)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                                </td>
                                <td className="px-4 py-2 text-gray-400">
                                    <button onClick={() => handleUpdate(stu.email)} className="bg-yellow-400 text-white px-3 py-1 rounded">Update</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={8} className="px-4 py-2 text-center text-gray-500">No students available</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
