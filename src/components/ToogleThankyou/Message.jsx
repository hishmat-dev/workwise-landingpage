import { Link } from 'react-router-dom';
function Message({ message }) {
    return (
        <div className="text-center p-8 bg-waikawa-grey bg-opacity-50 rounded-xl shadow-xl  w-4/5">
            <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="Thank You"
                className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-bright-sun mb-4">Thank You</h3>
            <p className="leading-relaxed">
                {message || "Explore our features and start your journey with us today."}
            </p>
            <div className="hover:scale-105 transition-transform duration-300">
                <Link to='/' className="px-8 py-3 bg-gradient-to-r from-blue-hosta to-vivid-cerise hover:from-vivid-cerise hover:to-blue-hosta text-white rounded-full font-medium transition-colors duration-200">
                    Go to Log In
                </Link>
            </div>
        </div>
    );
}

export default Message;