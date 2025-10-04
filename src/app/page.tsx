import Architecture from "./components/Architecture";
import Contact from "./components/Contact";
import Faetures from "./components/Faetures";
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
      <Architecture />
      <Faetures />
      <Performance />
      <Roadmap />
      <Team />
      <Contact />
    </div>
  );
}
