import Link from "next/link";

export default async function AboutPage() {
    return (
        <div className="min-h-screen bg-yellow-50 text-black">
            {/* Hero Section */}
            <section className=" py-16 px-6 text-center">
                {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    About Our Institution
                </h1> */}
                <p className="max-w-2xl mx-auto text-3xl">
                    We're a small group of people who are extremely passionate about learning, teaching and building future brighter.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                <div className="bg-white shadow-md rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
                        Our Mission
                    </h2>
                    <p className="text-xl">
                        To establish a learning ecosystems transform curious minds into exceptional problem solvers
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
                        Our Vision
                    </h2>
                    <p className="text-xl">
                        To improve the world through the synergy of visionary mentors and great minds
                    </p>
                </div>
            </section>

            {/* About Content */}
            <section className="py-16 px-6 bg-yellow-100">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                    <p className="text-lg leading-relaxed">
                        We are a dedicated training institution focused on delivering
                        high-quality education in modern technologies like web development,
                        programming, and software engineering. Our hands-on approach ensures
                        that students gain practical experience through real projects.
                    </p>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {[
                    "Experienced Trainers",
                    "Project-Based Learning",
                    "Industry-Relevant Curriculum",
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-semibold text-yellow-500">
                            {item}
                        </h3>
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section className=" py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Start Your Learning Journey Today
                </h2>

                <Link href={'/#contact'}>
                    <button className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 transition">
                        Contact Us
                    </button>
                </Link>

            </section>

        </div>
    );
}
