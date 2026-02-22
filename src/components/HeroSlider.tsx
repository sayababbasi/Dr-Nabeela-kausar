"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, BookOpen, Brain, Eye, Microscope } from "lucide-react";

const slides = [
    {
        id: 1,
        bgColor: "from-[#0a1628] via-[#1e3a5f] to-[#0a2540]",
        accentColor: "bg-[#0ea5e9]",
        tagline: "Pioneering AI-Driven Healthcare",
        keywords: ["Deep Learning", "Explainable AI", "Computer Vision"],
        icon: Brain,
        description:
            "Advancing the frontiers of artificial intelligence with a focus on medical image analysis and diagnostic support systems.",
    },
    {
        id: 2,
        bgColor: "from-[#0a2540] via-[#1a3a6f] to-[#0d1b2a]",
        accentColor: "bg-[#c9a84c]",
        tagline: "Transforming Cancer Diagnostics",
        keywords: ["Cancer Diagnosis", "Prognosis Prediction", "Medical AI"],
        icon: Microscope,
        description:
            "Developing intelligent computational tools that support clinicians in early cancer detection and patient outcome prediction.",
    },
    {
        id: 3,
        bgColor: "from-[#0d1b2a] via-[#193b5e] to-[#101e35]",
        accentColor: "bg-emerald-500",
        tagline: "Shaping Future AI Researchers",
        keywords: ["AI Education", "Research Supervision", "Innovation"],
        icon: BookOpen,
        description:
            "Nurturing the next generation of researchers through rigorous academic training, mentoring, and internationally recognized research output.",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [animate, setAnimate] = useState(true);

    const goToSlide = useCallback((index: number) => {
        setAnimate(false);
        setTimeout(() => {
            setCurrent(index);
            setAnimate(true);
        }, 200);
    }, []);

    const next = useCallback(() => {
        goToSlide((current + 1) % slides.length);
    }, [current, goToSlide]);

    const prev = useCallback(() => {
        goToSlide((current - 1 + slides.length) % slides.length);
    }, [current, goToSlide]);

    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    const slide = slides[current];
    const IconComponent = slide.icon;

    return (
        <section
            className={`relative min-h-screen flex items-center bg-gradient-to-br ${slide.bgColor} transition-all duration-700 overflow-hidden`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Left Dark Overlay - fades from dark to transparent */}
            <div
                className="absolute inset-0 z-[1]"
                style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 80%, transparent 95%)",
                }}
            />

            {/* Glowing Orbs */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-[#0ea5e9]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1e3a5f]/20 rounded-full blur-3xl" />

            <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div
                        className={`space-y-6 transition-all duration-500 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-sm">
                            <span className={`w-2 h-2 rounded-full ${slide.accentColor} animate-pulse`} />
                            <span className="text-white/80 text-xs font-medium uppercase tracking-widest">
                                {slide.tagline}
                            </span>
                        </div>

                        {/* Name & Title */}
                        <div className="space-y-2">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Dr. Nabeela
                                <span className="block text-[#0ea5e9]">Kausar</span>
                            </h1>
                            <p className="text-slate-300 text-lg font-medium">
                                Associate Professor of Artificial Intelligence
                            </p>
                            <p className="text-slate-400 text-sm flex items-center gap-2">
                                <span className="w-1 h-1 bg-[#0ea5e9] rounded-full" />
                                Iqra University Islamabad, Pakistan
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 text-base leading-relaxed max-w-lg">
                            {slide.description}
                        </p>

                        {/* Keywords */}
                        <div className="flex flex-wrap gap-2">
                            {slide.keywords.map((kw) => (
                                <span
                                    key={kw}
                                    className="px-3 py-1 text-xs font-semibold bg-white/10 border border-white/20 text-white rounded-full backdrop-blur-sm"
                                >
                                    {kw}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Link href="/research" className="inline-flex items-center gap-2 bg-white text-[#1e3a5f] px-6 py-3 rounded-lg font-semibold text-sm shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl">
                                View Research
                            </Link>
                            <Link
                                href="/publications"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 hover:bg-white/20"
                            >
                                View Publications
                            </Link>
                        </div>
                    </div>

                    {/* Right Side Visual */}
                    <div
                        className={`hidden lg:flex items-center justify-center transition-all duration-500 delay-100 ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
                            }`}
                    >
                        <div className="relative">
                            {/* Central Icon Card */}
                            <div className="w-64 h-64 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                                <IconComponent className="w-32 h-32 text-[#0ea5e9]" />
                            </div>
                            {/* Floating Stat Badges */}
                            <div className="absolute -top-10 -right-10 bg-white rounded-2xl shadow-xl p-5 text-center min-w-28">
                                <p className="text-3xl font-bold text-[#1e3a5f]">50+</p>
                                <p className="text-sm text-slate-500 font-medium">Publications</p>
                            </div>
                            <div className="absolute -bottom-8 -left-10 bg-white rounded-2xl shadow-xl p-5 text-center min-w-28">
                                <p className="text-3xl font-bold text-[#1e3a5f]">10+</p>
                                <p className="text-sm text-slate-500 font-medium">Years Exp.</p>
                            </div>
                            <div className="absolute top-1/2 -right-24 bg-white rounded-2xl shadow-xl p-5 text-center min-w-24">
                                <p className="text-3xl font-bold text-[#0ea5e9]">PhD</p>
                                <p className="text-sm text-slate-500 font-medium">CS</p>
                            </div>
                            {/* Decorative Ring */}
                            <div className="absolute inset-0 -m-10 border-2 border-white/10 rounded-[48px]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 z-10">
                <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm cursor-pointer"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`transition-all duration-300 rounded-full ${i === current
                                ? "w-8 h-2.5 bg-white"
                                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
                <button
                    onClick={next}
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors backdrop-blur-sm cursor-pointer"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-1 text-white/40 z-10">
                <span className="text-[10px] uppercase tracking-widest rotate-90 mb-4">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
            </div>
        </section>
    );
}
