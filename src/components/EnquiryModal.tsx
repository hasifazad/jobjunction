"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function EnquiryModal({ isOpen, onClose }: Props) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    let [loading, setLoading] = useState(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true)
        const scriptURL = '/api/contact'
        try {
            const res = await fetch(scriptURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            // setStatus(data.message);
            setFormData({ name: "", email: "", mobile: "", message: "" });
            alert('Thank you for contacting us! We will get back to you soon.');
        } catch (err) {
            console.error(err);
            // setStatus("Something went wrong. Please try again.");
        } finally {
            setLoading(false)
        }

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4">
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
                >
                    ✕
                </button>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                    Enquiry Form
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                    We’ll get back to you shortly
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Full Name */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>

                    {/* Mobile */}
                    <div>
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <textarea
                            name="message"
                            placeholder="Message (optional)"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-2.5 text-sm font-medium text-white rounded-xl
    bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md
    hover:shadow-lg hover:scale-[1.01] transition-all
    disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
    flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                                Submitting...
                            </>
                        ) : (
                            "Submit Enquiry"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}



export function EnquiryButton() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setOpen(true)}
                className="hidden items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:flex"
            >
                Book a Free Enquiry Now <ArrowRight size={17} />
            </button>

            <EnquiryModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
    );
}