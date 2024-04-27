import CareerCard from "@/components/about-page/career-card";

export default function CareersPage() {
    return (
        <div className="h-full w-full flex flex-col items-center pt-8 px-4 md:px-8 lg:px-16 xl:px-24">
            <div className="max-w-screen-lg w-full flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">Join Our Team</h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center px-4">
                    Joining our team means being part of a collaborative and fast-paced environment where you will have the opportunity to work on exciting projects and develop your skills and knowledge. We provide our employees with the resources and support they need to succeed, including professional development opportunities, flexible work arrangements, and a comprehensive benefits package. If you are a creative, driven, and forward-thinking individual who is looking for a challenging and rewarding career, we encourage you to apply to join our team and help us make a difference in the world.
                </p>
            </div>
            <div className="w-full mt-8">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4">Career Opportunities</h1>
                <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 items-center">
                    <CareerCard
                        title="Internship"
                        description="We are looking for interns with a passion for technology and a desire to learn. The ideal candidate should have a strong background in computer science and a willingness to work hard and take on new challenges."
                        imageSrc="/apply.jpg"
                        link="/apply" />
                    <CareerCard
                        title="Flutter Developer"
                        description="We are looking for a Flutter with experience in Dart and Firebase. The ideal candidate should have a strong background in computer science and a passion for technology."
                        imageSrc="/apply.jpg"
                        link="/apply" />
                    <CareerCard
                        title="Sales Associate"
                        description="We are looking for a sales associate with experience in customer service and sales. The ideal candidate should have a strong background in business and a passion for customer satisfaction."
                        imageSrc="/apply.jpg"
                        link="/apply" />
                    <CareerCard
                        title="UI/UX Designer"
                        description="We are looking for a UI/UX designer with experience in Figma and Adobe XD. The ideal candidate should have a strong background in design and a passion for creating beautiful user interfaces."
                        imageSrc="/apply.jpg"
                        link="/apply" />
                    <CareerCard
                        title="React JS Developer"
                        description="We are looking for a React JS with experience in JavaScript and React. The ideal candidate should have a strong background in computer science and a passion for technology."
                        imageSrc="/apply.jpg"
                        link="/apply" />
                    <CareerCard
                        title="Visual Designer"
                        description="We are looking for a visual designer with experience in Adobe Creative Suite and Sketch. The ideal candidate should have a strong background in design and a passion for creating beautiful visuals."
                        imageSrc="/apply.jpg"
                        link="/apply" />
                </div>
            </div>
        </div>
    );
}

