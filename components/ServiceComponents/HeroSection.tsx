export default function HeroSection({service,bgPic,titleColor}:{service:string,bgPic: string,titleColor: string}) {
  return (
    <section className={`bg-no-repeat bg-size-[100%_auto] bg-center  min-h-[450px] w-full py-32 px-6 relative`} style={{backgroundImage:`url(${bgPic})`}}>
      {/* <div className="w-full h-full bg-black/60 absolute inset-0"></div> */}
      <div className="md:max-w-5xl max-md:w-full mx-auto text-center">

        {/* Small label */}
        <p className={`text-xs tracking-[0.25em] ${titleColor==="black"?"text-black":"text-white"} mb-6`}>
          SERVICES
        </p>

        {/* Main heading */}
        <h1 className={`capitalize text-xl md:text-6xl font-serif ${titleColor==="black" ? "text-black":"text-white"} leading-tight`}>
          {service}
        </h1>

        {/* Subtext */}
        <p className={`${titleColor==="black" ? "text-black":"text-white"} mt-6 text-sm md:text-base`}>
          Make Every Product Irresistible. Sell With Confidence.
        </p>
      </div>
    </section>
  );
}
