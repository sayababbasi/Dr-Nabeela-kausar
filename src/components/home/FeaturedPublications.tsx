import { BookOpen, Quote, Star } from "lucide-react";

const publications = [
    {
        rank: "Q1",
        title:
            "Explainability-based Backdoor Attacks Against Graph Neural Networks",
        journal: "ACM Transactions on Computing Systems",
        year: "2023",
        citations: 48,
        area: "Explainable AI",
    },
    {
        rank: "Q1",
        title:
            "Deep Learning-Driven Automated Diagnosis of Gastrointestinal Diseases from Endoscopic Images",
        journal: "Computers in Biology and Medicine",
        year: "2023",
        citations: 63,
        area: "Medical AI",
    },
    {
        rank: "SCI",
        title:
            "Convolutional Neural Network Based Automatic Detection of Glaucoma",
        journal: "PLOS ONE",
        year: "2022",
        citations: 112,
        area: "Computer Vision",
    },
    {
        rank: "Q1",
        title:
            "A Novel Approach to Breast Cancer Detection Using Machine Learning",
        journal: "International Journal of Environmental Research and Public Health",
        year: "2022",
        citations: 87,
        area: "Cancer Diagnosis",
    },
    {
        rank: "Q2",
        title:
            "Skin Lesion Classification Using Deep Learning: A Survey",
        journal: "Journal of Clinical Medicine",
        year: "2021",
        citations: 134,
        area: "Deep Learning",
    },
];

function RankBadge({ rank }: { rank: string }) {
    return (
        <span className="inline-block text-[10px] font-bold bg-[#1e3a5f] text-white px-2 py-0.5 rounded">
            {rank}
        </span>
    );
}

export default function FeaturedPublications() {
    return (
        <section className="section-padding bg-[#f8fafc]" id="publications">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="tag mb-3 inline-block">Research Output</span>
                    <h2 className="section-title">Featured Publications</h2>
                    <p className="section-subtitle mx-auto">
                        A selection of high-impact peer-reviewed papers published in
                        internationally ranked journals and conferences.
                    </p>
                </div>

                {/* Publications List */}
                <div className="space-y-4 max-w-4xl mx-auto">
                    {publications.map((pub, i) => (
                        <div
                            key={i}
                            className="card p-6 flex gap-4 group hover:border-[#0ea5e9]/30 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            {/* Number */}
                            <div className="shrink-0 w-9 h-9 rounded-full bg-[#1e3a5f]/10 flex items-center justify-center text-[#1e3a5f] font-bold text-sm">
                                {i + 1}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start gap-2 mb-1">
                                    <RankBadge rank={pub.rank} />
                                    <span className="tag text-[10px]">{pub.area}</span>
                                </div>
                                <h3 className="text-sm font-semibold text-slate-800 group-hover:text-[#1e3a5f] transition-colors leading-snug mb-1">
                                    {pub.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                                    <span className="flex items-center gap-1">
                                        <BookOpen className="w-3 h-3" /> {pub.journal}
                                    </span>
                                    <span>• {pub.year}</span>
                                </div>
                            </div>

                            {/* Citations */}
                            <div className="shrink-0 text-right">
                                <div className="flex items-center gap-1 text-amber-500 mb-0.5 justify-end">
                                    <Quote className="w-3 h-3" />
                                    <span className="text-base font-bold text-slate-700">{pub.citations}</span>
                                </div>
                                <p className="text-[10px] text-slate-400">Citations</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <a href="/publications" className="btn-primary">
                        View All Publications
                    </a>
                </div>
            </div>
        </section>
    );
}
