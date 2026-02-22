"use client";

import { useState } from "react";
import { Mail, MapPin, Globe, Send, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setSubmitted(true);
    };

    return (
        <div className="pt-16">
            {/* Hero */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs uppercase tracking-widest mb-4">
                        Get in Touch
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fff]">Contact</h1>
                    <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
                        Reach out for research collaboration, student supervision inquiries,
                        academic partnerships, or professional correspondence.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-[#f8fafc]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Contact Details</h2>
                            <div className="space-y-4 mb-8">
                                <div className="card p-5 flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-[#0ea5e9]/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-[#0ea5e9]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                                        <p className="text-sm font-medium text-[#1e3a5f]">nabeela.kausar@iqraisb.edu.pk</p>
                                        <p className="text-xs text-slate-400">Academic & Research Correspondence</p>
                                    </div>
                                </div>

                                <div className="card p-5 flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-[#0ea5e9]/10 rounded-xl flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-[#0ea5e9]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">University Address</p>
                                        <p className="text-sm font-medium text-[#1e3a5f]">Iqra University Islamabad</p>
                                        <p className="text-xs text-slate-500 leading-relaxed">
                                            Department of Artificial Intelligence<br />
                                            Plot 5, H-9, Islamabad, 44000, Pakistan
                                        </p>
                                    </div>
                                </div>

                                <div className="card p-5 flex gap-4 items-start">
                                    <div className="w-10 h-10 bg-[#0ea5e9]/10 rounded-xl flex items-center justify-center shrink-0">
                                        <Globe className="w-5 h-5 text-[#0ea5e9]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Academic Profiles</p>
                                        <div className="space-y-1">
                                            {["Google Scholar", "ResearchGate", "ORCID", "Scopus"].map((p) => (
                                                <a key={p} href="#" className="block text-xs text-[#0ea5e9] hover:underline">{p}</a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Collaboration Note */}
                            <div className="bg-[#1e3a5f] text-white rounded-2xl p-6">
                                <h3 className="font-bold text-[#0ea5e9] mb-2">Academic Collaboration Note</h3>
                                <p className="text-slate-300 text-xs leading-relaxed">
                                    Dr. Nabeela Kausar is open to collaborative research, joint publications,
                                    PhD co-supervision, conference presentations, and research consultancy in
                                    AI, medical imaging, and health informatics. International collaboration
                                    proposals are particularly welcome.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send a Message</h2>

                            {submitted ? (
                                <div className="card p-10 text-center">
                                    <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto mb-4" />
                                    <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">Message Sent!</h3>
                                    <p className="text-slate-500 text-sm">
                                        Thank you for reaching out. Dr. Kausar&apos;s team will respond to your message within 2–3 academic working days.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                                                Full Name <span className="text-rose-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                placeholder="Your full name"
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9] transition-all bg-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                                                Email Address <span className="text-rose-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9] transition-all bg-white"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                                            Subject <span className="text-rose-500">*</span>
                                        </label>
                                        <select
                                            required
                                            value={form.subject}
                                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9] transition-all bg-white text-slate-700"
                                        >
                                            <option value="">Select subject</option>
                                            <option>Research Collaboration</option>
                                            <option>Publication Inquiry</option>
                                            <option>PhD / Graduate Supervision</option>
                                            <option>Academic Partnership</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">
                                            Message <span className="text-rose-500">*</span>
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            placeholder="Please describe the purpose of your message in detail..."
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/30 focus:border-[#0ea5e9] transition-all bg-white resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary w-full justify-center py-3"
                                    >
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
