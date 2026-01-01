"use client"

import { Locate } from 'lucide-react';
import { useState } from 'react';


// https://script.google.com/macros/s/AKfycbzdOvQz_3S36dIrSwI1muUU5CvIMrdDV3TKLbK8pGwzk5bfPlutZL3SBwm8yKAq3FEl/exec


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const [status, setStatus] = useState("");

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzdOvQz_3S36dIrSwI1muUU5CvIMrdDV3TKLbK8pGwzk5bfPlutZL3SBwm8yKAq3FEl/exec'
        try {
            const res = await fetch(scriptURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            setStatus(data.message);
            setFormData({ name: "", email: "", mobile: "", message: "" });
            alert('Thank you for contacting us! We will get back to you soon.');
        } catch (err) {
            console.error(err);
            setStatus("Something went wrong. Please try again.");
        }

    };

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl  text-gray-900 leading-tight mb-4">
                        Get In{' '}
                        <span className=" relative inline-block">
                            <span className="relative z-10">Touch</span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-[var(--primary-yellow)] -z-10"></span>
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                {/* Contact Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Contact Form */}
                    <form className="bg-yellow-50 p-8 lg:p-12 shadow" method='POST' action=''>

                        <div className="space-y-6">
                            <div className='space-y-6 lg:flex lg:space-y-0 justify-between'>
                                {/* Name Input */}
                                <div className="group">
                                    <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-yellow)] focus:ring-2 focus:ring-[var(--primary-yellow)] focus:ring-opacity-20 outline-none transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="group">
                                    <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-yellow)] focus:ring-2 focus:ring-[var(--primary-yellow)] focus:ring-opacity-20 outline-none transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            {/* Mobile Input */}
                            <div className="group">
                                <label htmlFor="mobile" className="block text-sm text-gray-700 mb-2">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                    pattern="[0-9]{10}"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-yellow)] focus:ring-2 focus:ring-[var(--primary-yellow)] focus:ring-opacity-20 outline-none transition-all duration-300"
                                    placeholder="+91 98956 33453"
                                />
                            </div>

                            {/* Message Textarea */}
                            <div className="group">
                                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[var(--primary-yellow)] focus:ring-2 focus:ring-[var(--primary-yellow)] focus:ring-opacity-20 outline-none transition-all duration-300 resize-none"
                                    placeholder="Tell us how we can help you..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                // type='submit'
                                className="w-full bg-[var(--primary-yellow)] text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Send Message
                            </button>
                        </div>



                    </form>

                    {/* Right Side - Map */}
                    <div className="bg-white overflow-hidden h-full min-h-[500px] lg:sticky lg:top-8 relative">
                        <div className="h-full border border-gray-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.7717566853275!2d76.85274847455334!3d8.61789829528955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c1bb5757dd53%3A0x8886ef46672815b0!2sKabani%20Technocity!5e0!3m2!1sen!2sin!4v1760442796559!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '500px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Job Junction Location"
                                className=""
                            />

                        </div>

                        {/* Location Info Overlay */}
                        {/* <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg shadow-xl p-4">
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl"> <Locate /> </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Visit Our Office</h4>
                                    <p className="text-sm text-gray-600">Trivandrum, Kerala, India</p>
                                    <p className="text-xs text-gray-500 mt-1">Mon-Fri: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}