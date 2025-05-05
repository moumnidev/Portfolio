import About from "@/components/home/About";
// import Projects from "@/components/home/Projects";
import Title from "@/components/home/Title";
import Skills from "@/components/home/Skills";
import Contact from "@/components/home/Contact";
import InProgress from "@/components/home/InProgress";

export default function Home() {
  return (
    <div className="pt-16">
        <Title />
        <About />
        {/* <Projects /> */}
        <InProgress />
        <Skills />
        <Contact />
    </div>
  );
}
