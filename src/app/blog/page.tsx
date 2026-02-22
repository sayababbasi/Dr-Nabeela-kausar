import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";

export const metadata: Metadata = {
    title: "Research Blog",
    description:
        "Dr. Nabeela Kausar's research blog covering AI in healthcare, explainable AI, deep learning, and academic insights.",
};

const posts = [
    {
        slug: "xai-in-clinical-diagnosis",
        title: "Why Explainability Matters More Than Accuracy in Clinical AI",
        excerpt:
            "As deep learning systems achieve superhuman performance in medical image classification, the critical question shifts from 'How accurate?' to 'Why does it predict this?' Explainability is not optional — it is the gate through which AI earns clinical trust.",
        date: "2024-01-15",
        readTime: "8 min read",
        category: "Explainable AI",
        tags: ["XAI", "Clinical AI", "Deep Learning"],
        featured: true,
    },
    {
        slug: "deep-learning-cancer-screening",
        title: "The Promise and Challenges of AI in Cancer Screening",
        excerpt:
            "From mammography to colonoscopy, deep learning models have demonstrated remarkable sensitivity in cancer detection. This post examines both the genuine breakthroughs and the methodological pitfalls that must be addressed before clinical deployment.",
        date: "2023-11-28",
        readTime: "10 min read",
        category: "Cancer Diagnosis",
        tags: ["Cancer AI", "Imaging", "Deep Learning"],
        featured: false,
    },
    {
        slug: "transfer-learning-medical-imaging",
        title: "Transfer Learning in Medical Imaging: A Practical Guide",
        excerpt:
            "Pre-trained architectures like ResNet, EfficientNet, and ViT have transformed how we approach limited medical datasets. This post provides a structured overview of when, why, and how to apply transfer learning in clinical imaging tasks.",
        date: "2023-09-10",
        readTime: "12 min read",
        category: "Deep Learning",
        tags: ["Transfer Learning", "CNN", "Medical Imaging"],
        featured: false,
    },
    {
        slug: "publishing-ai-healthcare-research",
        title: "How to Publish AI-in-Healthcare Research: A Practical Framework",
        excerpt:
            "Based on experience reviewing and writing papers for Q1 journals, this post outlines the structural, methodological, and ethical standards that separate publishable from impactful AI-in-healthcare research.",
        date: "2023-07-20",
        readTime: "9 min read",
        category: "Academic Advice",
        tags: ["Research", "Publication", "Academic Writing"],
        featured: false,
    },
    {
        slug: "grad-cam-for-doctors",
        title: "Grad-CAM Explained: Making Neural Networks Speak to Clinicians",
        excerpt:
            "Gradient-weighted Class Activation Maps (Grad-CAM) have become one of the most popular tools for visualizing what deep learning models attend to in medical images. Here is an accessible breakdown designed for clinicians and non-engineers.",
        date: "2023-05-05",
        readTime: "7 min read",
        category: "Explainable AI",
        tags: ["Grad-CAM", "Visualization", "XAI"],
        featured: false,
    },
    {
        slug: "ai-ethics-healthcare",
        title: "Ethical Imperatives in AI-Driven Healthcare",
        excerpt:
            "Algorithmic bias, data privacy, informed consent, and accountability — the ethical dimensions of deploying AI in clinical environments are not afterthoughts. This post argues for ethics-by-design as a first principle in medical AI research.",
        date: "2023-02-18",
        readTime: "11 min read",
        category: "AI Ethics",
        tags: ["Ethics", "Bias", "Healthcare AI"],
        featured: false,
    },
];

const categoryColors: Record<string, string> = {
    "Explainable AI": "bg-indigo-50 text-indigo-700 border-indigo-100",
    "Cancer Diagnosis": "bg-rose-50 text-rose-700 border-rose-100",
    "Deep Learning": "bg-blue-50 text-blue-700 border-blue-100",
    "Academic Advice": "bg-amber-50 text-amber-700 border-amber-100",
    "AI Ethics": "bg-purple-50 text-purple-700 border-purple-100",
};

function PostCard({ post, large = false }: { post: typeof posts[0]; large?: boolean }) {
    return (
        <div className={`card p-6 group hover:-translate-y-1 transition-all duration-300 flex flex-col ${large ? "md:p-8" : ""}`}>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${categoryColors[post.category] || "bg-slate-50 text-slate-600 border-slate-100"}`}>
                    {post.category}
                </span>
                {post.featured && (
                    <span className="text-[10px] font-semibold bg-[#0ea5e9]/10 text-[#0ea5e9] border border-[#0ea5e9]/20 px-2.5 py-0.5 rounded-full">
                        Featured
                    </span>
                )}
            </div>
            <h2 className={`font-bold text-[#1e3a5f] group-hover:text-[#0ea5e9] transition-colors mb-2 leading-snug ${large ? "text-xl md:text-2xl" : "text-sm"}`}>
                {post.title}
            </h2>
            <p className={`text-slate-500 leading-relaxed flex-1 ${large ? "text-sm" : "text-xs"}`}>{post.excerpt}</p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-400 text-xs">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                    </span>
                </div>
                <Link href={`/blog/${post.slug}`} className="text-xs font-semibold text-[#0ea5e9] flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ChevronRight className="w-3 h-3" />
                </Link>
            </div>
        </div>
    );
}

export default function BlogPage() {
    const [featured, ...rest] = posts;

    return (
        <div className="pt-16">
            {/* Hero */}
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs uppercase tracking-widest mb-4 text-[#fff]">
                        Research Insights
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fff]">Research Blog</h1>
                    <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
                        Perspectives on AI in healthcare, explainable AI, academic research, and
                        the evolving landscape of medical artificial intelligence.
                    </p>
                </div>
            </div>

            <section className="section-padding bg-[#f8fafc]">
                <div className="container-custom">
                    {/* Featured Post */}
                    <div className="mb-8">
                        <PostCard post={featured} large />
                    </div>

                    {/* Rest of Posts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {rest.map((post) => (
                            <PostCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
