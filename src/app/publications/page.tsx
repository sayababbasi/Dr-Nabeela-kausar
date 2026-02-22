"use client";

import { useState } from "react";
import { BookOpen, Quote, ExternalLink } from "lucide-react";

const allPublications = [
    { year: 2023, area: "Explainable AI", rank: "Q1", title: "Explainability-Based Backdoor Attacks Against Graph Neural Networks", authors: "N. Kausar, A. Hussain, M. Arif", journal: "ACM Transactions on Computing Systems", citations: 48 },
    { year: 2023, area: "Medical AI", rank: "Q1", title: "Deep Learning-Driven Automated Diagnosis of Gastrointestinal Diseases from Endoscopic Images", authors: "N. Kausar, S. Waheed, F. Ahmad", journal: "Computers in Biology and Medicine", citations: 63 },
    { year: 2023, area: "Computer Vision", rank: "SCI", title: "Automated Skin Lesion Segmentation Using Attention-Guided U-Net", authors: "N. Kausar, R. Bibi, M. Khan", journal: "IEEE Access", citations: 29 },
    { year: 2023, area: "Deep Learning", rank: "Q1", title: "EfficientNet-Based Transfer Learning for COVID-19 Detection from Chest X-Rays", authors: "N. Kausar, Z. Noor, A. Qureshi", journal: "Diagnostics", citations: 41 },
    { year: 2022, area: "Computer Vision", rank: "SCI", title: "Convolutional Neural Network Based Automatic Detection of Glaucoma", authors: "N. Kausar, M. Khan, S. Imran", journal: "PLOS ONE", citations: 112 },
    { year: 2022, area: "Cancer Diagnosis", rank: "Q1", title: "A Novel Approach to Breast Cancer Detection Using Machine Learning", authors: "N. Kausar, F. Malik, H. Rauf", journal: "International Journal of Environmental Research and Public Health", citations: 87 },
    { year: 2022, area: "Medical AI", rank: "Q2", title: "Intelligent Diabetic Retinopathy Screening Using Fundus Photography", authors: "N. Kausar, A. Jan, S. Nawaz", journal: "Applied Sciences", citations: 56 },
    { year: 2022, area: "Deep Learning", rank: "Q1", title: "Deep Ensemble Learning for Brain Tumor Segmentation from MRI Scans", authors: "N. Kausar, U. Zafar, N. Ahmed", journal: "Frontiers in Oncology", citations: 74 },
    { year: 2021, area: "Deep Learning", rank: "Q2", title: "Skin Lesion Classification Using Deep Learning: A Survey", authors: "N. Kausar et al.", journal: "Journal of Clinical Medicine", citations: 134 },
    { year: 2021, area: "Cancer Diagnosis", rank: "Q1", title: "Lung Cancer Detection Using Deep Feature Extraction and SVM", authors: "N. Kausar, I. Ahmad, R. Nawab", journal: "Cancers", citations: 98 },
    { year: 2021, area: "Explainable AI", rank: "Q1", title: "Towards Interpretable Deep Learning in Medical Imaging: A Review", authors: "N. Kausar, T. Bashir, A. Ahmed", journal: "Artificial Intelligence in Medicine", citations: 145 },
    { year: 2020, area: "Computer Vision", rank: "SCI", title: "Multi-Scale Feature Fusion for Retinal Disease Classification", authors: "N. Kausar, B. Khan, F. Iqbal", journal: "IET Image Processing", citations: 67 },
    { year: 2020, area: "Medical AI", rank: "Q2", title: "Automated Polyp Detection in Colonoscopy Using Deep Learning", authors: "N. Kausar, M. Ali, Z. Hussain", journal: "Sensors", citations: 82 },
    { year: 2019, area: "Deep Learning", rank: "Q1", title: "Histopathological Image Classification Using Transfer Learning", authors: "N. Kausar, A. Rana, K. Saleem", journal: "Computational Intelligence and Neuroscience", citations: 116 },
    { year: 2019, area: "Cancer Diagnosis", rank: "Q1", title: "Cervical Cancer Classification from Pap Smear Images", authors: "N. Kausar, H. Latif, M. Wasim", journal: "Journal of Healthcare Engineering", citations: 93 },
];

