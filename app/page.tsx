import Hero from "./component/sections/Hero";
import HeroStrip from "./component/sections/HeroStrip";
import FeaturedPortfolio from "./component/sections/FeaturedPortfolio";
import Differentiator from "./component/sections/Differentiator";
import CaseStudy from "./component/sections/CaseStudy";
import AboutMe from "./component/sections/HomeAboutme";
import HomeServiceSection from "./component/sections/HomeServiceSection";
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
      <HomeServiceSection />
      <HomeCta />
    </>
  );
};

export default page;
