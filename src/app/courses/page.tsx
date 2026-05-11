// app/courses/page.tsx
export interface Course {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    image: string;
    category: string;
    slug: string;
}

export const courses: Course[] = [
    {
        id: "1",
        title: "MERN Stack Development",
        description: "Build full-stack applications using MongoDB, Express, React, and Node.",
        duration: "3 Months",
        level: "Intermediate",
        image: "/mernstack.jpg",
        category: "Web Development",
        slug: "mern-stack-development"
    },
    {
        id: "2",
        title: "Next.js & TypeScript",
        description: "Master SSR and modern frontend architecture.",
        duration: "2 Months",
        level: "Advanced",
        image: "/nextjs.png",
        category: "Frontend",
        slug: "nextjs-development"
    },
    {
        id: "3",
        title: "Python Django",
        description: "Backend development with Python and Django framework.",
        duration: "3 Months",
        level: "Beginner",
        image: "/python-django.png",
        category: "Backend",
        slug: "python-full-stack-development"
    },
];
import CourseSection from "@/components/CourseSection";
import Link from "next/link";

export default async function CoursesPage() {
    // SSR ready (you can replace with DB/API later)
    const allCourses = courses;

    const categories = [...new Set(allCourses.map(c => c.category))];

    return (
        <main className="px-6 md:px-12 lg:px-36 py-10 bg-[var(--background)]">

            View Details

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
                        courses={allCourses.filter(c => c)}
                    />
                
            ))}
        </main>
    );
}