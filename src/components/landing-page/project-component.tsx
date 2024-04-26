import ProjectCarousel from "./carousel";

const ProjectComponent = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-y-10">
    <p className="text-4xl font-semibold">Our Projects</p>
        <ProjectCarousel />
    </div>
  );
};
export default ProjectComponent;
