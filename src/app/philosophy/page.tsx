"use client";

import Link from "next/link";
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    Check,
    Code2,
    GitBranch,
    Lightbulb,
    Terminal,
    Zap,
} from "lucide-react";
import { EnquiryButton } from "@/components/EnquiryModal";

const philosophies = [
    {
        number: "01",
        label: "LEARN BY DOING",
        title: "If it feels easy, you're not learning.",
        description:
            "The hard part is the whole point.",
        content:
            "Tutorials feel like progress. You follow along, nod, and think you learned something. But recognizing an idea isn't the same as applying it on your own.",
        detail:
            "Being stuck isn't failure. It's growth. Most learning methods remove that friction. That's backwards.",
        projects: ["Git from scratch", "Redis from scratch", "SQLite from scratch"],
        quote:
            "Learning is not supposed to be fun. The primary feeling should be that of effort. There are a lot of videos on YouTube/TikTok etc. that give the appearance of education, but if you look closely they are really just entertainment.",
        person: "Andrej Karpathy",
        role: "Former Director of AI at Tesla · Founding scientist at OpenAI",
        image:
            "https://codecrafters.io/_next/image?url=%2Fimages%2Fphilosophy%2Fandrej-karpathy.webp&w=256&q=75",
    },
    {
        number: "02",
        label: "BUILD TO UNDERSTAND",
        title: "Study the best, not the loudest.",
        description:
            "Pick your heroes by what they've built.",
        content:
            "The best engineers don't just use their tools. They take them apart. When something breaks at 2am, they don't just Google the error. They reason about what's happening underneath.",
        detail:
            "That understanding comes from building similar things yourself. Real projects turn unfamiliar technology into something you can reason about.",
        projects: [
            "Understand Git internals",
            "Implement a Redis protocol parser",
            "Explore how React works",
        ],
        quote:
            "When React came out and started getting some traction, I wrote my own React to learn the vdom and reconciliation. I also wanted to use functions instead of classes. The lesson was twofold: great way to learn, and I should just use React.",
        person: "Guillermo Rauch",
        role: "Creator of Next.js & Socket.IO · Founder and CEO of Vercel",
        image:
            "https://codecrafters.io/_next/image?url=%2Fimages%2Fphilosophy%2Fguillermo-rauch.webp&w=256&q=75",
    },
    {
        number: "03",
        label: "THINK INDEPENDENTLY",
        title: "If AI can write it, it's not your edge.",
        description:
            "Understanding is the one thing you can't generate.",
        content:
            "When every engineer has access to the same AI, what sets you apart? Not the code you generate, but your ability to make trade-offs, understand complexity, and navigate problems without a template.",
        detail:
            "AI has made programming more productive than ever. But when everyone can generate code, taste and judgment become the scarce resources. Without them, the tool is directing you.",
        projects: [
            "Make technical trade-offs",
            "Solve problems independently",
            "Build genuine engineering judgment",
        ],
        quote:
            "The single greatest way to go from an junior dev to senior level engineer is to actually rebuild projects that already exist. ... It may not immediately get you a better job but it will open more doors the longer you stick with it.",
        person: "The Primeagen",
        role: "Former Netflix engineer · Known for experience-driven software engineering",
        image:
            "https://codecrafters.io/_next/image?url=%2Fimages%2Fphilosophy%2Fthe-primeagen.webp&w=256&q=75",
    },
];

const signals = [
    "Easy tutorials stopped teaching me anything a long time ago.",
    "I pick up new technologies by building real things with them.",
    "I'd rather be stuck for a while than blindly copy-paste.",
    "I hold myself to a higher standard than most around me.",
];

