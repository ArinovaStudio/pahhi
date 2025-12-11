import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="w-full">
          <Image
            src="/vision.png" // Replace with your imported image
            alt="Vision Graphic"
            width={200}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="px-8 py-5 text-left max-h-[600px] flex justify-center flex-col px-3 bg-[#1A1A1A] h-full w-full">
          <h2 className="text-xl md:text-3xl font-serif mb-6">
            The Vision That Drives Our Craft
          </h2>

          <p className="text-gray-300 text-base md:text-md leading-relaxed mb-8">
            We see a world where brands don't just interrupt, but entertain and inspire.
            Our mission is to turn abstract ideas into tangible, high-fidelity visual
            experiences.
          </p>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gray-500"></span>
              <p className="uppercase tracking-wide text-sm text-gray-300">
                Uncompromising Quality
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gray-500"></span>
              <p className="uppercase tracking-wide text-sm text-gray-300">
                Agile Production
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gray-500"></span>
              <p className="uppercase tracking-wide text-sm text-gray-300">
                Technology Forward
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
