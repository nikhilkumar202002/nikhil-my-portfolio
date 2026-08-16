import Hero from "./component/sections/Hero";
import FeaturedPortfolio from "./component/sections/FeaturedPortfolio";
import AboutMe from "./component/sections/HomeAboutme";
import SkillsFullFont from "./component/sections/SkillsFullFont";

const page = () => {
  return (
    <>
      <Hero />

      <AboutMe />
      <SkillsFullFont />
      <FeaturedPortfolio />
    </>
  );
};

export default page;
