"use client";
import Image from "next/image";
import data from "@/data/data";
export default function SelectedWorks({service}:{service: string}) {
  const images = data[service].images;
  return (
    <section className="w-full bg-black py-16">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-center text-white text-2xl md:text-3xl font-light tracking-wide mb-12">
          Selected Works
        </h2>

        <div className="mx-auto h-full px-5 md:px-0">
          <div className="flex md:flex-row flex-col h-full gap-4">
            {/* Card 1 */}
            <div className={`w-full flex-9 relative h-full min-h-[150px] w-full md:w-auto md:min-h-[400px]`}>
              <Image
                src={images[2]}
                alt="Portfolio item"
                fill
                className="object-cover"
              />
            </div>

            {/* Card 2 */}
            <div className={`flex-5 w-full relative h-full min-h-[150px] w-full md:w-auto md:min-h-[400px]`}>
              <Image
                src={images[3]}
                alt="Portfolio item"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex h-full gap-4 mt-4 md:flex-row flex-col">
            {/* Card 3 */}
            <div className={`w-full flex-5 relative h-full min-h-[150px] w-full md:w-auto md:min-h-[400px]`}>
              <Image
                src={images[4]}
                alt="Portfolio item"
                fill
                className="object-cover"
              />
            </div>

            {/* Card 4 */}
            <div className={`flex-9 w-full flex-1 relative h-full min-h-[150px] w-full md:w-auto md:min-h-[400px]`}>
              <Image
                src={images[5]}
                alt="Portfolio item"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
