import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Blog {
    slug: string;
    topic: string;
    image_url: string;
    content: string;
}

let FALLBACK_IMAGE = '/no-image.png'

async function getBlog(slug: string): Promise<Blog | null> {
    let API_URL = process.env.API_URL

    try {
        const res = await fetch(
            `${API_URL}/blogs?slug=${slug}`,
            {
                next: { revalidate: 300 }, // ISR (5 minutes)
            }
        );

        if (!res.ok) return null;

        return res.json();
    } catch {
        return null;
    }
}

export default async function BlogPage({
    params,
}: {
    params: { slug: string };
}) {
    const blog = await getBlog(params.slug);

    if (!blog) {
        return <p className="text-center mt-10">Blog not found.</p>;
    }





    return (
        <div className="max-w-3xl mx-auto p-6">
            <Link href="/blogs" className="text-blue-600 hover:underline mb-4 inline-block">
                ← Back to Blogs
            </Link>

            <img
                src={blog["image_url"] || FALLBACK_IMAGE}
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
