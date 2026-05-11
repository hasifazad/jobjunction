"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { EnquiryButton } from "./EnquiryModal";
import Link from "next/link";

const slides = [
    {
        image: "/oluwaseyi-akinlolu-dPQBwZ6d-NU-unsplash-Photoroom.png",
        text: "Learn by building real-world projects",
    },
    {
        image: "/elyas-pasban-LYMhzc90SxA-unsplash-Photoroom.png",
        text: "Guided by industry experts",
    },
    {
        image: "/bangun-stock-production-3g9VyuI2sd0-unsplash-Photoroom.png",
        text: "Transform your career with us",
    },
];

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden rounded-[3rem]">
            {/* Background Blur Effects */}
            <div className="absolute top-[-100px]  left-[-100px] w-[350px] h-[350px] bg-[#FFD000]/30 rounded-full blur-3xl" />

            <div className="absolute bottom-[-100px]  right-[-100px] w-[350px] h-[350px] bg-yellow-200/40 rounded-full blur-3xl" />

            {/* HERO CARD */}
            <div className="relative max-w-7xl mx-auto rounded-[3rem] border border-yellow-100 bg-gradient-to-br from-[#fcdb47] via-[#fffdf5] to-[#f8de7a] shadow-[0_20px_80px_rgba(255,208,0,0.15)] overflow-hidden">

                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD000]/20 rounded-full blur-3xl" />

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 p-6 md:p-6 lg:p-8">

                    {/* LEFT CONTENT */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6"
                        >
                            <div className="inline-flex items-center gap-2 bg-[#FFD000]/20 border border-[#FFD000]/30 text-black px-5 py-2 rounded-full text-sm font-semibold backdrop-blur-md">
                                <Sparkles size={16} />
                                Learn • Build • Grow
                            </div>
                        </motion.div>

                        {/* Heading */}
                        <div className="min-h-[140px] md:min-h-[180px] flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                        filter: "blur(10px)",
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        filter: "blur(0px)",
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -50,
                                        filter: "blur(10px)",
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }}
                                    className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#171717]"
                                >
                                    {slides[index].text}
                                </motion.h1>
                            </AnimatePresence>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl"
                        >
                            Join our immersive learning platform and master
                            modern technologies through hands-on experience,
                            mentorship, and real-world projects.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
                        >

                            <EnquiryButton />
                            <Link href={'/courses'}>
                                <button className="cursor-pointer group bg-[#FFD000] hover:bg-[#e6bc00] transition-all duration-300 text-black font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-yellow-200 flex items-center gap-2">
                                    Explore Courses



                                    <ArrowRight
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </button>
                            </Link>

                            {/* <button className="border border-gray-300 hover:border-black bg-white/70 backdrop-blur-md transition-all duration-300 text-black font-medium px-8 py-4 rounded-2xl">
                                Watch Demo
                            </button> */}
                        </motion.div>

                        {/* Stats */}
                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-12 grid grid-cols-3 gap-4 w-full max-w-lg"
                        >
                            {[
                                { value: "5K+", label: "Students" },
                                { value: "25+", label: "Courses" },
                                { value: "95%", label: "Placements" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white/80 backdrop-blur-md border border-yellow-100 rounded-2xl p-4 shadow-sm"
                                >
                                    <h3 className="text-2xl font-black text-black">
                                        {item.value}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div> */}
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex-1 flex items-center justify-center relative">

                        {/* Floating Circle */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 5,
                                ease: "easeInOut",
                            }}
                            className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] bg-[#FFD000]/20 rounded-full blur-2xl"
                        />

                        {/* Animated Image */}
                        <div className="relative w-full max-w-sm md:max-w-lg h-[420px] flex items-center justify-center">

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.8,
                                        rotate: 8,
                                        y: 100,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.8,
                                        rotate: -8,
                                        y: -100,
                                    }}
                                    transition={{
                                        duration: 0.9,
                                        ease: "easeInOut",
                                    }}
                                    className="relative"
                                >
                                    {/* Glass Card Behind Image */}
                                    <div className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-[3rem] rotate-6 scale-95" />

                                    <div className="relative z-10 p-4">
                                        <Image
                                            src={slides[index].image}
                                            alt="student"
                                            width={420}
                                            height={520}
                                            priority
                                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Slider Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`transition-all duration-300 rounded-full ${index === i
                                ? "w-10 h-3 bg-[#FFD000]"
                                : "w-3 h-3 bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}