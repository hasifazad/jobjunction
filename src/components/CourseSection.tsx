
import CourseCard from "./CourseCard";

// types/course.ts
export interface Course {
    id: string;
    title: string;
    description: string;
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    image: string;
    category: string;
}

// export const courses: Course[] = [
//     {
//         id: "1",
//         title: "Stack Development",
//         description: "Build full-stack applications using MongoDB, Express, React, and Node.",
//         duration: "3 Months",
//         level: "Intermediate",
//         image: "/mernstack.jpg",
//         category: "Development",
//     },
//     {
//         id: "2",
//         title: "Next.js & TypeScript",
//         description: "Master SSR and modern frontend architecture.",
//         duration: "2 Months",
//         level: "Advanced",
//         image: "/courses/next.jpg",
//         category: "Frontend",
//     },
//     {
//         id: "3",
//         title: "Python Django",
//         description: "Backend development with Python and Django framework.",
//         duration: "3 Months",
//         level: "Beginner",
//         image: "/courses/django.jpg",
//         category: "Backend",
//     },
// ];

interface Props {
    title: string;
    courses: Course[];
}

export default function CourseSection({ title, courses }: Props) {
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[var(--foreground)]">
                {title}
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
}