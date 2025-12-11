"use client";
import Image from "next/image";
import HeroSection from "@/components/ServiceComponents/HeroSection";
import WhatWeOffer from "@/components/ServiceComponents/WhatWeOffer";
import SelectedWorks from "@/components/ServiceComponents/SelectedWorks";
import CTASection from "@/components/ServiceComponents/CTASection";
import { useParams,useRouter } from "next/navigation";
import { notFound} from "next/navigation";
import data from "@/data/data";
export default function Service() {
  const {service}:{service:string} = useParams();
  const router = useRouter();
  if(!Object.keys(data).includes(service)){
      notFound();
  }
  return (
      <div>
        <HeroSection service={data[service].title} titleColor={data[service].titleColor ?? "black"} bgPic={data[service].images[0]}/>
        <WhatWeOffer picture={data[service].images[1]}/>
        <SelectedWorks service={service}/>
        <CTASection/> 
      </div>
  );
}
