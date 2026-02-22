import Link from "next/link";
import { BookOpen, Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
    pages: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/research", label: "Research" },
        { href: "/publications", label: "Publications" },
        { href: "/teaching", label: "Teaching" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ],
    research: [
        "Deep Learning",
        "Explainable AI",
        "Computer Vision",
        "Medical Image Processing",
        "Cancer Diagnosis & Prognosis",
        "Biomedical Data Analysis",
    ],
    profiles: [
        { label: "Google Scholar", href: "#" },
        { label: "ResearchGate", href: "#" },
        { label: "ORCID", href: "#" },
        { label: "Scopus", href: "#" },
        { label: "Web of Science", href: "#" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[#0f172a] text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-[#0ea5e9] rounded-lg flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <p className="text-sm font-bold leading-tight text-[#fff]">Dr. Nabeela Kausar</p>
                                <p className="text-[10px] text-slate-400 leading-tight">Associate Professor of AI</p>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Researcher in Deep Learning, Explainable AI, Computer Vision,
                            and Medical Image Processing at Iqra University Islamabad.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-start gap-2 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#0ea5e9]" />
                                <span>Iqra University, Islamabad, Pakistan</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <Mail className="w-4 h-4 shrink-0 text-[#0ea5e9]" />
                                <span>nabeela.kausar@iqraisb.edu.pk</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.pages.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 text-sm hover:text-[#0ea5e9] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Research Areas */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Research Areas</h3>
                        <ul className="space-y-2">
                            {footerLinks.research.map((area) => (
                                <li key={area}>
                                    <span className="text-slate-400 text-sm">{area}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Academic Profiles */}
                    <div>
                        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Academic Profiles</h3>
                        <ul className="space-y-2">
                            {footerLinks.profiles.map((profile) => (
                                <li key={profile.label}>
                                    <Link
                                        href={profile.href}
                                        className="text-slate-400 text-sm hover:text-[#0ea5e9] transition-colors inline-flex items-center gap-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {profile.label}
                                        <ExternalLink className="w-3 h-3" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Dr. Nabeela Kausar. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-xs">
                        Developed and Managed by <Link href="https://revoticai.com" target="_blank" rel="noopener noreferrer" className="text-[#0ea5e9] hover:underline">Revotic AI Pvt. Ltd.</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
