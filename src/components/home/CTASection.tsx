import Link from "next/link";
import { Mail, GitMerge } from "lucide-react";

export default function CTASection() {
    return (
        <section className="section-padding bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#0a2540] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0ea5e9]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10 text-center">
                <div className="max-w-2xl mx-auto">
                    <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs uppercase tracking-widest mb-6">
                        Open to Collaboration
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                        Interested in Research <br />
                        <span className="text-[#0ea5e9]">Collaboration?</span>
                    </h2>
                    <p className="text-slate-300 text-base leading-relaxed mb-8">
                        Dr. Nabeela Kausar welcomes academic collaboration, research
                        partnership, joint publications, and student co-supervision
                        proposals from national and international institutions.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-[#1e3a5f] px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-all duration-300 shadow-lg"
                        >
                            <Mail className="w-4 h-4" />
                            Contact for Research
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 border-2 border-white text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all duration-300"
                        >
                            <GitMerge className="w-4 h-4" />
                            Academic Collaboration
                        </Link>
                    </div>

                    {/* Info Pills */}
                    <div className="flex flex-wrap justify-center gap-4 mt-10">
                        {[
                            "International Journals",
                            "Research Projects",
                            "PhD Co-supervision",
                            "Conference Presentations",
                        ].map((item) => (
                            <div
                                key={item}
                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs font-medium backdrop-blur-sm"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
