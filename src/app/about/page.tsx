import type { Metadata } from "next";
import { GraduationCap, Briefcase, Award, BookOpen, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "About",
    description:
        "Learn about Dr. Nabeela Kausar's academic background, career, research philosophy, awards, and educational timeline.",
};

const education = [
    {
        degree: "Doctor of Philosophy (PhD) in Computer Science",
        institution: "University (Full details upon request)",
        period: "2014 – 2018",
        focus: "Deep Learning, Medical Image Analysis",
    },
    {
        degree: "Master of Science (MS) in Computer Science",
        institution: "Comsats University Islamabad",
        period: "2010 – 2012",
        focus: "Machine Learning, Pattern Recognition",
    },
    {
        degree: "Bachelor of Science (BS) in Computer Science",
        institution: "University of Punjab",
        period: "2006 – 2010",
        focus: "Software Engineering, Fundamentals",
    },
];

const appointments = [
    {
        role: "Associate Professor of Artificial Intelligence",
        org: "Iqra University Islamabad",
        period: "2020 – Present",
        desc: "Teaching AI, ML, and DL courses; supervising graduate and undergraduate research; leading research group in medical AI.",
    },
    {
        role: "Assistant Professor of Computer Science",
        org: "Iqra University Islamabad",
        period: "2018 – 2020",
        desc: "Joined faculty after PhD; developed AI curriculum and established departmental research direction in deep learning.",
    },
    {
        role: "Research Fellow",
        org: "National Center for AI (NCAI)",
        period: "2016 – 2018",
        desc: "Conducted doctoral research on intelligent medical imaging systems under national research program fellowship.",
    },
];

const awards = [
    "Best Research Paper Award – International Conference on AI in Healthcare, 2023",
    "HEC-Recognized PhD Supervisor – Higher Education Commission Pakistan, 2022",
    "Outstanding Teacher Award – Faculty of Computing, Iqra University, 2021",
    "Research Excellence Recognition – Iqra University Annual Research Conference, 2020",
    "NCAI Doctoral Research Fellowship – National Center for AI, 2016",
];

