import Experience from "@/app/experience/page";
import HeroBanner from "../components/hero";
import About from "@/app/about/page";
import Contact from "@/app/contact/page";
import Projects from "@/app/project/page";

export default function Home(){
  return(
    <div>
      <HeroBanner />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
