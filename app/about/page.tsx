import HowWeWork from "@/components/about/HowItWorks";
import PaahiStory from "@/components/about/PaahiStory";
import TeamSection from "@/components/about/Team";
import VisionSection from "@/components/about/VisionSection";
import Image from "next/image";
export default function Ecommerce() {
  return (
      <div>
        <PaahiStory/>
        <VisionSection/>
        <HowWeWork/>
        <TeamSection/>
      </div>
  );
}
