"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Blog {
    topic: string;
    ["image_url"]: string;
    content: string;
}

export default function BlogPage() {
    const { slug } = useParams<{ slug: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    console.log('===>', slug);


    useEffect(() => {
        async function fetchBlogs(): Promise<void> {
            try {
                const res = await fetch(
                    "/api/blogs"
                );
                const data: Blog[] = await res.json();
                console.log(data);


                const found = data.find((b:any) => b?.id == slug);
                console.log(found);

                setBlog(found || null);
            } catch (err) {
                console.error("Error fetching blog:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchBlogs();
    }, [slug]);

    if (loading) return (
        <div className="flex items-center justify-center h-96 bg-white">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
    if (!blog) return <p className="text-center mt-10">Blog not found.</p>;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <Link href="/blogs" className="text-blue-600 hover:underline mb-4 inline-block">
                ← Back to Blogs
            </Link>

            <img
                src={blog["image_url"]}
                alt={blog.topic}
                className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">{blog.topic}</h1>
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {blog.content}
            </p>
        </div>
    );
}
