import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Partners } from "../components/Partners";
import { Projects } from "../components/Projects";
import { Results } from "../components/Results";
import { Team } from "../components/Team";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <div className="max-w-screen relative flex w-full flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <Partners />
      <CTA />
      <Results />
      <Team />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}
