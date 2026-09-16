import BeforeAfterSection from "../components/BeforeAfterSection";
import CaseStudyHero from "../components/CaseStudyHero";
import FeaturedCaseStudy from "../components/FeatureCaseStudy";
import PortfolioWeb from "../components/PortfolioWeb";
// import Component from "./component";

export const metadata = {
  title: "Success Stories & Case Studies | Sitechs",
  description: "Explore how Sitechs helps startups and enterprises scale through AI automation, web development, and branding. Real results, real growth.",
  alternates: {
    canonical: "https://sitechs.co/case-studies",
  },
};

export default function CaseStudies() {
  return (
    <>
      <CaseStudyHero />
      <FeaturedCaseStudy />
      <BeforeAfterSection />
      <PortfolioWeb />
      {/* <Component/> */}
    </>
  );
}