export default function AboutPage() {
    return (
        <div className="pt-16">
            {/* Hero */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs uppercase tracking-widest mb-4">
                        Academic Profile
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fff]">
                        About Dr. Nabeela Kausar
                    </h1>
                    <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
                        Associate Professor of Artificial Intelligence at Iqra University
                        Islamabad — researcher, educator, and mentor in AI and medical
                        imaging.
                    </p>
                </div>
            </div>

            {/* Biography */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Profile Card */}
                        <div className="lg:col-span-1">
                            <div className="card p-6 sticky top-24">
                                <div className="w-full h-48 bg-gradient-to-br from-[#1e3a5f] to-[#0ea5e9] rounded-xl flex items-center justify-center mb-4">
                                    <span className="text-white text-4xl font-bold">NK</span>
                                </div>
                                <h2 className="text-lg font-bold text-[#1e3a5f] mb-1">Dr. Nabeela Kausar</h2>
                                <p className="text-sm text-slate-500 mb-4">Associate Professor of AI</p>
                                <div className="space-y-2 text-sm text-slate-600">
                                    {[
                                        ["Department", "Artificial Intelligence"],
                                        ["University", "Iqra University, ISB"],
                                        ["Degree", "PhD Computer Science"],
                                        ["Specialization", "Deep Learning & XAI"],
                                        ["Email", "nabeela.kausar@iqraisb.edu.pk"],
                                    ].map(([label, val]) => (
                                        <div key={label} className="flex gap-2">
                                            <span className="font-medium text-slate-400 w-28 shrink-0">{label}:</span>
                                            <span className="text-slate-700 text-xs">{val}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="lg:col-span-2 space-y-6">
                            <div>
                                <h2 className="section-title flex items-center gap-2">
                                    <BookOpen className="w-6 h-6 text-[#0ea5e9]" /> Biography
                                </h2>
                                <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                                    <p>
                                        Dr. Nabeela Kausar is an accomplished academic and researcher
                                        serving as Associate Professor in the Department of Artificial
                                        Intelligence at Iqra University Islamabad. With over a decade of
                                        dedicated work in AI, machine learning, and medical image
                                        analysis, she has established herself as a leading voice in the
                                        application of deep learning to healthcare.
                                    </p>
                                    <p>
                                        Her doctoral research focused on computer-aided diagnosis systems
                                        using deep neural networks, with particular emphasis on detecting
                                        and classifying medical conditions from radiological and
                                        histopathological images. This foundational work has evolved into
                                        a rich research program spanning explainable AI (XAI), computer
                                        vision, and biomedical data analytics.
                                    </p>
                                    <p>
                                        Dr. Kausar has authored and co-authored over 50 peer-reviewed
                                        articles published in ISI, Scopus, and PubMed-indexed journals
                                        including PLOS ONE, Computers in Biology and Medicine, and IEEE
                                        Access. Her work has received significant citations in the
                                        international AI and medical informatics communities.
                                    </p>
                                    <p>
                                        Beyond research, Dr. Kausar is a passionate educator committed to
                                        developing the next generation of AI researchers and practitioners.
                                        She integrates her research expertise into teaching, ensuring that
                                        students gain exposure to frontier developments in the field. She
                                        actively supervises undergraduate FYPs, MS theses, and MPhil
                                        dissertations, many of which have led to peer-reviewed publications.
                                    </p>
                                </div>
                            </div>

                            {/* Research Philosophy */}
                            <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100">
                                <h3 className="font-bold text-[#1e3a5f] mb-3">Research Philosophy</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Dr. Kausar believes that artificial intelligence should be
                                    developed with rigorous scientific standards, transparency, and a
                                    commitment to real-world impact. Her research philosophy centers on
                                    building AI systems that are not only accurate but also
                                    interpretable, reproducible, and ethically grounded — particularly
                                    in high-stakes domains such as clinical medicine, where trust and
                                    explainability are paramount.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Timeline */}
            <section className="section-padding bg-[#f8fafc]">
                <div className="container-custom">
                    <h2 className="section-title flex items-center gap-2 mb-10">
                        <GraduationCap className="w-7 h-7 text-[#0ea5e9]" /> Education
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                        {/* Timeline */}
                        <div className="lg:col-span-3 relative">
                            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#e2e8f0]" />
                            <div className="space-y-8">
                                {education.map((edu, i) => (
                                    <div key={i} className="flex gap-6 relative">
                                        <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-sm shrink-0 z-10 shadow-md">
                                            {edu.period.split("–")[0].trim().slice(-2)}
                                        </div>
                                        <div className="card p-5 flex-1">
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                                <h3 className="text-sm font-bold text-[#1e3a5f]">{edu.degree}</h3>
                                                <span className="tag text-[10px]">{edu.period}</span>
                                            </div>
                                            <p className="text-slate-500 text-xs mb-1">{edu.institution}</p>
                                            <p className="text-slate-400 text-xs">Focus: {edu.focus}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Illustration */}
                        <div className="lg:col-span-2 hidden lg:flex items-center justify-center sticky top-32">
                            <svg viewBox="0 0 320 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs opacity-90">
                                {/* Background circle */}
                                <circle cx="160" cy="180" r="140" fill="#eef4ff" />
                                <circle cx="160" cy="180" r="110" fill="#dbeafe" opacity="0.5" />

                                {/* Graduation cap */}
                                <polygon points="160,80 100,115 160,150 220,115" fill="#1e3a5f" />
                                <rect x="145" y="150" width="30" height="6" fill="#1e3a5f" rx="3" />
                                <line x1="220" y1="115" x2="220" y2="155" stroke="#0ea5e9" strokeWidth="3" />
                                <circle cx="220" cy="158" r="5" fill="#0ea5e9" />
                                <path d="M100 115 L100 145 Q160 175 220 145 L220 115" fill="#1e3a5f" opacity="0.3" />

                                {/* Book 1 */}
                                <g transform="translate(70, 200) rotate(-10)">
                                    <rect width="60" height="45" rx="4" fill="#1e3a5f" />
                                    <rect x="5" y="5" width="50" height="35" rx="2" fill="#2d5a8e" />
                                    <line x1="30" y1="12" x2="30" y2="33" stroke="#0ea5e9" strokeWidth="1" />
                                    <line x1="12" y1="15" x2="27" y2="15" stroke="white" strokeWidth="1.5" opacity="0.5" />
                                    <line x1="12" y1="21" x2="27" y2="21" stroke="white" strokeWidth="1.5" opacity="0.5" />
                                    <line x1="12" y1="27" x2="24" y2="27" stroke="white" strokeWidth="1.5" opacity="0.5" />
                                </g>

                                {/* Book 2 */}
                                <g transform="translate(180, 210) rotate(8)">
                                    <rect width="55" height="40" rx="4" fill="#0ea5e9" />
                                    <rect x="5" y="5" width="45" height="30" rx="2" fill="#38bdf8" />
                                    <line x1="15" y1="13" x2="40" y2="13" stroke="white" strokeWidth="1.5" opacity="0.5" />
                                    <line x1="15" y1="19" x2="35" y2="19" stroke="white" strokeWidth="1.5" opacity="0.5" />
                                    <line x1="15" y1="25" x2="30" y2="25" stroke="white" strokeWidth="1.5" opacity="0.5" />
                                </g>

                                {/* Neural network nodes */}
                                <circle cx="100" cy="290" r="6" fill="#1e3a5f" opacity="0.6" />
                                <circle cx="140" cy="310" r="5" fill="#0ea5e9" opacity="0.5" />
                                <circle cx="180" cy="295" r="7" fill="#1e3a5f" opacity="0.4" />
                                <circle cx="220" cy="310" r="4" fill="#0ea5e9" opacity="0.6" />
                                <circle cx="260" cy="290" r="5" fill="#1e3a5f" opacity="0.5" />
                                <line x1="100" y1="290" x2="140" y2="310" stroke="#1e3a5f" strokeWidth="1" opacity="0.2" />
                                <line x1="140" y1="310" x2="180" y2="295" stroke="#0ea5e9" strokeWidth="1" opacity="0.2" />
                                <line x1="180" y1="295" x2="220" y2="310" stroke="#1e3a5f" strokeWidth="1" opacity="0.2" />
                                <line x1="220" y1="310" x2="260" y2="290" stroke="#0ea5e9" strokeWidth="1" opacity="0.2" />

                                {/* Light bulb */}
                                <g transform="translate(245, 160)">
                                    <circle cx="15" cy="15" r="14" fill="#fbbf24" opacity="0.2" />
                                    <circle cx="15" cy="15" r="10" fill="#fbbf24" opacity="0.3" />
                                    <path d="M10 20 Q15 28 20 20" fill="none" stroke="#f59e0b" strokeWidth="2" />
                                    <path d="M9 7 Q15 -2 21 7 Q23 15 20 20 L10 20 Q7 15 9 7Z" fill="#fbbf24" opacity="0.5" />
                                    <rect x="11" y="22" width="8" height="4" rx="1" fill="#f59e0b" opacity="0.6" />
                                </g>

                                {/* Floating dots */}
                                <circle cx="60" cy="160" r="3" fill="#0ea5e9" opacity="0.3" />
                                <circle cx="280" cy="140" r="2" fill="#1e3a5f" opacity="0.3" />
                                <circle cx="50" cy="280" r="2.5" fill="#0ea5e9" opacity="0.2" />
                                <circle cx="270" cy="260" r="3" fill="#1e3a5f" opacity="0.2" />

                                {/* Pencil */}
                                <g transform="translate(120, 260) rotate(25)">
                                    <rect width="50" height="8" rx="1" fill="#f59e0b" opacity="0.7" />
                                    <polygon points="50,0 58,4 50,8" fill="#1e3a5f" opacity="0.6" />
                                    <rect width="8" height="8" rx="1" fill="#ef4444" opacity="0.4" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Academic Appointments */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="section-title flex items-center gap-2 mb-10">
                        <Briefcase className="w-7 h-7 text-[#0ea5e9]" /> Academic Appointments
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                        {/* Appointments list */}
                        <div className="lg:col-span-3 space-y-5">
                            {appointments.map((apt, i) => (
                                <div key={i} className="card p-6 flex gap-4">
                                    <div className="w-2 bg-[#0ea5e9] rounded-full shrink-0" />
                                    <div>
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                            <h3 className="font-bold text-[#1e3a5f] text-sm">{apt.role}</h3>
                                            <span className="tag text-[10px]">{apt.period}</span>
                                        </div>
                                        <p className="text-slate-500 text-xs font-medium mb-1">{apt.org}</p>
                                        <p className="text-slate-500 text-xs leading-relaxed">{apt.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Illustration */}
                        <div className="lg:col-span-2 hidden lg:flex items-center justify-center sticky top-32">
                            <svg viewBox="0 0 320 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs opacity-90">
                                {/* Background circle */}
                                <circle cx="160" cy="180" r="140" fill="#f0f9ff" />
                                <circle cx="160" cy="180" r="110" fill="#e0f2fe" opacity="0.5" />

                                {/* Briefcase */}
                                <g transform="translate(105, 95)">
                                    <rect y="20" width="110" height="70" rx="8" fill="#1e3a5f" />
                                    <rect x="35" y="0" width="40" height="25" rx="5" fill="none" stroke="#1e3a5f" strokeWidth="5" />
                                    <rect x="15" y="40" width="80" height="3" rx="1.5" fill="#0ea5e9" opacity="0.5" />
                                    <rect x="15" y="50" width="60" height="3" rx="1.5" fill="#0ea5e9" opacity="0.3" />
                                    <rect x="15" y="60" width="40" height="3" rx="1.5" fill="#0ea5e9" opacity="0.2" />
                                    <circle cx="55" cy="35" r="6" fill="#0ea5e9" />
                                </g>

                                {/* Rising career chart */}
                                <g transform="translate(60, 200)">
                                    <rect x="0" y="60" width="22" height="40" rx="3" fill="#1e3a5f" opacity="0.3" />
                                    <rect x="35" y="40" width="22" height="60" rx="3" fill="#1e3a5f" opacity="0.5" />
                                    <rect x="70" y="20" width="22" height="80" rx="3" fill="#1e3a5f" opacity="0.7" />
                                    <rect x="105" y="0" width="22" height="100" rx="3" fill="#0ea5e9" />
                                    {/* Arrow */}
                                    <path d="M10 55 L45 35 L80 15 L115 -5" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 3" />
                                    <polygon points="120,-8 110,-2 115,-10" fill="#0ea5e9" />
                                </g>

                                {/* Trophy */}
                                <g transform="translate(200, 210)">
                                    <path d="M25 0 L55 0 L50 35 L30 35Z" fill="#fbbf24" opacity="0.6" />
                                    <path d="M55 5 Q75 5 70 25 Q68 30 55 28" fill="#fbbf24" opacity="0.3" />
                                    <path d="M25 5 Q5 5 10 25 Q12 30 25 28" fill="#fbbf24" opacity="0.3" />
                                    <rect x="33" y="35" width="14" height="10" rx="2" fill="#f59e0b" opacity="0.5" />
                                    <rect x="28" y="45" width="24" height="6" rx="2" fill="#f59e0b" opacity="0.5" />
                                    <path d="M36 12 L40 20 L48 20 L42 26 L44 34 L40 28 L36 34 L38 26 L32 20 L40 20Z" fill="white" opacity="0.5" />
                                </g>

                                {/* Floating dots */}
                                <circle cx="55" cy="130" r="4" fill="#0ea5e9" opacity="0.3" />
                                <circle cx="270" cy="120" r="3" fill="#1e3a5f" opacity="0.3" />
                                <circle cx="280" cy="280" r="4" fill="#0ea5e9" opacity="0.2" />
                                <circle cx="45" cy="310" r="3" fill="#1e3a5f" opacity="0.2" />
                                <circle cx="160" cy="330" r="2.5" fill="#0ea5e9" opacity="0.25" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards */}
            <section className="section-padding bg-[#f8fafc]">
                <div className="container-custom">
                    <h2 className="section-title flex items-center gap-2 mb-10">
                        <Award className="w-7 h-7 text-[#0ea5e9]" /> Awards & Recognitions
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                        {/* Awards list */}
                        <ul className="lg:col-span-3 space-y-3">
                            {awards.map((award, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <ChevronRight className="w-4 h-4 text-[#0ea5e9] mt-0.5 shrink-0" />
                                    <span className="text-sm text-slate-600">{award}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Decorative Illustration */}
                        <div className="lg:col-span-2 hidden lg:flex items-center justify-center sticky top-32">
                            <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs opacity-90">
                                {/* Background circle */}
                                <circle cx="160" cy="160" r="140" fill="#eef4ff" />
                                <circle cx="160" cy="160" r="110" fill="#dbeafe" opacity="0.5" />

                                {/* Medal */}
                                <g transform="translate(120, 60)">
                                    {/* Ribbon */}
                                    <path d="M30 0 L15 50 L40 35 L65 50 L50 0Z" fill="#0ea5e9" opacity="0.6" />
                                    <path d="M35 0 L20 45 L40 32 L60 45 L45 0Z" fill="#38bdf8" opacity="0.4" />
                                    {/* Medal circle */}
                                    <circle cx="40" cy="70" r="28" fill="#fbbf24" opacity="0.7" />
                                    <circle cx="40" cy="70" r="22" fill="#f59e0b" opacity="0.5" />
                                    {/* Star on medal */}
                                    <path d="M40 52 L43 63 L55 63 L46 70 L49 81 L40 74 L31 81 L34 70 L25 63 L37 63Z" fill="white" opacity="0.6" />
                                </g>

                                {/* Certificate */}
                                <g transform="translate(55, 170)">
                                    <rect width="90" height="65" rx="5" fill="white" stroke="#1e3a5f" strokeWidth="2" />
                                    <rect x="4" y="4" width="82" height="57" rx="3" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                                    <line x1="20" y1="20" x2="70" y2="20" stroke="#1e3a5f" strokeWidth="2" opacity="0.4" />
                                    <line x1="25" y1="30" x2="65" y2="30" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.3" />
                                    <line x1="30" y1="38" x2="60" y2="38" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.2" />
                                    <circle cx="45" cy="50" r="6" fill="#fbbf24" opacity="0.4" />
                                </g>

                                {/* Laurel wreath (left) */}
                                <g transform="translate(170, 180)">
                                    <path d="M30 60 Q10 45 15 25 Q18 15 25 10" fill="none" stroke="#1e3a5f" strokeWidth="2" opacity="0.3" />
                                    <ellipse cx="18" cy="35" rx="6" ry="10" transform="rotate(-20, 18, 35)" fill="#1e3a5f" opacity="0.15" />
                                    <ellipse cx="15" cy="50" rx="5" ry="8" transform="rotate(-10, 15, 50)" fill="#1e3a5f" opacity="0.12" />
                                    <ellipse cx="22" cy="20" rx="5" ry="9" transform="rotate(-30, 22, 20)" fill="#1e3a5f" opacity="0.18" />
                                </g>

                                {/* Laurel wreath (right) */}
                                <g transform="translate(170, 180)">
                                    <path d="M50 60 Q70 45 65 25 Q62 15 55 10" fill="none" stroke="#1e3a5f" strokeWidth="2" opacity="0.3" />
                                    <ellipse cx="62" cy="35" rx="6" ry="10" transform="rotate(20, 62, 35)" fill="#1e3a5f" opacity="0.15" />
                                    <ellipse cx="65" cy="50" rx="5" ry="8" transform="rotate(10, 65, 50)" fill="#1e3a5f" opacity="0.12" />
                                    <ellipse cx="58" cy="20" rx="5" ry="9" transform="rotate(30, 58, 20)" fill="#1e3a5f" opacity="0.18" />
                                </g>

                                {/* Star in laurel */}
                                <g transform="translate(195, 210)">
                                    <path d="M15 0 L18 10 L28 10 L20 17 L23 27 L15 21 L7 27 L10 17 L2 10 L12 10Z" fill="#0ea5e9" opacity="0.4" />
                                </g>

                                {/* Floating dots */}
                                <circle cx="50" cy="120" r="3" fill="#0ea5e9" opacity="0.3" />
                                <circle cx="280" cy="100" r="2.5" fill="#1e3a5f" opacity="0.25" />
                                <circle cx="270" cy="260" r="3" fill="#0ea5e9" opacity="0.2" />
                                <circle cx="60" cy="280" r="2" fill="#1e3a5f" opacity="0.2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
