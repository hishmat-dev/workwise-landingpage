function Message({ message }) {
    return (
        <div className="text-center p-4 sm:p-6 md:p-8 bg-waikawa-grey bg-opacity-50 rounded-xl shadow-xl w-full max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                    alt="Thank You"
                    className="w-12 h-12 sm:w-20 sm:h-20 md:w-28 md:h-28"
                />
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-bright-sun">
                    Thank You!
                </h3>
            </div>
            <p className="text-base sm:text-sm md:text-lg leading-relaxed text-white">
                {message || "Explore our features and start your journey with us today."}
            </p>
        </div>
    );
}

export default Message;
