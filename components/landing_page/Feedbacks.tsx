import React from "react";
import TestimonialCard from "../TestimonialCard";

const Feedbacks = () => {
  return (
    <section
      className="
        md:max-w-7xl mx-auto 
        py-20 max-md:px-5
        bg-white text-black 
        dark:bg-black dark:text-white
      "
    >
      <h2 className="text-4xl max-md:text-center md:text-6xl font-extrabold mb-16 leading-tight">
        WHAT OUR <span className="text-gray-600 dark:text-gray-400">CLIENT</span> SAYS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <TestimonialCard
          title="Shubham Kumar"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ducimus eos nemo, ex ad quasi dicta adipisci tenetur quos qui ullam repudiandae beatae animi obcaecati distinctio quam odit nobis odio exercitationem, facilis sit itaque dolorem. Ratione porro nisi at cumque."
        />
        <TestimonialCard
          title="Shubham Kumar"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ducimus eos nemo, ex ad quasi dicta adipisci tenetur quos qui ullam repudiandae beatae animi obcaecati distinctio quam odit nobis odio exercitationem, facilis sit itaque dolorem. Ratione porro nisi at cumque."
        />
      </div>
    </section>
  );
};

export default Feedbacks;
