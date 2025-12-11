export default function HeroSection({service,bgPic}:{service:string,bgPic: string}) {
  return (
    <section className={`bg-no-repeat bg-size-[100%_auto] bg-center  min-h-[450px] w-full bg-black py-32 px-6`} style={{backgroundImage:`url(${bgPic})`}}>
      <div className="max-w-5xl mx-auto text-center">

        {/* Small label */}
        <p className="text-xs tracking-[0.25em] text-gray-900 mb-6">
          SERVICES
        </p>

        {/* Main heading */}
        <h1 className="capitalize text-4xl md:text-6xl font-serif text-gray-800 leading-tight">
          {service}
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 mt-6 text-sm md:text-base">
          Make Every Product Irresistible. Sell With Confidence.
        </p>
      </div>
    </section>
  );
}
