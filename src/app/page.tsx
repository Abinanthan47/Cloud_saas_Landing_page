import FadingLine from "@/components/FadingLine";
import Architecture from "./components/Architecture";
import Faetures from "./components/Faetures";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Performance from "./components/Performance";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import WhyDatavec from "./components/WhyDatavec";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WhyDatavec />
      <FadingLine thickness={1} blur={500} color="rgba(59,130,246,0.5)" fade="rgba(59,130,246,0)"/>
      <Architecture />
      <FadingLine thickness={1} blur={50} color="rgba(59,130,246,0.9)" fade="rgba(59,130,246,0)"/>
      <Faetures />
      <Performance />
      <FadingLine thickness={1} blur={50} color="rgba(59,130,246,0.4)" fade="rgba(59,130,246,0)"/>
      <Roadmap />
      <FadingLine thickness={1} blur={50} color="rgba(59,130,246,0.4)" fade="rgba(59,130,246,0)"/>
      <Team />
      <Footer/>
    </div>
  );
}
