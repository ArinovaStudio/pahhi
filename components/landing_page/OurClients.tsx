import React from "react";

const OurClients = () => {
  return (
    <section className="w-full bg-white dark:bg-neutral-900 py-10 flex flex-col items-center text-center transition-colors">
      <h3 className="uppercase text-sm tracking-[0.3em] text-gray-600 dark:text-gray-400 mb-10">
        Our Clients
      </h3>

      <div className="flex max-lg:flex-col flex-wrap justify-center gap-10 md:gap-20 text-gray-700 dark:text-gray-300 text-xl md:text-2xl font-serif">
        <span className="opacity-60 hover:opacity-100 transition">PUMA</span>
        <span className="opacity-60 hover:opacity-100 transition">JOCKEY</span>
        <span className="opacity-60 hover:opacity-100 transition">CRED</span>
        <span className="opacity-60 hover:opacity-100 transition">VISION EXPRESS</span>
        <span className="opacity-60 hover:opacity-100 transition">NOBERO</span>
      </div>
    </section>
  );
};

export default OurClients;
