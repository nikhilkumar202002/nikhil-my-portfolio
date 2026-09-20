import Hero from "./component/sections/home/Hero";
import HeroStrip from "./component/sections/home/HeroStrip";
import FeaturedPortfolio from "./component/sections/home/FeaturedPortfolio";
import Differentiator from "./component/sections/home/Differentiator";
import WhyWorkWithMe from "./component/sections/home/WhyWorkWithMe";
import CaseStudy from "./component/sections/home/CaseStudy";
import AboutMe from "./component/sections/home/HomeAboutme";
import ExperinceTimeline from "./component/sections/home/ExperinceTimeline";
import HomeServiceSection from "./component/sections/home/HomeServiceSection";
import SkillsGrids from "./component/sections/home/SkillsGrids";
import HomeCta from "./component/sections/home/HomeCta";

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
