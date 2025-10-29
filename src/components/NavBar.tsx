"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="shadow-md sticky w-full z-50 p-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                        <Image
                            className=""
                            src="https://www.job-junction.org/wp-content/uploads/2023/11/logo.png"
                            alt="job_junction logo"
                            width={130}
                            height={38}
                            priority
                        />
                    </Link>



                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-black hover:text-[var(--primary-yellow)]">
                            Home
                        </Link>
                        <Link href="/about" className="text-black hover:text-[var(--primary-yellow)]">
                            About
                        </Link>
                        {/* <Link href="/courses" className="text-black hover:text-[var(--primary-yellow)]">
                            Courses
                        </Link> */}
                        <Link href="/blogs" className="text-black hover:text-[var(--primary-yellow)]">
                            Blogs
                        </Link>
                        <Link href="/contact" className="text-black hover:text-[var(--primary-yellow)]">
                            Contact
                        </Link>
                        <button className="rounded-xl bg-[var(--primary-yellow)] px-5 py-2 w-full cursor-pointer hover:bg-amber-400">
                            Enroll Now
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-black focus:outline-none"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-3 space-y-2">
                        <Link
                            href="/"
                            className="block hover:text-[var(--primary-yellow)]"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block hover:text-[var(--primary-yellow)]"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/courses"
                            className="block hover:text-[var(--primary-yellow)]"
                            onClick={() => setIsOpen(false)}
                        >
                            Courses
                        </Link>
                        <Link href="/courses" className="text-black hover:text-[var(--primary-yellow)]">
                            Blogs
                        </Link>
                        <Link
                            href="/contact"
                            className="block hover:text-[var(--primary-yellow)]"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>

                        <button className="rounded-xl bg-[var(--primary-yellow)] px-5 py-2 w-full cursor-pointer hover:bg-amber-400">
                            Enroll Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
