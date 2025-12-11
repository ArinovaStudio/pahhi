"use client";
import Image from "next/image";
import ImageSpotlight from "../image-spotlight";
import data from "@/data/data";
export default function SixItemsGrid() {
  // const works = [
  //   { id: 1, src: "/eg1.png", properties: "min-h-[150px] flex w-full h-full" },
  //   {
  //     id: 2,
  //     src: "/eg2.png",
  //     properties: "min-h-[150px] max-w-50 w-full h-full",
  //   },
  //   {
  //     id: 3,
  //     src: "/eg3.png",
  //     properties: "min-h-[150px] max-w-50 w-full h-full",
  //   },
  //   { id: 4, src: "/eg4.png", properties: "min-h-[150px] flex w-full h-full" },
  //   { id: 5, src: "/eg4.png", properties: "min-h-[150px] flex w-full h-full" },
  //   { id: 6, src: "/eg4.png", properties: "min-h-[150px] flex w-full h-full" },
  // ];
  const images = data["home"].images;
  return (
    <section className="bg-black py-16">
      <div className="relative! max-w-xl md:max-w-7xl w-full mx-auto">
        <h2 className="text-center font-medium text-white text-2xl md:text-3xl font-light tracking-wide mb-12">
          Featured Works
        </h2>
        <div className="relative! mx-auto h-full px-5 md:px-0">
          <div className="relative! grid md:grid-cols-[35%_30%_35%] gap-4">
            {/* Card 1 */}
              <ImageSpotlight
                src={images[0]}
                alt="Portfolio item"
                config={{className:"max-md:max-h-[300px]! max-md:max-w-[500px]!"}}
              />

            {/* Card 2 */}
              <ImageSpotlight
                src={images[1]}
                alt="Portfolio item"
                config={{className:"max-md:max-h-[300px]! max-md:max-w-[500px]!"}}
              />

            {/* Card 3 */}
              <ImageSpotlight
                src={images[2]}
                alt="Portfolio item"
                config={{className:"max-md:max-h-[300px]! max-md:max-w-[500px]!"}}
              />
          </div>
          <div className="grid md:grid-cols-[25%_50%_25%] gap-4 h-full mt-4">
            {/* Card 4 */}
              <ImageSpotlight
                src={images[3]}
                alt="Portfolio item"
                config={{className:"max-md:max-h-[300px]! max-md:max-w-[500px]!"}}
              />

            {/* Card 5 */}
              <ImageSpotlight
                src={images[4]}
                alt="Portfolio item"
                config={{className:"max-md:max-h-[300px]! max-md:max-w-[500px]!"}}
              />

            {/* Card 6 */}
              <ImageSpotlight
                src={images[5]}
                alt="Portfolio item"
                config={{className:"max-md:max-h-[300px]! max-md:max-w-[500px]!"}}
              />
           
          </div>
        </div>
      </div>
    </section>
  );
}
