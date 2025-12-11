import { Check } from "lucide-react";
import ImageSpotlight from "../image-spotlight";
export default function WhatWeOffer({picture}: {picture: string}) {
  return (
    <section className="w-full bg-black py-24 px-6">
      <div className="md:max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 max-md:place-items-center items-end">

        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-200 mb-4">
            What We Offer
          </h2>

          <p className="text-gray-400 md:max-w-md mb-10">
            We bring a specialized approach to e-commerce, combining technical
            expertise with creative vision to deliver assets that perform.
          </p>

          <div className="grid md:grid-cols-2 gap-5">

            {/* Card 1 */}
            <div className="border border-gray-700/60 rounded-xl p-6 hover:border-gray-500/70 transition">
              <Check className="text-gray-300 mb-4" size={18} />
              <h3 className="text-lg font-serif text-gray-200 mb-1">
                Studio-Grade Photography
              </h3>
              <p className="text-gray-400 text-sm">
                Clean, crisp imagery that highlights product quality.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-700/60 rounded-xl p-6 hover:border-gray-500/70 transition">
              <Check className="text-gray-300 mb-4" size={18} />
              <h3 className="text-lg font-serif text-gray-200 mb-1">
                360° & Interactive
              </h3>
              <p className="text-gray-400 text-sm">
                Immersive views to increase conversion rates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-700/60 rounded-xl p-6 hover:border-gray-500/70 transition">
              <Check className="text-gray-300 mb-4" size={18} />
              <h3 className="text-lg font-serif text-gray-200 mb-1">
                Lifestyle & Context
              </h3>
              <p className="text-gray-400 text-sm">
                Showing your product in its natural environment.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-700/60 rounded-xl p-6 hover:border-gray-500/70 transition">
              <Check className="text-gray-300 mb-4" size={18} />
              <h3 className="text-lg font-serif text-gray-200 mb-1">
                Detail Close-Ups
              </h3>
              <p className="text-gray-400 text-sm">
                Macro shots emphasizing texture and features.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full">
          <ImageSpotlight
            src={picture}
            alt="camera"
            config={{className:"max-md:h-100! max-md:w-100!"}}
          />
        </div>

      </div>
    </section>
  );
}
