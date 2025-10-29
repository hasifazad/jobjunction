"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Blog {
    topic: string;
    ["image url"]: string;
    content: string;
}

export default function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogs(): Promise<void> {
            try {
                const res = await fetch(
                    "/api/blogs"
                );
                const data: Blog[] = await res.json();
                console.log(data);

                setBlogs(data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center h-96 bg-white">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl mb-5">Blogs</h1>

            <div className="grid sm:grid-cols-2 gap-6">
                {blogs.map((blog: any) => {
                    const slug = blog.topic.toLowerCase().replace(/\s+/g, "-");

                    return (
                        <Link
                            key={blog?.id}
                            href={`/blogs/${blog?.id}`}
                            className="border border-gray-300 rounded-2xl shadow-sm p-4 transition hover:shadow-lg hover:translate-1"
                        >
                            <img
                                src={blog["image_url"]}
                                alt={blog.topic}
                                className="w-full h-48 object-cover rounded-xl"
                            />
                            <h2 className="text-xl font-semibold mt-3">{blog.topic}</h2>
                            <p className="text-gray-700 mt-2">
                                {blog.content.slice(0, 120)}...
                            </p>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
