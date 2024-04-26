import About from "@/components/landing-page/about";
import Hero from "@/components/landing-page/hero";
import ProjectComponent from "@/components/landing-page/project-component";
import ServiceCard from "@/components/landing-page/service-card";

export default function Home() {
    return (
        <div className="h-full w-full flex flex-col items-center pt-[40px] px-[120px] gap-y-10">
            <Hero />
            <ServiceCard />
            <ProjectComponent />
            <About />
        </div>
    );
}
