import { FileText, Users, GraduationCap, Award, Star } from "lucide-react";

const stats = [
    { icon: FileText, value: "50+", label: "Publications", color: "bg-blue-50 text-[#1e3a5f]" },
    { icon: Star, value: "800+", label: "Total Citations", color: "bg-amber-50 text-amber-600" },
    { icon: GraduationCap, value: "10+", label: "Years of Experience", color: "bg-emerald-50 text-emerald-600" },
    { icon: Users, value: "6", label: "Research Areas", color: "bg-purple-50 text-purple-600" },
];

export default function QuickProfile() {
    return (
        <section className="section-padding bg-white border-b border-slate-100" id="profile">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Column */}
                    <div>
                        <span className="tag mb-3 inline-block">Academic Profile</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 leading-tight">
                            A Researcher Dedicated to{" "}
                            <span className="text-[#0ea5e9]">AI-Driven Science</span>
                        </h2>
                        <p className="text-slate-700 text-base leading-relaxed mb-6">
                            Dr. Nabeela Kausar is an Associate Professor of Artificial
                            Intelligence at Iqra University Islamabad, Pakistan. She holds a
                            PhD in Computer Science and specializes in deep learning, medical
                            image processing, and explainable AI with a focus on clinical
                            decision support systems.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["PhD in Computer Science", "AI & Medical Imaging Researcher", "International Publications", "Verified Academic Profile"].map((item) => (
                                <span key={item} className="tag">{item}</span>
                            ))}
                        </div>
                    </div>

                    {/* Stats Column */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map(({ icon: Icon, value, label, color }) => (
                            <div
                                key={label}
                                className="card p-6 flex flex-col items-start gap-3 hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color} bg-opacity-20`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-[#1e3a5f]">{value}</p>
                                    <p className="text-sm text-slate-500 font-medium">{label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
