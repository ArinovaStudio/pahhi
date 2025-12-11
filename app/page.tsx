import Feedbacks from "@/components/landing_page/Feedbacks";
import Hero from "@/components/landing_page/HeroSection";
import OurClients from "@/components/landing_page/OurClients";
import OurWorkSection from "@/components/landing_page/OurWorkSection";
import SixItemsGrid from "@/components/landing_page/SixItemsGrid";
import Image from "next/image";
export default function Home() {
  return (
    <div>
        <div className="absolute z-50! inset-0 animate-load-in h-full w-full"></div>
        <div className="absolute opacity-0 bg-black! dark:bg-white! z-40! inset-0 transition-all animate-click-picture h-full w-full"></div>
        <Hero/>
        <OurWorkSection/>
        <SixItemsGrid/>
        <Feedbacks/>
        <OurClients/>
    </div>
  );
}
