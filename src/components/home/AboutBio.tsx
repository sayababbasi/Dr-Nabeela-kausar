import Link from "next/link";
import { User, ChevronRight } from "lucide-react";

export default function AboutBio() {
    return (
        <section className="section-padding bg-[#f8fafc]" id="about">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Photo Placeholder */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                            <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl bg-gradient-to-br from-[#1e3a5f] to-[#0ea5e9] flex items-center justify-center shadow-2xl overflow-hidden">
                                <User className="w-32 h-32 text-white/30" />
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-slate-100">
                                <p className="text-xs font-bold text-[#1e3a5f] leading-tight">Dr. Nabeela Kausar</p>
                                <p className="text-[10px] text-slate-400">Iqra University, Islamabad</p>
                            </div>
                            <div className="absolute -top-4 -left-4 bg-[#1E3A5F] rounded-2xl shadow-lg p-3">
                                <p className="text-white text-xs font-bold">Associate Professor of AI</p>
                            </div>
                        </div>
                    </div>

                    {/* Bio Content */}
                    <div>
                        <span className="tag mb-3 inline-block">Biography</span>
                        <h2 className="section-title mb-5">
                            About Dr. Nabeela Kausar
                        </h2>
                        <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-6">
                            <p>
                                Dr. Nabeela Kausar serves as an Associate Professor in the
                                Department of Artificial Intelligence at Iqra University
                                Islamabad. With a doctoral degree in Computer Science, she has
                                built a distinguished academic career focused on applying deep
                                learning and intelligent computing to real-world healthcare
                                challenges.
                            </p>
                            <p>
                                Her research portfolio encompasses medical image analysis,
                                explainable artificial intelligence (XAI), computer vision, and
                                biomedical data analytics. She has authored and co-authored over
                                50 peer-reviewed articles in Q1/Q2 journals indexed in Scopus,
                                ISI Web of Science, and PubMed.
                            </p>
                            <p>
                                As an educator and research mentor, Dr. Kausar actively
                                supervises undergraduate and graduate students, guiding them
                                through independent research projects and thesis work grounded in
                                rigorous scientific methodology.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 gap-3 mb-7">
                            {[
                                { label: "Position", value: "Associate Professor" },
                                { label: "University", value: "Iqra University ISB" },
                                { label: "Department", value: "Artificial Intelligence" },
                                { label: "Degree", value: "PhD Computer Science" },
                            ].map(({ label, value }) => (
                                <div key={label} className="bg-white rounded-xl p-3 border border-slate-100">
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                                    <p className="text-sm font-semibold text-[#1e3a5f]">{value}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="/about" className="btn-primary inline-flex items-center gap-2">
                            Read Full Biography <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
