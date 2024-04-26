import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const ProjectCarousel = () => {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    <CarouselItem className="flex flex-row gap-x-4 text-justify font-semibold"><img src="/educated.jpg" alt="educated" width={700} height={600}/> The online education platform is a comprehensive digital learning ecosystem that offers a wide array of courses, tutorials, and educational materials across various disciplines. It provides interactive lessons, quizzes, assignments, and assessments to foster active engagement and knowledge retention among students. By integrating modern technology such as multimedia content, virtual classrooms, and collaborative tools, the platform creates immersive learning experiences tailored to individual learning styles. Additionally, features like progress tracking, personalized recommendations, and peer-to-peer interaction enhance student satisfaction and success. With its flexible and accessible nature, the online education platform empowers learners to pursue their educational goals at their own pace, anytime and anywhere, ultimately democratizing access to quality education on a global scale.</CarouselItem>
                    <CarouselItem className="flex flex-row gap-x-4 text-justify font-semibold"><img src="/medicare.jpg" alt="medicare" width={700} height={600}/>The Medicare Management System is a comprehensive software solution designed to streamline and enhance the management of Medicare services. It encompasses features such as patient management, appointment scheduling, billing and claims processing, electronic health records (EHR), Medicare eligibility verification, reporting, analytics, and seamless integration with Medicare systems. This system aims to improve operational efficiency, enhance patient care, ensure compliance with Medicare regulations, and provide valuable data-driven insights for healthcare organizations.</CarouselItem>
                    <CarouselItem className="flex flex-row gap-x-4 text-justify font-semibold"><img src="/marketing.jpg" alt="marketing" width={700} height={600}/>The marketing website is a dynamic and engaging online platform designed to showcase products, services, and brand identity to potential customers. It serves as a digital storefront, providing visitors with valuable information, compelling visuals, and interactive elements to drive engagement and conversions. The website features captivating content, including product descriptions, testimonials, blog posts, and multimedia assets such as images and videos. It incorporates modern design principles, user-friendly navigation, and responsive layout to ensure optimal viewing experience across devices. Additionally, the website may include lead generation forms, social media integration, and analytics tools to track visitor behavior and measure marketing performance. Overall, the marketing website serves as a powerful tool to attract, inform, and convert visitors into loyal customers, ultimately contributing to the success and growth of the business.</CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};
export default ProjectCarousel;
