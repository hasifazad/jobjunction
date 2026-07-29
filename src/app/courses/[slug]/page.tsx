import Image from "next/image";
import { Course } from "@/app/courses/page";
import courseData from '@/data/courses.json'
import { notFound } from "next/navigation";
import {
    Clock3,
    Layers3,
    GraduationCap,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const courses = courseData as Course[];

export default function CourseDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const course: Course | undefined = courses.find(
        (item) => item.slug === params.slug
    );

    if (!course) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen text-[#171717]">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD000]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#FFD000]/10 rounded-full blur-3xl" />

                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-14 items-center">
                        {/* Left Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-[#FFD000]/20 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <Layers3 size={16} />
                                {course.category}
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                                {course.title}
                            </h1>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
                                {course.description}
                            </p>

                            {/* Course Info */}
                            <div className="flex flex-wrap gap-4 mt-8">
                                <div className="bg-gray-100 px-5 py-4 rounded-2xl flex items-center gap-3">
                                    <Clock3 className="text-[#FFD000]" />
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Duration
                                        </p>
                                        <p className="font-semibold">
                                            {course.duration}
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-100 px-5 py-4 rounded-2xl flex items-center gap-3">
                                    <GraduationCap className="text-[#FFD000]" />
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Level
                                        </p>
                                        <p className="font-semibold">
                                            {course.level}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons */}
                            {/* <div className="flex flex-wrap gap-4 mt-10">
                                <button className="bg-[#FFD000] hover:bg-[#e8bf00] transition-all duration-300 text-black font-semibold px-8 py-4 rounded-2xl flex items-center gap-2 shadow-lg shadow-yellow-200">
                                    Enroll Now
                                    <ArrowRight size={18} />
                                </button>

                                <button className="border border-gray-300 hover:border-black transition-all duration-300 px-8 py-4 rounded-2xl font-semibold">
                                    Download Syllabus
                                </button>
                            </div> */}
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#FFD000] rounded-[40px] rotate-10 scale-95 opacity-70" />

                            <div className="relative bg-white border border-gray-200 rounded-[40px] p-6 shadow-2xl">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    width={700}
                                    height={500}
                                    className="rounded-[30px] w-full h-[420px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Highlights */}
            <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
                <div className="text-center mb-14">
                    <h2 className="text-3xl lg:text-4xl font-black">
                        What You'll Learn
                    </h2>

                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Build production-ready applications with modern frontend
                        technologies and industry-standard architecture.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {course.whatYouWillLearn.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-200 hover:border-[#FFD000] rounded-3xl p-6 transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#FFD000]/20 flex items-center justify-center mb-5">
                                <CheckCircle2 className="text-black" />
                            </div>

                            <h3 className="font-bold text-lg mb-2">
                                {item.heading}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 lg:px-10 pb-20">
                <div className="max-w-7xl mx-auto bg-[#FFD000] rounded-[40px] p-10 lg:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-white/20 rounded-full blur-3xl" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-black text-black">
                                Start Your Development Journey
                            </h2>

                            <p className="mt-4 text-black/80 max-w-2xl text-lg">
                                Learn advanced frontend development and build
                                scalable applications with Next.js and
                                TypeScript.
                            </p>
                        </div>

                        <Link href={'/#contact'}>
                            <button className="bg-black text-white hover:bg-neutral-800 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold whitespace-nowrap">
                                Join This Course
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}