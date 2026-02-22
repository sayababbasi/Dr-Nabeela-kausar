import type { Metadata } from "next";
import { FlaskConical, Target, GitBranch, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Research",
    description:
        "Explore Dr. Nabeela Kausar's research themes, ongoing projects, methodology, and collaboration interests in AI and medical imaging.",
};

const themes = [
    {
        icon: "🧠",
        title: "Deep Learning Architectures",
        desc: "Designing and benchmarking CNN, RNN, Vision Transformer, and hybrid neural network architectures for classification, detection, and segmentation tasks in clinical imaging.",
        status: "Ongoing",
    },
    {
        icon: "🔍",
        title: "Explainable AI in Medicine",
        desc: "Applying gradient-based attribution (Grad-CAM), surrogate models (LIME, SHAP), and concept-based explanations to generate clinically interpretable AI outputs for physician adoption.",
        status: "Ongoing",
    },
    {
        icon: "🔬",
        title: "Cancer Diagnosis & Prognosis",
        desc: "Developing multi-scale deep learning pipelines for early-stage diagnosis and survival prediction in breast, lung, gastrointestinal, and dermatological cancers.",
        status: "Ongoing",
    },
    {
        icon: "👁",
        title: "Ophthalmic Disease Detection",
        desc: "Automated screening of glaucoma, diabetic retinopathy, and macular degeneration from fundus and OCT images using deep convolutional networks.",
        status: "Completed",
    },
    {
        icon: "🦠",
        title: "Biomarker Discovery",
        desc: "Applying ML-driven feature selection and omics data integration to identify predictive biomarkers for disease onset, progression, and treatment response.",
        status: "Ongoing",
    },
    {
        icon: "📊",
        title: "Clinical Data Mining",
        desc: "Extracting actionable insights from structured and unstructured clinical datasets using ensemble methods, NLP, and time-series learning models.",
        status: "Ongoing",
    },
];

const projects = [
    {
        title: "AI-Powered Breast Cancer Detection System",
        period: "2022 – Present",
        type: "Ongoing",
        desc: "Developing a multi-modal AI pipeline integrating mammography, ultrasound, and clinical metadata for early-stage breast cancer detection and risk stratification.",
        tech: ["Deep Learning", "Grad-CAM", "Transfer Learning"],
    },
    {
        title: "Explainable Glaucoma Screening via Fundus Imaging",
        period: "2021 – 2023",
        type: "Completed",
        desc: "Designed an XAI-integrated screening system achieving over 95% sensitivity in glaucoma detection from fundus photographs with interpretable saliency maps.",
        tech: ["CNN", "Explainable AI", "Clinical Validation"],
    },
    {
        title: "Gastrointestinal Disease Classification from Endoscopy",
        period: "2022 – 2023",
        type: "Completed",
        desc: "Built a multi-class deep learning classifier for detecting polyps, ulcers, and Barrett's esophagus from video endoscopy frames with real-time inference capability.",
        tech: ["EfficientNet", "Data Augmentation", "Video Analysis"],
    },
    {
        title: "Cancer Prognosis Prediction Using Survival Analysis",
        period: "2023 – Present",
        type: "Ongoing",
        desc: "Combining deep feature extraction with Cox proportional hazard models to predict overall and disease-free survival from histopathological whole-slide images.",
        tech: ["Survival Models", "WSI Analysis", "Pathomics"],
    },
];

export default function ResearchPage() {
    return (
        <div className="pt-16">
            {/* Hero */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs uppercase tracking-widest mb-4">
                        Scholarly Work
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fff]">Research</h1>
                    <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
                        Interdisciplinary research at the intersection of artificial
                        intelligence, computer vision, and clinical medicine.
                    </p>
                </div>
            </div>

            {/* Research Themes */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <h2 className="section-title mb-2">Research Themes</h2>
                    <p className="text-slate-500 text-sm mb-10 max-w-xl">
                        Core scientific questions and application areas driving Dr. Kausar&apos;s research program.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {themes.map(({ icon, title, desc, status }) => (
                            <div key={title} className="card p-6 group hover:-translate-y-1 transition-transform duration-300">
                                <div className="text-3xl mb-3">{icon}</div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-sm font-bold text-[#1e3a5f]">{title}</h3>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${status === "Ongoing"
                                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                        : "bg-slate-50 text-slate-500 border border-slate-100"
                                        }`}>
                                        {status}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="section-padding bg-[#f8fafc]">
                <div className="container-custom">
                    <h2 className="section-title mb-10">Research Projects</h2>
                    <div className="space-y-5 max-w-4xl">
                        {projects.map((p) => (
                            <div key={p.title} className="card p-6">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <h3 className="text-sm font-bold text-[#1e3a5f]">{p.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="tag text-[10px]">{p.period}</span>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium border ${p.type === "Ongoing"
                                            ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                                            : "bg-slate-50 text-slate-500 border-slate-100"
                                            }`}>
                                            {p.type}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed mb-3">{p.desc}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {p.tech.map((t) => (
                                        <span key={t} className="text-[10px] bg-blue-50 text-[#1e3a5f] px-2 py-0.5 rounded border border-blue-100 font-medium">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology & Collaboration */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                                <FlaskConical className="w-6 h-6 text-[#0ea5e9]" /> Research Methodology
                            </h2>
                            <div className="space-y-3 text-slate-500 text-sm leading-relaxed">
                                <p>Research in Dr. Kausar&apos;s lab follows a rigorous, reproducible pipeline: from curated dataset preparation and preprocessing, through model architecture design and training, to clinical validation and interpretability analysis.</p>
                                <p>All experiments are validated using standard metrics (AUC-ROC, F1, Kappa) and benchmarked against published state-of-the-art methods. Ablation studies ensure component-level understanding of model behavior.</p>
                                <p>Publications undergo peer review in Q1/Q2 journals and are deposited in open-access repositories where permitted.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                                <Globe className="w-6 h-6 text-[#0ea5e9]" /> Collaboration Interests
                            </h2>
                            <div className="space-y-3 text-slate-500 text-sm leading-relaxed">
                                <p>Dr. Kausar welcomes collaboration with clinical institutions (hospitals, oncology centers), universities, and industry partners with shared interests in AI-driven diagnostics.</p>
                                <p>Areas of collaborative interest include: annotated medical imaging datasets, joint grant applications, co-authorship on high-impact publications, and student/researcher co-supervision arrangements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
