import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { WavyBackground } from "@/components/ui/wavy-background";
import { TextLoop } from "easy-react-text-loop";

const Hero = () => {
    const words = [
        { text: "Delivering", className: "text-white" },
        { text: "Unparallel", className: "text-white" },
        { text: "&", className: "text-white" },
        { text: "Exceptional", className: "text-white" },
    ]
    return (
        <div className="h-[512px] px-[120px]">
            <WavyBackground className="h-[480px] bg-cover rounded-lg">
                <div className="h-full flex items-center justify-center flex-col gap-y-2">
                    <div className="max-w-[720px] text-6xl font-bold"><TypewriterEffect words={words} />
                    </div>
                    <div className="text-6xl font-bold flex justify-center ">
                    <TextLoop>
                        <span className="text-[#1c91f2]">Values</span>
                        <span className="text-[#1c91f2]">Success</span>
                        <span className="text-[#1c91f2]">Services</span>
                        <span className="text-[#1c91f2]">Security</span>
                    </TextLoop>
                    </div>
                </div>
            </WavyBackground>
        </div>
    );
};
export default Hero;
