import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Timer, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="text-black pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <img
                            width="200"
                            src="https://www.job-junction.org/wp-content/uploads/2023/11/logo.png"
                            alt="Job Junction Logo"
                            className="brightness-0"
                        />
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=61571375556918"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--primary-yellow)] hover:text-gray-900 transition-all duration-300 hover:scale-110"
                            >
                                <Facebook strokeWidth={1} />
                            </a>
                            <a
                                href="https://www.instagram.com/jobjunctionglobal/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--primary-yellow)] hover:text-gray-900 transition-all duration-300 hover:scale-110"
                            >
                                <Instagram strokeWidth={1} />
                            </a>
                            <a
                                href="https://www.youtube.com/@job-junction-global"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--primary-yellow)] hover:text-gray-900 transition-all duration-300 hover:scale-110"
                            >
                                <Youtube strokeWidth={1} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/jobjunctionglobal/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[var(--primary-yellow)] hover:text-gray-900 transition-all duration-300 hover:scale-110"
                            >
                                <Linkedin strokeWidth={1} />
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className=" text-lg mb-6 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[var(--primary-yellow)]">
                            Quick Links
                        </h3>
                        <div className="flex flex-col space-y-3">
                            <a href="#courses" className="hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-200">
                                Our Courses
                            </a>
                            <a href="#blogs" className="hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-200">
                                Blogs
                            </a>
                            <a href="#faq" className="hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-200">
                                FAQ
                            </a>
                            <a href="#contact" className="hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-200">
                                Contact Us
                            </a>
                            <a href="#home" className="hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-200">
                                About Us
                            </a>
                        </div>
                    </div>

                    {/* Courses */}
                    <div>
                        <h3 className=" text-lg mb-6 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[var(--primary-yellow)]">
                            Courses
                        </h3>
                        <div className="flex flex-col space-y-3">
                            
                            <a href="#courses" className="hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-200">
                                MERN Stack Development
                            </a>
                            <a href="#courses" className="hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-200">
                                Python-Django Development
                            </a>
                            <a href="#courses" className="hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-200">
                                NextJS Development
                            </a>
                            <a href="#courses" className="hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-200">
                                Building Information Modeling (BIM)
                            </a>
                            <a href="#courses" className="hover:text-[var(--primary-yellow)] hover:translate-x-1 transition-all duration-200">
                                3D Printing
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className=" text-lg mb-6 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-[var(--primary-yellow)]">
                            Contact Info
                        </h3>
                        <div className="flex flex-col space-y-4">
                            <p className="flex items-start gap-2">
                                <span className="text-xl"><Mail size={20} /></span>
                                <span>info@job-junction.org</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-xl"><Phone size={20} /></span>
                                <span>+91 9895633453</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-xl"><MapPin size={20} /></span>
                                <span>Kabani Building,<br />Technocity Campus,<br />Technopark Phase 4,<br />Mangalapuram PO, Thonnakkal, EDAKKODE, Kerala 695317</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-xl"> <Timer size={20} /> </span>
                                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-gray-800">
                    <p className="text-center  text-sm">
                        &copy; 2025 Job Junction. All Rights Reserved. | Designed with{' '}
                        <span className="text-red-500 animate-pulse">❤️</span> for your success
                    </p>
                </div>
            </div>
        </footer>
    );
}