const years = ["All", "2023", "2022", "2021", "2020", "2019"];
const areas = ["All", "Deep Learning", "Explainable AI", "Computer Vision", "Medical AI", "Cancer Diagnosis"];

export default function PublicationsPage() {
    const [filterYear, setFilterYear] = useState("All");
    const [filterArea, setFilterArea] = useState("All");

    const filtered = allPublications.filter((p) => {
        const yearMatch = filterYear === "All" || p.year.toString() === filterYear;
        const areaMatch = filterArea === "All" || p.area === filterArea;
        return yearMatch && areaMatch;
    });

    return (
        <div className="pt-16">
            {/* Hero */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs uppercase tracking-widest mb-4">
                        Scholarly Output
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fff]">Publications</h1>
                    <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
                        Peer-reviewed publications in internationally indexed journals and conference proceedings.
                    </p>
                    <div className="flex justify-center gap-8 mt-8">
                        {[["50+", "Total Papers"], ["800+", "Citations"], ["15+", "Q1 Journals"]].map(([v, l]) => (
                            <div key={l} className="text-center">
                                <p className="text-3xl font-bold text-[#fbf3e8]">{v}</p>
                                <p className="text-slate-400 text-xs">{l}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Filters */}
            <section className="bg-white border-b border-slate-100 sticky top-16 z-30 shadow-sm">
                <div className="container-custom py-4">
                    <div className="flex flex-wrap gap-4 items-center">
                        <div>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Year:</span>
                            {years.map((y) => (
                                <button
                                    key={y}
                                    onClick={() => setFilterYear(y)}
                                    className={`text-xs px-3 py-1 rounded-full mr-1 font-medium transition-colors ${filterYear === y
                                        ? "bg-[#1e3a5f] text-white"
                                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                                        }`}
                                >
                                    {y}
                                </button>
                            ))}
                        </div>
                        <div>
                            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Area:</span>
                            {areas.map((a) => (
                                <button
                                    key={a}
                                    onClick={() => setFilterArea(a)}
                                    className={`text-xs px-3 py-1 rounded-full mr-1 font-medium transition-colors ${filterArea === a
                                        ? "bg-[#0ea5e9] text-white"
                                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                                        }`}
                                >
                                    {a}
                                </button>
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">Showing {filtered.length} publications</p>
                </div>
            </section>

            {/* Publications List */}
            <section className="section-padding bg-[#f8fafc]">
                <div className="container-custom">
                    <div className="space-y-3 max-w-4xl mx-auto">
                        {filtered.map((pub, i) => (
                            <div key={i} className="card p-5 flex gap-4 group hover:border-[#0ea5e9]/30 transition-all">
                                <div className="shrink-0 w-8 h-8 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center text-[#1e3a5f] font-bold text-xs">
                                    {i + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                                        <span className="text-[10px] font-bold bg-[#1e3a5f] text-white px-1.5 py-0.5 rounded">{pub.rank}</span>
                                        <span className="tag text-[10px]">{pub.area}</span>
                                        <span className="tag text-[10px]">{pub.year}</span>
                                    </div>
                                    <h3 className="text-sm font-semibold text-slate-800 group-hover:text-[#1e3a5f] transition-colors leading-snug mb-1">
                                        {pub.title}
                                    </h3>
                                    <p className="text-xs text-slate-500 italic mb-0.5">{pub.authors}</p>
                                    <p className="text-xs font-medium text-[#0ea5e9] flex items-center gap-1">
                                        <BookOpen className="w-3 h-3" />
                                        {pub.journal}
                                    </p>
                                </div>
                                <div className="shrink-0 text-right min-w-12">
                                    <p className="text-base font-bold text-slate-700">{pub.citations}</p>
                                    <div className="flex items-center gap-1 text-slate-400 justify-end">
                                        <Quote className="w-2.5 h-2.5" />
                                        <p className="text-[10px]">Cited</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <p className="text-center text-slate-400 py-12 text-sm">No publications match the selected filters.</p>
                    )}
                </div>
            </section>
        </div>
    );
}
