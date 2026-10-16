
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BrainCircuit,
    Code2,
    GraduationCap,
    BriefcaseBusiness,
    Sparkles,
    Menu,
} from "lucide-react";
import { EnquiryButton } from "./EnquiryModal";

const features = [
    {
        icon: GraduationCap,
        title: "Expert Mentors",
        description: "Learn from industry professionals.",
    },
    {
        icon: Code2,
        title: "Hands-on Projects",
        description: "Build skills through real projects.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Career Support",
        description: "Get guidance for your next career step.",
    },
    {
        icon: BrainCircuit,
        title: "AI-Integrated Learning",
        description: "Learn the technologies shaping tomorrow.",
    },
];

const courses = [
    {
        icon: Code2,
        title: "Full Stack Development",
        subtitle: "React · Node.js · MongoDB",
        color: "bg-emerald-100 text-emerald-700",
        position: "left-0 top-[20%]",
    },
    {
        icon: BrainCircuit,
        title: "AI & Data Science",
        subtitle: "Python · Machine Learning",
        color: "bg-sky-100 text-sky-700",
        position: "right-0 top-[10%]",
    },
    {
        icon: Sparkles,
        title: "Modern Web Development",
        subtitle: "Next.js · TypeScript",
        color: "bg-violet-100 text-violet-700",
        position: "left-[8%] top-[1%]",
    },
];

export default function HeroSection() {
    return (
        <section className="overflow-hidden bg-white text-slate-900">
            {/* Navigation */}
            {/* <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                        <Code2 size={25} strokeWidth={2.5} />
                    </div>

                    <div>
                        <span className="block text-xl font-bold tracking-tight md:text-2xl">
                            JobJunction
                        </span>
                        <span className="block text-xs tracking-wide text-slate-500">
                            Learn. Build. Get Hired.
                        </span>
                    </div>
                </Link>

                <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
                    <Link href="/" className="text-indigo-600">
                        Home
                    </Link>
                    <Link href="/courses" className="transition hover:text-indigo-600">
                        Courses
                    </Link>
                    <Link href="/about" className="transition hover:text-indigo-600">
                        About Us
                    </Link>
                    <Link
                        href="/placements"
                        className="transition hover:text-indigo-600"
                    >
                        Placements
                    </Link>
                    <Link href="/contact" className="transition hover:text-indigo-600">
                        Contact
                    </Link>
                </nav>

                <Link
                    href="/contact"
                    className="hidden items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:flex"
                >
                    Enquire Now <ArrowRight size={17} />
                </Link>

                <button
                    type="button"
                    aria-label="Open navigation"
                    className="rounded-xl border border-slate-200 p-2.5 md:hidden"
                    onClick={() => {
                        const menu = document.getElementById("mobile-menu");
                        menu?.classList.toggle("hidden");
                    }}
                >
                    <Menu size={22} />
                </button>

                <div
                    id="mobile-menu"
                    className="absolute left-4 right-4 top-full hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-xl md:hidden"
                >
                    <nav className="flex flex-col gap-4 text-sm font-medium">
                        <Link href="/" className="py-1">Home</Link>
                        <Link href="/courses" className="py-1">Courses</Link>
                        <Link href="/about" className="py-1">About Us</Link>
                        <Link href="/placements" className="py-1">Placements</Link>
                        <Link href="/contact" className="py-1">Contact</Link>
                    </nav>
                </div>
            </header> */}

            {/* Hero */}
            <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 md:px-8 md:pb-20 lg:min-h-[590px] lg:grid-cols-2 lg:gap-6 lg:pt-8">
                {/* Background decoration */}
                <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-100/60 blur-3xl" />
                <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

                {/* Left content */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10 text-center lg:text-left"
                >
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                        <Sparkles size={16} />
                        Your future in technology starts here
                    </div>

                    <h1 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl xl:text-[68px]">
                        Don't Just Learn.
                        <span className="mt-1 block">

                            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                                Build with AI.
                            </span>
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
                        AI is changing what we can do. What matters is what you choose to do with it. Learn the fundamentals, question the obvious, and build things that go beyond following someone else's steps.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                        <EnquiryButton />

                        <Link
                            href="/courses"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50"
                        >
                            Explore Courses
                            <ArrowRight
                                size={19}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 lg:justify-start">
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Project-based learning
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-indigo-500" />
                            IT + AI skills
                        </span>
                    </div>
                </motion.div>

                {/* Right visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="relative mx-auto flex w-full max-w-xl items-center justify-center lg:min-h-[520px]"
                >
                    {/* Soft background shapes */}
                    <div className="absolute left-[15%] top-[8%] h-[72%] w-[72%] rounded-full bg-gradient-to-br from-indigo-100 via-blue-50 to-sky-100" />
                    <div className="absolute bottom-[5%] right-[8%] h-40 w-40 rounded-full border border-indigo-100" />
                    <div className="absolute right-[10%] top-[8%] h-16 w-16 rounded-full bg-amber-100/70 blur-xl" />

                    {/* Student image */}
                    <div className="relative z-10 h-[350px] w-full sm:h-[440px] lg:h-[500px]">
                        <Image
                            src="/hero-student.png"
                            alt="Student learning modern technology skills"
                            fill
                            priority
                            sizes="(max-width: 1024px) 90vw, 50vw"
                            className="object-contain object-bottom drop-shadow-xl"
                        />
                    </div>

                    {/* Floating course cards */}
                    {courses.map((course, index) => {
                        const Icon = course.icon;

                        return (
                            <motion.div
                                key={course.title}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                                className={`absolute z-20 ${course.position} hidden items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-3 shadow-[0_12px_40px_rgba(30,41,59,0.10)] backdrop-blur-md sm:flex`}
                            >
                                <div
                                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${course.color}`}
                                >
                                    <Icon size={22} />
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-slate-800 md:text-sm">
                                        {course.title}
                                    </p>
                                    <p className="mt-1 text-[10px] text-slate-500 md:text-xs">
                                        {course.subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}

                    {/* Floating learning label */}
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-5 right-0 z-20 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-10"
                    >
                        <p className="font-semibold text-indigo-700 text-lg">
                            Learn • Build • Grow
                        </p>
                        <p className="mt-1 text-[11px] text-slate-500">
                            Your next chapter starts now.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Feature strip */}
            <div className="border-y border-slate-100 bg-slate-50/70">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 py-9 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                                    <Icon size={23} />
                                </div>

                                <div>
                                    <h2 className="font-semibold text-slate-800">
                                        {feature.title}
                                    </h2>
                                    <p className="mt-1 text-sm leading-6 text-slate-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
