import { BookOpen, GraduationCap, Users, Target } from "lucide-react";

const courses = [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Data Mining & Analytics",
    "Logic and Automatic Reasoning",
    "Research Methodology",
];

const supervisionRoles = [
    {
        icon: GraduationCap,
        title: "Undergraduate Supervision",
        desc: "Guiding BS students in AI/CS final year projects with hands-on research mentoring and paper writing.",
    },
    {
        icon: Users,
        title: "Graduate Supervision",
        desc: "Supervising MS and MPhil theses in deep learning, explainable AI, and medical image analysis.",
    },
    {
        icon: Target,
        title: "Research Mentorship",
        desc: "Providing strategic career guidance, publication support, and collaborative research opportunities to emerging researchers.",
    },
];

export default function TeachingSection() {
    return (
        <section className="section-padding bg-[#f8fafc]" id="teaching">
            <div className="container-custom">
                <div className="text-center mb-14">
                    <span className="tag mb-3 inline-block">Academia</span>
                    <h2 className="section-title">Teaching & Supervision</h2>
                    <p className="section-subtitle mx-auto">
                        Committed to research-led teaching, academic excellence, and developing
                        the next generation of AI practitioners and researchers.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Courses */}
                    <div>
                        <h3 className="text-lg font-bold text-[#1e3a5f] mb-5 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-[#0ea5e9]" /> Courses Taught
                        </h3>
                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {courses.map((course) => (
                                <div
                                    key={course}
                                    className="bg-white rounded-xl p-3 border border-slate-100 text-sm text-slate-700 font-medium hover:border-[#0ea5e9]/30 hover:text-[#1e3a5f] transition-colors"
                                >
                                    {course}
                                </div>
                            ))}
                        </div>

                        {/* Teaching Philosophy */}
                        <div className="bg-[#1e3a5f] rounded-2xl p-6 text-white">
                            <h4 className="font-semibold mb-2 text-[#0ea5e9]">Teaching Philosophy</h4>
                            <p className="text-slate-200 text-sm leading-relaxed">
                                Dr. Kausar integrates active research into every course she
                                teaches, ensuring students are exposed to cutting-edge
                                developments and learn to think critically and independently.
                                Her approach emphasizes problem-solving, collaborative learning,
                                and the ethical dimensions of AI.
                            </p>
                        </div>
                    </div>

                    {/* Supervision Roles */}
                    <div>
                        <h3 className="text-lg font-bold text-[#1e3a5f] mb-5 flex items-center gap-2">
                            <Users className="w-5 h-5 text-[#0ea5e9]" /> Supervision Roles
                        </h3>
                        <div className="space-y-4">
                            {supervisionRoles.map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="card p-5 flex gap-4 hover:border-[#0ea5e9]/20 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-[#0ea5e9]/10 flex items-center justify-center shrink-0">
                                        <Icon className="w-5 h-5 text-[#0ea5e9]" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-[#1e3a5f] text-sm mb-1">{title}</h4>
                                        <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
