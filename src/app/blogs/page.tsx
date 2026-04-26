import Link from "next/link";

interface Blog {
    id: string;
    slug: string;
    topic: string;
    image_url: string;
    content: string;
}

let FALLBACK_IMAGE = '/no-image.png'

async function getBlogs(): Promise<Blog[]> {
    let API_URL = process.env.API_URL

    const res = await fetch(`${API_URL}/blogs`, {
        next: { revalidate: 30 }, // 🔥 ISR: Revalidate every 30 seconds
    });

    if (!res.ok) {
        throw new Error("Failed to fetch blogs");
    }

    return res.json();
}

export default async function BlogsPage() {
    const blogs = await getBlogs();

    return (
        <div className="max-w-5xl mx-auto p-4">
            <h1 className="text-3xl mb-5">Blogs</h1>

            <div className="grid sm:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                    <Link
                        key={blog.id}
                        href={`/blogs/${blog.slug}`}
                        className="border border-gray-300 rounded-2xl shadow-sm p-4 transition hover:shadow-lg"
                    >
                        <img
                            src={blog.image_url || FALLBACK_IMAGE}
                            alt={blog.topic}
                            className="w-full h-48 object-cover rounded-xl"
                        />
                        <h2 className="text-xl font-semibold mt-3">
                            {blog.topic}
                        </h2>
                        <p className="text-gray-700 mt-2">
                            {blog.content.slice(0, 120)}...
                        </p>

                        <p>{typeof blog.image_url}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}