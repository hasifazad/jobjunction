"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        <div className="">

            {/* HERO CARD */}
            <div className="max-w-6xl rounded-[2rem] bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-xl p-6 md:p-10">

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                    {/* LEFT SIDE → TEXT */}
                    <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">

                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={index}
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.6 }}
                                className="text-2xl md:text-4xl font-medium text-black leading-snug"
                            >
                                {slides[index].text}
                            </motion.h1>
                        </AnimatePresence>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 text-gray-500 max-w-md"
                        >
                            Start your journey with hands-on training and expert mentorship.
                        </motion.p>

                        

                    </div>

                    {/* RIGHT SIDE → IMAGE */}
                    <div className="flex-1 flex items-center justify-center">

                        <div className="relative w-full max-w-sm md:max-w-md h-[300px] md:h-[350px] flex items-center justify-center">

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ y: 150, scale: 0.8, opacity: 0, rotate: 8 }}
                                    animate={{ y: 0, scale: 1, opacity: 1, rotate: 0 }}
                                    exit={{ y: -150, scale: 0.8, opacity: 0, rotate: -8 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="relative flex items-center justify-center"
                                >
                                    <Image
                                        src={slides[index].image}
                                        alt="student"
                                        width={320}
                                        height={420}
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}