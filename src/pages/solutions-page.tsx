import SolutionsCard from "@/components/solutions-page/solutions-card";

export default function SolutionsPage() {
    return (
        <div className="h-full w-full flex flex-col items-center pt-[40px] px-[120px] gap-y-10 ">
            <div className="w-[920px] flex items-center flex-col">
                <h1 className="text-5xl font-bold">Solutions Page</h1>
                <SolutionsCard />
            </div>
        </div>
    );
}