export default function PhilosophyPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-white text-[#171717]">
            {/* Hero */}
            <section className="relative border-b border-neutral-200">
                <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-yellow-100/60 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-16 lg:px-12 lg:pb-32">
                    <div className="mb-16 flex flex-wrap items-center justify-between gap-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-600">
                            <span className="h-2 w-2 rounded-full bg-yellow-400" />
                            The JobJunction Philosophy
                        </div>

                        <EnquiryButton className="bg-yellow-400"/>

                        {/* <Link
                            href="/#enquiry"
                            className="group inline-flex items-center gap-2 rounded-full bg-[#facc15] px-5 py-3 text-sm font-bold text-neutral-950 transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-200/60"
                        >
                            Enquire Now
                            <ArrowUpRight
                                size={17}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link> */}
                    </div>

                    <div className="max-w-5xl">
                        <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-neutral-500">
                            Learn differently. Build deeply.
                        </p>

                        <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.055em] sm:text-7xl lg:text-[96px]">
                            Don't just learn
                            <br />
                            to <span className="relative inline-block">
                                code.
                                <span className="absolute -bottom-1 left-0 -z-0 h-3 w-full bg-yellow-300/80 sm:h-5" />
                            </span>
                            <br />
                            <span className="text-neutral-400">Learn to think.</span>
                        </h1>

                        <div className="mt-10 flex flex-col gap-7 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
                            <p className="max-w-xl text-lg leading-8 text-neutral-600 sm:text-xl">
                                We believe the best developers aren't made by watching more
                                tutorials. They're made by building, breaking, questioning, and
                                figuring things out.
                            </p>

                            <a
                                href="#our-beliefs"
                                className="group inline-flex w-fit shrink-0 items-center gap-3 text-sm font-semibold text-neutral-800"
                            >
                                Explore our philosophy
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 transition-all group-hover:border-yellow-400 group-hover:bg-yellow-300">
                                    <ArrowDown size={17} />
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-3 sm:mt-20 sm:grid-cols-3">
                        {[
                            {
                                icon: Code2,
                                title: "Build from scratch",
                                text: "Learn by creating real systems.",
                            },
                            {
                                icon: Lightbulb,
                                title: "Understand deeply",
                                text: "Know why things work.",
                            },
                            {
                                icon: Zap,
                                title: "Think independently",
                                text: "Solve problems without a template.",
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-2xl border border-neutral-200 bg-white/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-lg hover:shadow-neutral-100 sm:p-7"
                                >
                                    <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-neutral-900 transition-colors group-hover:bg-yellow-300">
                                        <Icon size={21} />
                                    </div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Philosophy sections */}
            <section
                id="our-beliefs"
                className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
            >
                <div className="mb-16 max-w-2xl sm:mb-24">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">
                        What we believe
                    </p>
                    <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                        Growth starts where
                        <span className="text-neutral-400"> comfort ends.</span>
                    </h2>
                </div>

                <div className="space-y-24 sm:space-y-32">
                    {philosophies.map((item, index) => (
                        <article
                            key={item.number}
                            className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
                        >
                            {/* Left column */}
                            <div>
                                <div className="mb-8 flex items-center gap-3">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-300 text-sm font-bold">
                                        {item.number}
                                    </span>
                                    <span className="text-xs font-bold tracking-[0.2em] text-neutral-500">
                                        {item.label}
                                    </span>
                                </div>

                                <h2 className="text-4xl font-semibold leading-[1.12] tracking-[-0.04em] sm:text-5xl">
                                    {item.title}
                                </h2>

                                <p className="mt-5 text-lg font-medium leading-7 text-neutral-600">
                                    {item.description}
                                </p>

                                <div className="mt-8 space-y-4 text-base leading-7 text-neutral-600">
                                    <p>{item.content}</p>
                                    <p>{item.detail}</p>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-2">
                                    {item.projects.map((project) => (
                                        <span
                                            key={project}
                                            className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs font-medium text-neutral-600"
                                        >
                                            {project}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right column */}
                            <div className="flex flex-col gap-5">
                                <div className="relative flex-1 overflow-hidden rounded-3xl bg-[#f7f7f5] p-7 sm:p-10 lg:p-12">
                                    <span className="absolute right-6 top-0 font-serif text-[120px] leading-none text-yellow-200 sm:right-10 sm:text-[160px]">
                                        “
                                    </span>

                                    <div className="relative flex h-full flex-col justify-between">
                                        <div>
                                            <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full bg-yellow-300">
                                                <Terminal size={20} />
                                            </div>
                                            <blockquote className="max-w-xl text-xl font-medium leading-9 tracking-tight text-neutral-800 sm:text-2xl sm:leading-10">
                                                {item.quote}
                                            </blockquote>
                                        </div>

                                        <div className="mt-10 flex items-center gap-4 border-t border-neutral-200 pt-6">
                                            <img
                                                src={item.image}
                                                alt={item.person}
                                                loading="lazy"
                                                className="h-14 w-14 shrink-0 rounded-full border border-neutral-200 bg-white object-cover"
                                            />
                                            <div className="min-w-0">
                                                <p className="font-semibold text-neutral-900">
                                                    {item.person}
                                                </p>
                                                <p className="mt-1 max-w-sm text-xs leading-5 text-neutral-500 sm:text-sm">
                                                    {item.role}
                                                </p>
                                            </div>
                                            <ArrowUpRight
                                                size={19}
                                                className="ml-auto shrink-0 text-neutral-400"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 p-5 sm:p-6">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-100">
                                        {index === 0 ? (
                                            <Code2 size={19} />
                                        ) : index === 1 ? (
                                            <GitBranch size={19} />
                                        ) : (
                                            <Lightbulb size={19} />
                                        )}
                                    </div>
                                    <p className="text-sm leading-6 text-neutral-600">
                                        <span className="font-semibold text-neutral-900">
                                            The principle:{" "}
                                        </span>
                                        {index === 0
                                            ? "Effort creates understanding that passive watching cannot."
                                            : index === 1
                                                ? "Rebuilding systems reveals the engineering beneath the surface."
                                                : "AI should amplify your judgment, not replace it."}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Who this is for */}
            <section className="border-y border-neutral-200 bg-[#fafaf8]">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20 lg:px-12">
                    <div>
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500">
                            Find your people
                        </p>
                        <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                            Does this
                            <br />
                            sound like you<span className="text-yellow-500">?</span>
                        </h2>
                        <p className="mt-6 max-w-md text-base leading-7 text-neutral-600">
                            You don't need to know everything. You just need the curiosity to
                            go deeper and the willingness to do the work.
                        </p>

                        <Link
                            href="/#enquiry"
                            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-neutral-800"
                        >
                            Let's build something
                            <ArrowRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {signals.map((signal, index) => (
                            <div
                                key={signal}
                                className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-yellow-300 hover:shadow-md hover:shadow-neutral-100 sm:p-6"
                            >
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-300">
                                    <Check size={16} strokeWidth={2.5} />
                                </div>
                                <p className="text-sm font-medium leading-6 text-neutral-700 sm:text-base">
                                    {signal}
                                </p>
                                <span className="ml-auto hidden text-xs font-medium text-neutral-400 sm:block">
                                    0{index + 1}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-neutral-950 px-7 py-16 text-white sm:px-12 sm:py-20 lg:px-20 lg:py-24">
                    <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-yellow-300/10 blur-3xl" />

                    <div className="relative max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-neutral-300">
                            <span className="h-2 w-2 rounded-full bg-yellow-400" />
                            Your next chapter starts here
                        </div>

                        <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                            Stop watching.
                            <br />
                            Start <span className="text-yellow-300">building.</span>
                        </h2>

                        <p className="mt-7 max-w-xl text-base leading-7 text-neutral-400 sm:text-lg sm:leading-8">
                            Learn the concepts. Build the projects. Face the hard problems.
                            Become the kind of developer who understands what's happening
                            under the hood.
                        </p>


                        <EnquiryButton className="bg-yellow-400" />

                        {/* <Link
                            href="/#enquiry"
                            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-yellow-300 px-7 py-4 text-sm font-bold text-neutral-950 transition-all duration-300 hover:bg-yellow-200 hover:shadow-lg hover:shadow-yellow-300/20"
                        >
                            Enquire Now
                            <ArrowUpRight
                                size={18}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </Link> */}

                        <p className="mt-6 text-xs text-neutral-500">
                            JobJunction · Learn by building, grow by understanding.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
