import Hero from "./component/sections/Hero";
import HeroStrip from "./component/sections/HeroStrip";
import FeaturedPortfolio from "./component/sections/FeaturedPortfolio";
import Differentiator from "./component/sections/Differentiator";
import WhyWorkWithMe from "./component/sections/WhyWorkWithMe";
import CaseStudy from "./component/sections/CaseStudy";
import AboutMe from "./component/sections/HomeAboutme";
import ExperinceTimeline from "./component/sections/ExperinceTimeline";
import HomeServiceSection from "./component/sections/HomeServiceSection";
import SkillsGrids from "./component/sections/SkillsGrids";
import HomeCta from "./component/sections/HomeCta";

const page = () => {
  return (
    <>
      <Hero />
      <HeroStrip />
      <FeaturedPortfolio />
      <Differentiator />
      <CaseStudy />
      <AboutMe />
      <ExperinceTimeline />
      <HomeServiceSection />
      <SkillsGrids />
      <WhyWorkWithMe />
      <HomeCta />
    </>
  );
};

export default page;
