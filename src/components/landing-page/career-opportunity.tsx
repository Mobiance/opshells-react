import CustomCard from "./career-card";

const CareerOpportunity = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold">Career Opportunity</h1>
            <div className="flex flex-col gap-y-4">
            <CustomCard
                title="Flutter Developer"
                description="We are looking for a Flutter developer with experience in Dart and Firebase. The ideal candidate should have a strong background in computer science and a passion for technology."
                link="/software-developer" />
            <CustomCard
                title="Sales Associate"
                description="We are looking for a sales associate with experience in customer service and sales. The ideal candidate should have a strong background in business and a passion for customer satisfaction."
                link="/software-developer" />
            <CustomCard
                title="UI/UX Designer"
                description="We are looking for a UI/UX designer with experience in Figma and Adobe XD. The ideal candidate should have a strong background in design and a passion for creating beautiful user interfaces."
                link="/software-developer" />
            <CustomCard
                title="React JS Developer"
                description="We are looking for a React JS developer with experience in JavaScript and React. The ideal candidate should have a strong background in computer science and a passion for technology."
                link="/software-developer" />
            <CustomCard
                title="Visual Designer"
                description="We are looking for a visual designer with experience in Adobe Creative Suite and Sketch. The ideal candidate should have a strong background in design and a passion for creating beautiful visuals."
                link="/software-developer" />
            </div>
        </div>
    );
};
export default CareerOpportunity;
