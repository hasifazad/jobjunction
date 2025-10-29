import { Facebook, Twitter, Instagram, Github, Phone, Mail, Linkedin, Youtube } from "lucide-react";

export default function Infobar() {

    return (
        <header className="bg-[var(--primary-yellow)]">
            <div className="flex justify-center md:justify-between max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between md:justify-start md:gap-5 w-full">
                    <p className="flex gap-1 items-center cursor-pointer"><Phone size={18} className="" />+ 91-9895633453</p>
                    <p className="flex gap-1 items-center cursor-pointer"><Mail size={18} className="" />info@job-junction.org</p>
                </div>
                <div className="gap-5 justify-center hidden md:flex">
                    <a href="https://www.facebook.com/profile.php?id=61571375556918" target="_blank">
                        <Facebook size={24} strokeWidth={1.5} className="hover:text-white cursor-pointer" />
                    </a>
                    <a href="https://www.instagram.com/jobjunctionglobal/" target="_blank">
                        <Instagram size={24} strokeWidth={1.5} className="hover:text-white cursor-pointer" />
                    </a>
                    <a href="https://www.youtube.com/@job-junction-global" target="_blank">
                        <Youtube size={24} strokeWidth={1.5} className="hover:text-white cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/company/jobjunctionglobal/" target="_blank">
                        <Linkedin size={24} strokeWidth={1.5} className="hover:text-white cursor-pointer" />
                    </a>
                </div>
            </div>
        </header>
    )
}