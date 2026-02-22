import Link from "next/link";
import { ChevronLeft, Calendar, Clock, Tag } from "lucide-react";

// Simple individual blog post page using the slug
export default function BlogPostPage({ params }: { params: { slug: string } }) {
    return (
        <div className="pt-16">
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1e3a5f] py-16 px-4">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-white text-xs mb-6 transition-colors"
                    >
                        <ChevronLeft className="w-3.5 h-3.5" /> Back to Blog
                    </Link>
                    <span className="inline-block text-[10px] font-semibold bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 text-[#0ea5e9] px-3 py-1 rounded-full mb-4">
                        Research Insights
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
                        Why Explainability Matters More Than Accuracy in Clinical AI
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> January 15, 2024
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> 8 min read
                        </span>
                        <span className="flex items-center gap-1">
                            <Tag className="w-3 h-3" /> Explainable AI
                        </span>
                    </div>
                </div>
            </div>

            <section className="section-padding bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="prose prose-slate max-w-none text-sm leading-relaxed">
                        <p className="text-slate-600 text-base leading-relaxed mb-6">
                            As deep learning systems achieve superhuman performance in medical image classification,
                            the critical question shifts from &ldquo;How accurate?&rdquo; to &ldquo;Why does it predict this?&rdquo;
                            Explainability is not optional — it is the gate through which AI earns clinical trust.
                        </p>

                        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">The Accuracy Paradox</h2>
                        <p className="text-slate-600 mb-5">
                            A model that achieves 98% AUC-ROC on a held-out test set is statistically impressive.
                            But what happens when it encounters a case that falls outside its training distribution?
                            What does a radiologist do with a prediction it cannot interrogate? Accuracy, in isolation,
                            provides no answer to these questions — and in medicine, these questions cannot remain unanswered.
                        </p>

                        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Explainability as Clinical Necessity</h2>
                        <p className="text-slate-600 mb-5">
                            Clinical decision-making is inherently interpretive. Physicians justify their diagnoses
                            with reasoning — anatomical features, lab trends, clinical presentation context. An AI
                            system that delivers a diagnosis without reasoning is, to a clinician, fundamentally
                            incomplete. Explainable AI bridges this gap by surfacing model reasoning in forms
                            clinicians can evaluate, challenge, and trust.
                        </p>

                        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Tools of Explainability</h2>
                        <p className="text-slate-600 mb-5">
                            Methods like Gradient-weighted Class Activation Mapping (Grad-CAM), SHAP (SHapley Additive
                            exPlanations), and LIME (Local Interpretable Model-agnostic Explanations) have matured
                            considerably. In medical imaging, Grad-CAM has proven particularly valuable for overlaying
                            heatmaps on input images to show which regions activated the model&apos;s prediction —
                            directly aligning with the visual reasoning clinicians already employ.
                        </p>

                        <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">Conclusion</h2>
                        <p className="text-slate-600 mb-5">
                            The future of clinical AI is not a competition between human and machine judgment,
                            but a collaboration enabled by transparency. Explainability is the infrastructure
                            of that collaboration. Researchers and engineers building AI for healthcare must
                            treat interpretability not as an optional feature but as a core design constraint —
                            as non-negotiable as sensitivity and specificity.
                        </p>
                    </div>

                    <div className="mt-10 pt-8 border-t border-slate-100">
                        <p className="text-xs text-slate-400 mb-1">Written by</p>
                        <p className="text-sm font-bold text-[#1e3a5f]">Dr. Nabeela Kausar</p>
                        <p className="text-xs text-slate-500">Associate Professor of AI, Iqra University Islamabad</p>
                    </div>

                    <div className="mt-8">
                        <Link href="/blog" className="btn-outline text-sm">
                            <ChevronLeft className="w-4 h-4" /> Back to All Posts
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
