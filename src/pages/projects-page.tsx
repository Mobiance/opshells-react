import Project from "@/components/projects-page/project";

export default function ProjectsPage() {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center pt-8 px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="max-w-screen-lg w-full flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">Projects</h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center px-4">
                    Welcome to our projects page! Explore our innovative endeavors spanning various domains, showcasing our expertise, creativity, and dedication. From software applications to engineering marvels, each project reflects our commitment to excellence and our passion for solving real-world problems. Dive into the details and discover how we&apos;re making a difference through cutting-edge technology and forward-thinking solutions.
                </p>
            </div>
                <Project />
        </div>
    );
}

