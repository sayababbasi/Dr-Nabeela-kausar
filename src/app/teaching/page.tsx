import type { Metadata } from "next";
import { BookOpen, Users, Star, Target, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
    title: "Teaching",
    description:
        "Explore Dr. Nabeela Kausar's teaching approach, courses, student engagement philosophy, and research-led curriculum at Iqra University.",
};

const courses = [
    { code: "AI-401", name: "Artificial Intelligence", level: "BS", semester: "Fall" },
    { code: "ML-502", name: "Machine Learning", level: "MS/BS", semester: "Spring" },
    { code: "DL-601", name: "Deep Learning", level: "MS", semester: "Fall" },
    { code: "CV-502", name: "Computer Vision", level: "BS/MS", semester: "Spring" },
    { code: "NLP-601", name: "Natural Language Processing", level: "MS", semester: "Fall" },
    { code: "DM-401", name: "Data Mining & Analytics", level: "BS", semester: "Spring" },
    { code: "PY-301", name: "Python for AI", level: "BS", semester: "Fall" },
    { code: "RM-501", name: "Research Methodology", level: "MS", semester: "Both" },
];

const principles = [
    {
        icon: FlaskConical,
        title: "Research-Led Teaching",
        desc: "Every course is enriched with cutting-edge research findings. Students engage with recent papers, replicate experiments, and are exposed to open research problems.",
    },
    {
        icon: Target,
        title: "Practical & Problem-Based",
        desc: "Theoretical foundations are paired with hands-on implementation. Students build real ML/DL systems from scratch using Python, TensorFlow, and PyTorch.",
    },
    {
        icon: Star,
        title: "Critical & Independent Thinking",
        desc: "Students are challenged to question assumptions, evaluate model limitations, and propose novel solutions rather than merely applying pre-existing tools.",
    },
    {
        icon: Users,
        title: "Collaborative Learning",
        desc: "Group projects, peer reviews, and team research simulations develop collaborative skills and prepare students for real-world research and industry environments.",
    },
];

const supervisionStats = [
    { label: "BS FYP Students Supervised", count: "40+" },
    { label: "MS/MPhil Theses Supervised", count: "20+" },
    { label: "Research Papers Co-authored with Students", count: "25+" },
    { label: "Students Who Published in Q1/Q2 Journals", count: "10+" },
];

export default function TeachingPage() {
    return (
        <div className="pt-16">
            {/* Hero */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs uppercase tracking-widest mb-4">
                        Academia
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fff]">Teaching</h1>
                    <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
                        Dedicated to evidence-based, research-led teaching that develops
                        analytically rigorous and globally competitive AI practitioners.
                    </p>
                </div>
            </div>

            {/* Courses */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="section-title flex items-center gap-2 mb-2">
                        <BookOpen className="w-7 h-7 text-[#0ea5e9]" /> Courses Taught
                    </h2>
                    <p className="text-slate-500 text-sm mb-8">
                        Undergraduate and graduate-level courses offered at Iqra University Islamabad.
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm">
                        <table className="w-full text-sm">
                            <thead className="bg-[#1e3a5f] text-white">
                                <tr>
                                    {["Code", "Course Title", "Level", "Semester"].map((h) => (
                                        <th key={h} className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider">{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((c, i) => (
                                    <tr key={c.code} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-blue-50/50 transition-colors`}>
                                        <td className="px-5 py-3.5 font-mono text-xs text-[#0ea5e9] font-semibold">{c.code}</td>
                                        <td className="px-5 py-3.5 font-medium text-slate-700">{c.name}</td>
                                        <td className="px-5 py-3.5">
                                            <span className="tag text-[10px]">{c.level}</span>
                                        </td>
                                        <td className="px-5 py-3.5 text-slate-500 text-xs">{c.semester}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Teaching Philosophy */}
            <section className="section-padding bg-[#f8fafc]">
                <div className="container-custom">
                    <h2 className="section-title mb-10">Teaching Approach</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {principles.map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="card p-6 flex gap-4">
                                <div className="w-11 h-11 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center shrink-0">
                                    <Icon className="w-5 h-5 text-[#0ea5e9]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1e3a5f] text-sm mb-1">{title}</h3>
                                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Supervision Stats */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="section-title flex items-center gap-2 mb-10">
                        <Users className="w-7 h-7 text-[#0ea5e9]" /> Research Supervision
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
                        {supervisionStats.map(({ label, count }) => (
                            <div key={label} className="card p-5 text-center hover:-translate-y-1 transition-transform">
                                <p className="text-3xl font-bold text-[#1e3a5f] mb-1">{count}</p>
                                <p className="text-xs text-slate-500 leading-tight">{label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mentorship Description */}
                    <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0a2540] rounded-2xl p-8 text-white max-w-3xl">
                        <h3 className="text-lg font-bold mb-3 text-[#0ea5e9]">Student & Research Mentorship</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Dr. Kausar maintains an open-door policy for students pursuing research. She provides
                            comprehensive mentorship from initial topic formulation through experimental design,
                            implementation, writing, and peer review. Students under her supervision are regularly
                            guided toward international publication and conference presentations, building careers
                            as independent AI researchers.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
