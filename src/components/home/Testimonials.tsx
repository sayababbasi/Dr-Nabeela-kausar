"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "SAYAB GULFARAZ ABBASI",
        role: "BS Artificial Intelligence",
        org: "Iqra University Islamabad",
        text: "Dr. Nabeela is one of the most dedicated professors I've encountered. She explains complex Deep Learning concepts with clarity and always encourages critical thinking. Her lectures are intellectually demanding but incredibly enriching.",
        type: "Student",
        gender: "male" as const,
    },
    {
        name: "Ahmed Hassan",
        role: "BS Computer Science Graduate",
        org: "Iqra University Islamabad",
        text: "Dr. Nabeela's guidance was transformative. Her hands-on research supervision style, deep expertise in deep learning, and attention to detail made my thesis one of the most rigorous projects I've ever undertaken. She holds every student to international publication standards.",
        type: "Student",
        gender: "male" as const,
    },
    {
        name: "Dr. Maria Torres",
        role: "Research Collaborator",
        org: "University of Cambridge, UK",
        text: "Collaborating with Dr. Nabeela on explainable AI for medical imaging was an outstanding experience. She brings exceptional technical depth, clear communication, and a strong commitment to scientific integrity. I look forward to continued collaboration.",
        type: "Collaborator",
        gender: "female" as const,
    },

    {
        name: "Prof. Syed Imran",
        role: "Associate Professor",
        org: "COMSATS University, Pakistan",
        text: "Dr. Nabeela is a distinguished researcher whose work on cancer diagnosis using deep learning has made a significant contribution to the field. Her publication record speaks volumes about her scholarly commitment and research excellence.",
        type: "Peer",
        gender: "male" as const,
    },
    {
        name: "Zainab Noor",
        role: "BS Artificial Intelligence",
        org: "Iqra University Islamabad",
        text: "Dr. Nabeela's passion for artificial intelligence is truly inspiring. Her ability to break down complex deep learning architectures into intuitive concepts helped me develop a strong foundation in AI. She always pushed us to go beyond textbooks and explore real-world applications, which made her classes the highlight of my degree.",
        type: "Student",
        gender: "female" as const,
    },
];

function GenderIcon({ gender }: { gender: "male" | "female" }) {
    if (gender === "male") {
        return (
            <svg viewBox="0 0 64 64" fill="currentColor" className="w-7 h-7">
                {/* Face (white oval) */}
                <ellipse cx="32" cy="24" rx="10" ry="12" fill="white" />
                {/* Short styled hair with side part */}
                <path d="M22 20c0-11 20-11 20 0v2c0 0-2-6-10-6s-10 6-10 6z" />
                {/* Left ear */}
                <ellipse cx="22" cy="24" rx="2" ry="3" />
                {/* Right ear */}
                <ellipse cx="42" cy="24" rx="2" ry="3" />
                {/* Torso / shoulders */}
                <path d="M6 60c0-12 12-22 26-22s26 10 26 22z" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" fill="currentColor" className="w-7 h-7">
            {/* Face (white oval) */}
            <ellipse cx="32" cy="24" rx="10" ry="12" fill="white" />
            {/* Long hair flowing past shoulders */}
            <path d="M20 18c0-12 24-12 24 0v6c2 0 3 2 3 5s-1 6-3 8v4H20v-4c-2-2-3-5-3-8s1-5 3-5z" />
            {/* Torso / shoulders with V-neck */}
            <path d="M8 60c0-11 10-20 24-20s24 9 24 20z" />
            <path d="M27 40l5 8 5-8" fill="white" />
        </svg>
    );
}

function TypeBadge({ type }: { type: string }) {
    const colors: Record<string, string> = {
        Student: "bg-blue-50 text-blue-700 border-blue-100",
        Collaborator: "bg-emerald-50 text-emerald-700 border-emerald-100",
        Peer: "bg-purple-50 text-purple-700 border-purple-100",
    };
    return (
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${colors[type] || "bg-slate-50 text-slate-600 border-slate-100"}`}>
            {type}
        </span>
    );
}

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    const t = testimonials[current];

    return (
        <section className="section-padding bg-white overflow-hidden" id="testimonials">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="tag mb-3 inline-block">Academic Impact</span>
                    <h2 className="section-title">Testimonials</h2>
                    <p className="section-subtitle mx-auto">
                        Perspectives from students, collaborators, and academic peers on Dr. Kausar&apos;s teaching and research.
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-md relative">
                        {/* Quote Icon */}
                        <div className="absolute top-6 right-8 opacity-10">
                            <Quote className="w-16 h-16 text-[#1e3a5f]" />
                        </div>

                        {/* Type Badge */}
                        <div className="mb-4">
                            <TypeBadge type={t.type} />
                        </div>

                        {/* Text */}
                        <blockquote className="text-slate-600 text-base leading-relaxed italic mb-6 relative z-10">
                            &ldquo;{t.text}&rdquo;
                        </blockquote>

                        {/* Attribution */}
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 ${t.gender === "male"
                                ? "bg-gradient-to-br from-[#1e3a5f] to-[#0ea5e9]"
                                : "bg-gradient-to-br from-[#7c3aed] to-[#ec4899]"
                                }`}>
                                <GenderIcon gender={t.gender} />
                            </div>
                            <div>
                                <p className="font-bold text-[#1e3a5f] text-sm">{t.name}</p>
                                <p className="text-slate-500 text-xs">{t.role}</p>
                                <p className="text-slate-400 text-xs">{t.org}</p>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-8">
                        <button
                            onClick={prev}
                            className="w-11 h-11 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white shadow-md hover:bg-[#2d5a8e] transition-all duration-200 hover:scale-110 cursor-pointer"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-[#1e3a5f] w-6" : "bg-slate-300"
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-11 h-11 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white shadow-md hover:bg-[#2d5a8e] transition-all duration-200 hover:scale-110 cursor-pointer"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
