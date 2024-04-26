import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

const ServiceCard = () => {
    return (
        <>
        <h1 className="text-3xl font-semibold">Our services</h1>
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </>
    );
}
const items = [
    {
        title: "Deep Learning",
        description: "Leverage the power of AI to make your business smarter.",
        header: <img src="/deeplearning.jpg" alt="img1" width={200} height={100} />,
        className: "md:col-span-1",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Website Development",
        description: "Build a website that stands out and makes a difference.",
        header: <img src="/img2.jpg" alt="img2" width={200} height={100} />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Cloud Services",
        description: "Discover the power of cloud computing and storage.",
        header: <img src="/img3.jpg" alt="img3" width={200} height={100} />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Android Development",
        description:
            "Create an app that is tailored to your needs and your audience.",
        header: <img src="/img4.jpg" alt="img4" width={200} height={100} />,
        className: "md:col-span-1",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Big Data",
        description:
            "Make sense of your data and use it to make better decisions.",
        header: <img src="/bigdata.jpg" alt="img4" width={200} height={100} />,
        className: "md:col-span-1",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Identity and Access Management",
        description:
            "Manage who has access to what and keep your data secure.",
        header: <img src="/identity.jpg" alt="img4" width={200} height={100} />,
        className: "md:col-span-1",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];
export default ServiceCard;
