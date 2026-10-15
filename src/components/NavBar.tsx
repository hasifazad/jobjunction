
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

import { EnquiryButton } from "./EnquiryModal";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-md">
            <nav
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                aria-label="Main navigation"
            >
                {/* Navbar Main Row */}
                <div className="flex h-[76px] items-center justify-between gap-3">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={closeMenu}
                        className="flex shrink-0 items-center"
                        aria-label="JobJunction home"
                    >
                        <Image
                            src="https://www.job-junction.org/wp-content/uploads/2023/11/logo.png"
                            alt="JobJunction"
                            width={150}
                            height={44}
                            priority
                            className="h-auto w-[115px] sm:w-[140px]"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-6 lg:flex xl:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className={`text-sm font-medium transition-colors duration-200 ${link.label === "Home"
                                        ? "text-indigo-600"
                                        : "text-slate-600 hover:text-indigo-600"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Enquiry Button */}
                    <div className="hidden shrink-0 lg:block">
                        <EnquiryButton />
                    </div>

                    {/* Tablet Actions */}
                    <div className="hidden shrink-0 items-center gap-3 sm:flex lg:hidden">
                        <EnquiryButton />

                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-slate-800 transition hover:bg-gray-50"
                            aria-label={
                                isOpen ? "Close navigation menu" : "Open navigation menu"
                            }
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isOpen ? <X size={23} /> : <Menu size={23} />}
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex shrink-0 sm:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-slate-800 transition hover:bg-gray-50"
                            aria-label={
                                isOpen ? "Close navigation menu" : "Open navigation menu"
                            }
                            aria-expanded={isOpen}
                            aria-controls="mobile-navigation"
                        >
                            {isOpen ? <X size={23} /> : <Menu size={23} />}
                        </button>
                    </div>
                </div>

                {/* Mobile / Tablet Navigation */}
                <div
                    id="mobile-navigation"
                    aria-hidden={!isOpen}
                    className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${isOpen
                            ? "max-h-[500px] border-t border-gray-100 opacity-100"
                            : "max-h-0 border-t border-transparent opacity-0"
                        }`}
                >
                    <div className="space-y-1 py-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                tabIndex={isOpen ? 0 : -1}
                                onClick={closeMenu}
                                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-yellow-50 hover:text-indigo-600"
                            >
                                {link.label}
                                <ChevronRight
                                    size={17}
                                    className="text-slate-400"
                                />
                            </Link>
                        ))}

                        {/* Mobile Enquiry Button */}
                        <div className="px-4 pt-3 sm:hidden">
                            <EnquiryButton className="w-full" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
