import React from "react";
import TestimonialCard from "../TestimonialCard";
const Feedbacks = () => {
  return (
    <section className="md:max-w-7xl mx-auto bg-black text-white py-20 max-md:px-5">
      <h2 className="text-4xl max-md:text-center md:text-6xl font-extrabold mb-16 leading-tight">
        WHAT OUR <span className="text-gray-400">CLIENT</span> SAYS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        {/* <div className="bg-[#0f0f0f] p-10 rounded-3xl shadow-[0px_0px_20px_rgba(255,255,255,0.05)]">
          <h3 className="text-2xl font-semibold">PRABHAKAR</h3>
          <p className="text-gray-400 mt-1 mb-6">Gangs Lifestyle</p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Our experience with Paahi Productions was transformative for our
            online store. Their Ecommerce Photography not only showcased our
            products flawlessly but also transformed our entire brand image. The
            level of detail, creativity, and professionalism exceeded our
            expectations. Paahi Productions' commitment to excellence truly made
            our products stand out in the competitive digital marketplace.
          </p>
        </div> */}

        {/* Card 2 */}
        {/* <div className="bg-[#0f0f0f] p-10 rounded-3xl shadow-[0px_0px_20px_rgba(255,255,255,0.05)]">
          <h3 className="text-2xl font-semibold">PRABHAKAR</h3>
          <p className="text-gray-400 mt-1 mb-6">Gangs Lifestyle</p>

          <p className="text-gray-300 leading-relaxed text-lg">
            Our experience with Paahi Productions was transformative for our
            online store. Their Ecommerce Photography not only showcased our
            products flawlessly but also transformed our entire brand image. The
            level of detail, creativity, and professionalism exceeded our
            expectations. Paahi Productions' commitment to excellence truly made
            our products stand out in the competitive digital marketplace.
          </p>
        </div> */}
        <TestimonialCard title="Shubham Kumar" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ducimus eos nemo, ex ad quasi dicta adipisci tenetur quos qui ullam repudiandae beatae animi obcaecati distinctio quam odit nobis odio exercitationem, facilis sit itaque dolorem. Ratione porro nisi at cumque."/>
        <TestimonialCard title="Shubham Kumar" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ducimus eos nemo, ex ad quasi dicta adipisci tenetur quos qui ullam repudiandae beatae animi obcaecati distinctio quam odit nobis odio exercitationem, facilis sit itaque dolorem. Ratione porro nisi at cumque."/>
      </div>
    </section>
  );
};

export default Feedbacks;
