import Hero from "./component/sections/Hero";
import FeaturedPortfolio from "./component/sections/FeaturedPortfolio";
import AboutMe from "./component/sections/HomeAboutme";
import HomeServiceSection from "./component/sections/HomeServiceSection";

const page = () => {
  return (
    <>
      <Hero />
      <FeaturedPortfolio />
      <AboutMe />
      <HomeServiceSection />
    </>
  );
};

export default page;
