export default function HowWeWork() {
  const steps = [
    {
      number: "01.",
      title: "Discover",
      desc: "We listen deeply to your brand goals.",
    },
    {
      number: "02.",
      title: "Design",
      desc: "We conceptualize the visual strategy.",
    },
    {
      number: "03.",
      title: "Produce",
      desc: "We execute with top-tier equipment.",
    },
    {
      number: "04.",
      title: "Amplify",
      desc: "We deliver assets ready for impact.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-24 px-6">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-serif mb-16">
        How We Work
      </h2>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {steps.map((item, index) => (
          <div key={index} className="relative">
            {/* Top Divider */}
            <span className="absolute -top-4 left-0 right-0 h-px bg-gray-700"></span>

            <div className="pt-6">
              <p className="text-gray-400 text-sm tracking-wider mb-2">
                {item.number}{" "}
                <span className="text-white font-serif text-lg">
                  {item.title}
                </span>
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
