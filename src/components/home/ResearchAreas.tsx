import { Brain, Eye, Microscope, Database, Cpu, FlaskConical } from "lucide-react";

const areas = [
    {
        icon: Brain,
        title: "Deep Learning",
        description:
            "Designing and training convolutional, recurrent, and transformer-based neural networks for complex pattern recognition tasks in medical and scientific data.",
        color: "from-blue-500 to-blue-700",
        bg: "bg-blue-50",
        iconColor: "text-blue-600",
    },
    {
        icon: Cpu,
        title: "Explainable AI (XAI)",
        description:
            "Developing interpretable and transparent AI models using SHAP, LIME, Grad-CAM, and other explainability frameworks for clinically trustworthy predictions.",
        color: "from-indigo-500 to-indigo-700",
        bg: "bg-indigo-50",
        iconColor: "text-indigo-600",
    },
    {
        icon: Eye,
        title: "Computer Vision",
        description:
            "Applying image classification, object detection, segmentation, and feature extraction to real-world vision problems in healthcare and beyond.",
        color: "from-purple-500 to-purple-700",
        bg: "bg-purple-50",
        iconColor: "text-purple-600",
    },
    {
        icon: Microscope,
        title: "Medical Image Processing",
        description:
            "Preprocessing and analyzing radiological and histopathological images — MRI, CT, X-ray, dermoscopy — using intelligent computational methods.",
        color: "from-emerald-500 to-emerald-700",
        bg: "bg-emerald-50",
        iconColor: "text-emerald-600",
    },
    {
        icon: FlaskConical,
        title: "Cancer Diagnosis & Prognosis",
        description:
            "Building AI-powered pipelines for early detection and survival prediction in breast, skin, lung, and gastrointestinal cancers using imaging and omics data.",
        color: "from-rose-500 to-rose-700",
        bg: "bg-rose-50",
        iconColor: "text-rose-600",
    },
    {
        icon: Database,
        title: "Biomedical Data Analysis",
        description:
            "Applying machine learning for clinical data mining, biomarker discovery, genomic analysis, and patient stratification across diverse biomedical datasets.",
        color: "from-amber-500 to-amber-700",
        bg: "bg-amber-50",
        iconColor: "text-amber-600",
    },
];

export default function ResearchAreas() {
    return (
        <section className="section-padding bg-white" id="research-areas">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="tag mb-3 inline-block">Specializations</span>
                    <h2 className="section-title">Research Areas</h2>
                    <p className="section-subtitle mx-auto">
                        Interdisciplinary research spanning artificial intelligence, medical
                        imaging, and computational healthcare.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {areas.map(({ icon: Icon, title, description, bg, iconColor }) => (
                        <div
                            key={title}
                            className="card p-7 group hover:-translate-y-1 transition-all duration-300 hover:border-[#0ea5e9]/20"
                        >
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className={`w-6 h-6 ${iconColor}`} />
                            </div>

                            {/* Title */}
                            <h3 className="text-base font-bold text-[#1e3a5f] mb-2 group-hover:text-[#0ea5e9] transition-colors">
                                {title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
