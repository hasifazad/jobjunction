"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, X } from "lucide-react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function EnquiryModal({ isOpen, onClose }: Props) {
    const [mounted, setMounted] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && !loading) {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, loading, onClose]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to submit enquiry");
            }

            setFormData({
                name: "",
                email: "",
                mobile: "",
                message: "",
            });

            onClose();
            alert("Thank you for contacting us! We will get back to you soon.");
        } catch (error) {
            console.error("Enquiry submission failed:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/50 p-3 backdrop-blur-sm sm:p-6"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget && !loading) {
                    onClose();
                }
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="enquiry-title"
                className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl sm:rounded-3xl"
            >
                {/* Header */}
                <div className="border-b border-gray-100 px-5 py-5 sm:px-8 sm:py-6">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        aria-label="Close enquiry form"
                        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50 sm:right-5 sm:top-5"
                    >
                        <X size={20} />
                    </button>

                    <h2
                        id="enquiry-title"
                        className="pr-10 text-xl font-bold text-gray-900 sm:text-2xl"
                    >
                        Let's Talk About Your Future
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                        Interested in our IT and AI courses? Send us an enquiry
                        and our team will get back to you shortly.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="max-h-[calc(100dvh-180px)] space-y-4 overflow-y-auto px-5 py-5 sm:space-y-5 sm:px-8 sm:py-7"
                >
                    <div>
                        <label
                            htmlFor="enquiry-name"
                            className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                            Full Name
                        </label>
                        <input
                            id="enquiry-name"
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name"
                            required
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-gray-50"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="enquiry-email"
                            className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                            Email Address
                        </label>
                        <input
                            id="enquiry-email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-gray-50"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="enquiry-mobile"
                            className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                            Mobile Number
                        </label>
                        <input
                            id="enquiry-mobile"
                            type="tel"
                            name="mobile"
                            placeholder="Enter your mobile number"
                            value={formData.mobile}
                            onChange={handleChange}
                            autoComplete="tel"
                            required
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-gray-50"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="enquiry-message"
                            className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                            Message <span className="text-gray-400">(optional)</span>
                        </label>
                        <textarea
                            id="enquiry-message"
                            name="message"
                            placeholder="Which course are you interested in?"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            disabled={loading}
                            className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-gray-50"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                        {loading ? (
                            <>
                                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                                Submitting...
                            </>
                        ) : (
                            <>
                                Submit Enquiry
                                <ArrowRight size={17} />
                            </>
                        )}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                        We'll use your details to respond to your enquiry.
                    </p>
                </form>
            </div>
        </div>,
        document.body
    );
}

type EnquiryButtonProps = {
    className?: string;
};

export function EnquiryButton({
    className = "",
}: EnquiryButtonProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 sm:px-6 ${className}`}
            >
                Book a Free Enquiry
                <ArrowRight size={17} />
            </button>

            <EnquiryModal
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
}