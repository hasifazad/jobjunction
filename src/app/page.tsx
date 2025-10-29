import ContactForm from "@/components/ContactForm";

import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (

    <div>

      <main className="flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col-reverse md:flex-row md:justify-between py-16 md:py-24 gap-20">

            {/* Left Section: Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl text-black mb-4">
                Build Your Future with Job Junction
              </h1>
              <p className="text-black mb-6 text-lg md:text-xl">
                No online distractions <br /> Just real classrooms, Real teachers, and Real learning.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="#courses"
                  className="border border-black px-6 py-3 bg-black  text-white rounded-lg transition"
                >
                  Get Started
                </a>
                <a
                  href="#about"
                  className="px-6 py-3 border border-black text-black rounded-lg transition"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Right Section: Hero Image */}
            <div className="flex-1 shadow-2xl">
              <Image
                className="w-full"
                src="/hero.jpg"
                alt="job_junction logo"
                width={350}
                height={38}
                priority
              />
            </div>

          </div>
        </div>
      </main>

      <section id="trust-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-yellow-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight mb-4">
              Why Students{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Trust Job Junction</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></span>
              </span>
            </h2>
            
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Card 1 */}
            <div className="group bg-white p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-300 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Built on Trust</h3>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>No hype. No shortcuts. Just skill-building that works.</p>
                <p>We're an offline-first training institution with one mission: to help learners build real, job-ready skills in IT, Finance, and Healthcare.</p>

              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-300 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Human-first, Always</h3>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>No spam. No pushy marketing. No false promises.</p>
                <p>We focus on deep, practical learning. Delivered in real classrooms, by real mentors.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 relative overflow-hidden md:col-span-2 lg:col-span-1 before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-300 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-300 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Growing Learning Ecosystem</h3>
              <div className="text-gray-600 leading-relaxed space-y-3">
                <p>Not just a course. A complete career support system.</p>
                <p>From technical training to communication and soft skills, from financial awareness to career guidance, everything is designed to help you move forward with confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <ContactForm />
      <Footer />

    </div>


  );
}
