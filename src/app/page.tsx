import Hero from "@/components/Hero";
import Project from "@/components/Project";
import WorkTogether from "@/components/WorkTogether";
import Customise from "@/components/Customise";
import Plan from "@/components/Plan";
import Work from "@/components/Work";
import Data from "@/components/Data";
import Sponsers from "@/components/Sponsers";
import Apps from "@/components/Apps";
import User from "@/components/User";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Project />
      <WorkTogether />
      <Customise />
      <Plan />
      <Work />
      <Data />
      <Sponsers />
      <Apps />
      <User />
      <Footer />
    </div>
  );
}
