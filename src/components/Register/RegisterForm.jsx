import React, { useState } from 'react';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phone: '',
        referralCode: '',
        isCEO: false,
        agreeTerms: false,
        trialOption: 'withCard',
        ceoName: '',
        ceoEmail: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        const val = type === 'checkbox' ? checked : (type === 'file' ? files[0] : value);
        setFormData({ ...formData, [name]: val });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.agreeTerms) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        if (formData.isCEO) {
            alert("As the CEO, you cannot register directly. Please contact your administrator.");
            return;
        }

        if (!formData.ceoName || !formData.ceoEmail) {
            alert("Please provide the CEO's name and email.");
            return;
        }

        if (!formData.email || !formData.firstName) {
            alert("Please fill out required fields.");
            return;
        }

        console.log("Form Data:", formData);
        alert("Form submitted successfully!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-md"
            >
                <div className="flex items-center space-x-6 mb-6">
                   
                    <div>
                        <label
                            htmlFor="file-upload"
                            className="w-24 h-24 flex flex-col items-center justify-center border-2 border-dotted border-gray-400 rounded-md cursor-pointer hover:border-blue-500 transition-colors"
                        >
                            <span className="text-2xl text-gray-500 font-semibold">+</span>
                            <span className="text-sm text-gray-600 mt-1">Upload</span>
                            <input
                                id="file-upload"
                                name="file"
                                type="file"
                                className="sr-only"
                                onChange={handleChange}
                            />
                        </label>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Sign Up</h2>
                        <p className="text-gray-600">You’re signing up as an organization.</p>
                    </div>
                </div>


                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        name="isCEO"
                        checked={formData.isCEO}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label className="text-sm text-gray-700">I am the CEO of the company</label>
                </div>

                {!formData.isCEO && (
                    <div className="mb-4 bg-gray-50 p-4 rounded border border-gray-200">
                        <p className="text-sm text-gray-600 mb-2 font-medium">CEO Information (required):</p>
                        <input
                            type="text"
                            name="ceoName"
                            placeholder="CEO Name"
                            value={formData.ceoName}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded w-full mb-2"
                        />
                        <input
                            type="email"
                            name="ceoEmail"
                            placeholder="CEO Email"
                            value={formData.ceoEmail}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 rounded w-full"
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="text"
                        name="referralCode"
                        placeholder="Referral Code"
                        value={formData.referralCode}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                </div>

                <div className="mt-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                        <span className="ml-2 text-sm text-gray-700">I agree to the terms and conditions.</span>
                    </label>
                </div>

                <div className="mt-4 space-y-2">
                    <label className="flex items-center">
                        <input type="radio" name="trial" value="withCard" className="form-radio text-blue-600" />
                        <span className="ml-2 text-sm text-gray-700">14 Days Trial With Credit Card (Instant Approval)</span>
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="trial" value="withoutCard" className="form-radio text-blue-600" />
                        <span className="ml-2 text-sm text-gray-700">14 Days Trial Without Credit Card (Approval Required)</span>
                    </label>
                </div>

                <div className="mt-4">
                    <label className="block text-sm text-gray-700 mb-1">Card number</label>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                        <input
                            type="text"
                            placeholder="Card number"
                            className="flex-grow text-sm focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="MM / YY"
                            className="ml-4 w-20 text-sm focus:outline-none"
                        />
                    </div>
                    <p className="text-xs text-red-500 mt-1">This Field is Required</p>
                </div>

                <div className="mt-6">
                    
                    <div className="border rounded-md p-3 flex items-center justify-between bg-gray-50">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                            <span className="ml-3 text-sm font-medium text-gray-700">I'm not a robot</span>
                        </label>
                        <img src="https://www.google.com/recaptcha/about/images/reCAPTCHA-logo.png" alt="reCAPTCHA" className="h-6" />
                    </div>
                </div>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-btn-color text-white font-semibold py-2 px-4 rounded-md transition hover:scale-105"
                    >
                        Sign Up
                    </button>
                </div>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <a href="/" className="font-medium text-blue-600 hover:underline">Login</a>
                </p>
            </form>
        </div>
    );
};

export default RegisterForm;
