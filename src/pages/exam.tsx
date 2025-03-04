import bgImage from "../assets/edu-bg-img-02.jpg";

export function Exam(){
    return (
        <div
            className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative text-white text-3xl font-semibold">
                Welcome to the Exam Dashboard
            </div>
        </div>
    );
}