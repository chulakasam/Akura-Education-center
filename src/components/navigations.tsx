import {Link} from "react-router";
import './navigations.css'

export function Navigation(){
    return (
        <>
            <header className='bg-teal-900'>
                <nav className='px-4 py-5'>
                    <ul className='flex text-white space-x-4'>

                        <Link to="/">DashBoard</Link>
                        <Link to="/staff">Student</Link>
                        <Link to="/field">Class</Link>
                        <Link to="/equipment">Exam</Link>

                    </ul>
                </nav>
            </header>

        </>
    )
}