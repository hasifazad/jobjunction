"use client";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-96 text-center p-6">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
            <p className="text-gray-600 mb-6 max-w-md">
                Oops! The page you're looking for doesn’t exist or might have been moved.
            </p>
            <Link
                href="/"
                className="px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
