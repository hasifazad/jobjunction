// app/courses/page.tsx

import coursesData from "@/data/courses.json";

interface WhatYouWillLearnItem {
    heading: string;
    detail: string;
}

interface RoadmapModule {
    module: string;
    title: string;
    topics: string[];
}

export interface Course {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    image: string;
    category: string;
    slug: string;

    whatYouWillLearn: WhatYouWillLearnItem[];

    roadmap: RoadmapModule[];
}

const courses = coursesData as Course[];


import CourseSection from "@/components/CourseSection";
import Link from "next/link";

export default async function CoursesPage() {
    // SSR ready (you can replace with DB/API later)
    const allCourses = courses;

    const categories = [...new Set(allCourses.map(c => c.category))];

    return (
        <main className="px-6 md:px-12 lg:px-36 py-10 bg-[var(--background)]">
            {/* Hero Section */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
                    Explore Our Courses
                </h1>
                <p className="text-gray-600 max-w-2xl">
                    Upgrade your skills with industry-relevant IT courses designed for real-world success.
                </p>
            </div>
            {/* Dynamic Sections */}
            {categories.map((category) => (

                <CourseSection
                    key={category}
                    title={category}
                    courses={allCourses.filter(c => c.category == category)}
                />

            ))}
        </main>
    );
}