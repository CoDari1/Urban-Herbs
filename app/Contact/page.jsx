'use client';

import React, { useState } from "react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = ({ target: { name, value } }) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        alert(res.ok ? "Message sent!" : "Failed to send message.");
    };

    return (
        <div className="flex flex-col items-center justify-center py-16 bg-gradient-to-r from-green-500 to-green-700 min-h-screen mt-8">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
                <h2 className="text-3xl font-bold text-center mb-6 text-green-800">Contact Us</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {["name", "email", "subject", "message"].map((field) => (
                        <div className="flex flex-col" key={field}>
                            <label htmlFor={field} className="text-sm text-gray-700 capitalize">{field}</label>
                            {field !== "message" ? (
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    id={field}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                    required
                                />
                            ) : (
                                <textarea
                                    id={field}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    rows="4"
                                    className="mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Your Message"
                                    required
                                />
                            )}
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="w-full py-3 mt-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
