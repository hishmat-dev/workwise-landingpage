import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    referralCode: "",
    isCEO: false,
    agreeTerms: false,
    trialOption: "withCard",
    ceoName: "",
    ceoEmail: "",
    file: null,
    cardNumber: "",
    expiry: "",
    captchaVerified: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const val = type === "checkbox" ? checked : type === "file" ? files[0] : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    if (!formData.captchaVerified) {
      alert("Please verify you're not a robot.");
      return;
    }

    if (!formData.cardNumber || !formData.expiry) {
      alert("Please enter your card details.");
      return;
    }

    alert("Form submitted successfully!");

    // Clear form (optional)
    setFormData({
      companyName: "",
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      phone: "",
      referralCode: "",
      isCEO: false,
      agreeTerms: false,
      trialOption: "withCard",
      ceoName: "",
      ceoEmail: "",
      file: null,
      cardNumber: "",
      expiry: "",
      captchaVerified: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      {/* Company Info */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Personal Info */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>

      {/* Referral Code */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Referral Code (optional)</label>
        <input
          type="text"
          name="referralCode"
          value={formData.referralCode}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* CEO Toggle */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="isCEO"
          checked={formData.isCEO}
          onChange={handleChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <label className="text-sm text-gray-700">Are you the CEO?</label>
      </div>

      {/* CEO Info */}
      {formData.isCEO && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">CEO Name</label>
            <input
              type="text"
              name="ceoName"
              value={formData.ceoName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">CEO Email</label>
            <input
              type="email"
              name="ceoEmail"
              value={formData.ceoEmail}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </>
      )}

      {/* File Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Upload File</label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* Trial Option */}
      <div>
        <p className="text-sm text-gray-700 font-medium mb-2">Start with 14-day free trial</p>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            name="trialOption"
            value="withCard"
            checked={formData.trialOption === "withCard"}
            onChange={handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2 text-sm text-gray-700">With Credit Card</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="trialOption"
            value="withoutCard"
            checked={formData.trialOption === "withoutCard"}
            onChange={handleChange}
            className="form-radio text-blue-600"
          />
          <span className="ml-2 text-sm text-gray-700">Without Credit Card</span>
        </label>
      </div>

      {/* Card Details */}
      {formData.trialOption === "withCard" && (
        <>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Card number"
              className="flex-grow border border-gray-300 rounded-md p-2"
            />
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM / YY"
              className="w-24 border border-gray-300 rounded-md p-2"
            />
          </div>
          {!formData.cardNumber && <p className="text-xs text-red-500 mt-1">This Field is Required</p>}
        </>
      )}

      {/* Terms Agreement */}
      <div className="flex items-center">
        <input
          type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange}
          className="form-checkbox h-4 w-4 text-blue-600"
        />
        <label className="ml-2 text-sm text-gray-700">
          I agree to the <a href="#" className="text-blue-600 underline">terms and conditions</a>
        </label>
      </div>

      {/* Captcha Dummy */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="captchaVerified"
          checked={formData.captchaVerified}
          onChange={handleChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="text-sm text-gray-700">I'm not a robot (reCAPTCHA demo)</span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!formData.agreeTerms || !formData.email || !formData.firstName}
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        Sign Up
      </button>
    </form>
  );
};

export default RegisterForm;
