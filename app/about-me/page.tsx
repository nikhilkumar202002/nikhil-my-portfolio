import AboutBanner from "../component/sections/about-me/AboutBanner";
import YourStory from "../component/sections/about-me/YourStory";
import DesignCode from "../component/sections/about-me/DesignCode";
import ExperinceTimeline from "../component/sections/home/ExperinceTimeline";
import SkillsGrids from "../component/sections/home/SkillsGrids";
import WorkCta from "../component/sections/my-works/WorkCta";

const AboutMePage = () => {
  return (
    <>
      <AboutBanner />
      <YourStory />
      <DesignCode />
      <ExperinceTimeline />
      <SkillsGrids />
      <WorkCta />
    </>
  );
};

export default AboutMePage;