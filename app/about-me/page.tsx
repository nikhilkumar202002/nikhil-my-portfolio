import AboutBanner from "../component/sections/about-me/AboutBanner";
import YourStory from "../component/sections/about-me/YourStory";
import DesignCode from "../component/sections/about-me/DesignCode";
import ExperienceTimeline from "../component/sections/about-me/ExperienceTimeline";
import EducationTimeline from "../component/sections/about-me/EducationTimeline";
import FeaturedWorksSlider from "../component/sections/about-me/FeaturedWorksSlider";
import SkillsGrids from "../component/sections/home/SkillsGrids";
import WorkCta from "../component/sections/about-me/WorkCta";

const AboutMePage = () => {
  return (
    <>
      <AboutBanner />
      <YourStory />
      <DesignCode />
      <ExperienceTimeline />
      <EducationTimeline />
      <SkillsGrids />
      <FeaturedWorksSlider />
      <WorkCta />
    </>
  );
};

export default AboutMePage;