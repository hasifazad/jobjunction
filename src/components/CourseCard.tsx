import Image from "next/image";
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



interface Props {
    course: Course;
}

export default function CourseCard({ course }: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer">

            <div className="h-48 overflow-hidden">
                <Image
                    src={course.image}
                    alt={course.title}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                />
            </div>

            <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {course.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {course.description}
                </p>

                <div className="flex justify-between items-center mt-4 text-sm">
                    <span className="bg-[var(--primary-yellow)] px-3 py-1 rounded-full font-medium">
                        {course.level}
                    </span>

                    <span className="text-gray-600">{course.duration}</span>
                </div>
            </div>
        </div>
    );
}