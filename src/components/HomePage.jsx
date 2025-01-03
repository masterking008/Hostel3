import ActivitySection from "./Activity";
// import Announcements from "./Announcements";
import FAQ from "./Faq";
import HeroSection from "./Hero";
import News from "./News";
import Testimonials from "./News";

export default function HomePage() {
  return (
    <>
     
      <HeroSection />
      {/* <Announcements/> */}
      {/* <ActivitySection/> */}
      <News/>
      <FAQ />

    </>
  )
}