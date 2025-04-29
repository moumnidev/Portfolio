import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Title from "@/components/home/Title";

export default function Home() {
  return (
    <div className="pt-16">
        <Title />
        <About />
        <Projects />
    </div>
  );
}
