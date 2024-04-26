import Project from "@/components/projects-page/project";

export default function ProjectsPage() {
    return (
        <div className="h-full w-full flex flex-col items-center pt-[40px] px-[120px] gap-y-10 ">
            <div className="w-[920px] flex items-center flex-col">
                <h1 className="text-5xl font-bold">Projects</h1>
                <p className="text-lg mt-4">Welcome to our projects page! Explore our innovative endeavors spanning various domains, showcasing our expertise, creativity, and dedication. From software applications to engineering marvels, each project reflects our commitment to excellence and our passion for solving real-world problems. Dive into the details and discover how we&apos;re making a difference through cutting-edge technology and forward-thinking solutions.</p>
            </div>
            <Project />
        </div>
    );
}
