import HeroSlider from "@/components/HeroSlider";
import QuickProfile from "@/components/home/QuickProfile";
import AboutBio from "@/components/home/AboutBio";
import ResearchAreas from "@/components/home/ResearchAreas";
import FeaturedPublications from "@/components/home/FeaturedPublications";
import TeachingSection from "@/components/home/TeachingSection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Dr. Nabeela Kausar – AI Researcher & Associate Professor",
  description:
    "Welcome to the official academic portfolio of Dr. Nabeela Kausar, Associate Professor of Artificial Intelligence at Iqra University Islamabad. Expert in Deep Learning, Explainable AI, and Cancer Diagnosis.",
};

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero Slider */}
      <HeroSlider />

      {/* Section 2: Quick Profile Snapshot */}
      <QuickProfile />

      {/* Section 3: About / Bio */}
      <AboutBio />

      {/* Section 4: Research Areas */}
      <ResearchAreas />

      {/* Section 5: Featured Publications */}
      <FeaturedPublications />

      {/* Section 6: Teaching & Supervision */}
      <TeachingSection />

      {/* Section 7: Testimonials */}
      <Testimonials />

      {/* Section 8: Call to Action */}
      <CTASection />
    </>
  );
}
