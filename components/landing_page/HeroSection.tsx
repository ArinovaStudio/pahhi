import { Button } from "../ui/button";
import { ArrowDown,LayoutGrid,Store } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen gap-5 bg-black text-white overflow-hidden flex flex-col items-center justify-center px-6 lg:px-20">

      {/* LEFT FLOATING ICONS */}
      <div className="absolute left-5 top-0 items-center hidden lg:flex flex-col space-y-6">
        <Button variant={"ghost"} className="uppercase tracking-widest text-sm">Get App</Button>

          <Button variant={"ghost"} className="w-14 h-14 border border-white rounded-full uppercase tracking-widest text-sm"><LayoutGrid fill="white" stroke="black" size={50}/></Button>

          <Button variant={"ghost"} className="w-14 h-14 border border-white rounded-full uppercase tracking-widest text-sm"><Store size={50}/></Button>
      </div>

      {/* RIGHT CONTROLS */}
      <div className="absolute right-5 top-24 hidden lg:block">
        <div className="relative max-w-14 border border-white flex items-center rounded-md p-2">
           <Button variant={"ghost"}  className="w-7 flex text-xl border border-white text-white justify-end items-start [clip-path:polygon(0%_0%,_0%_100%,_100%_100%)]">+</Button>
            <Button variant={"ghost"} className="absolute flex w-7 justify-start hover:bg-gray-200! items-end text-xl bg-gray-100 text-black! [clip-path:polygon(100%_0,_0_0,_100%_100%)]">−</Button>
        </div>

        <div className="mt-4 flex flex-col items-center space-y-1">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className={`h-[2px] ${i % 2 === 0 ? "w-6" : "w-3"} bg-white/70`} />
          ))}
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="w-full md:max-w-xl! lg:max-w-7xl! grid grid-cols-1 md:grid-cols-auto items-center gap-5">
        <div className="flex flex-col">
           <h1 className="font-[Didot] tracking-wide text-center lg:text-left leading-tight">
            <span className="block text-6xl md:text-7xl">TAKE A</span>

            <span className="block text-7xl md:text-8xl mt-4">
              PERFECT 
              <span className="inline-block mx-4 text-5xl">→</span>
              SHOT
            </span>
          </h1>

        </div>
        {/* LEFT TEXT */}
        <div className="grid md:grid-cols-2 max-sm:place-items-center">
        <div className="flex flex-col justify-between  max-sm:items-center">
         {/* CAMERA IMAGE */}
          {/* <img
            src="/camera-2.png"
            alt="Camera"
            className="max-md:flex hidden w-[380px] md:w-[480px] lg:w-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          /> */}
          <video autoPlay loop muted playsInline preload="none" className="max-md:flex hidden w-[380px] md:w-[480px] lg:w-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]" aria-label="Background video">
        {/* Use multiple sources for broader browser compatibility (MP4 is widely supported) */}
        <source src="/mobile.mp4" type="video/mp4" />
        {/* Fallback text for browsers that do not support the video tag */}
        Your browser does not support the video tag.
      </video>

          <p className="text-sm max-w-xs mt-10 opacity-80 leading-relaxed mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod beatae quasi repudiandae, sequi magni, amet, voluptate enim maxime laudantium facilis illo voluptatum repellendus sit? Non quasi ad impedit hic totam repudiandae eius eum, officia itaque asperiores voluptatem ut minima libero sint excepturi aspernatur eaque voluptatibus! Velit amet non eligendi?
          </p>

          {/* BUTTON */}
          <div className="max-w-80 gap-5 flex flex-col w-full">
          <div className="mt-12">
            <Button className="w-full bg-white text-black px-10 min-h-13 rounded-full text-sm font-medium shadow-lg transition">
              MORE INFORMATION
            </Button>
          </div>

          {/* DOWN ARROW */}
          <Button variant={"ghost"} className="self-center w-14 h-14 max-md:mt-6 border border-white rounded-full uppercase tracking-widest text-sm max-md:mb-5"><ArrowDown size={50}/></Button>
          </div>
        </div>

        {/* RIGHT CAMERA + CALIBRATION ELEMENTS */}
        <div className="relative md:flex-row flex justify-center">
          {/* CAMERA IMAGE */}
          {/* <img
            src="/camera-2.png"
            alt="Camera"
            className="hidden md:flex w-[380px] md:w-[480px] lg:w-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          /> */}
        <video autoPlay loop muted playsInline preload="none" className="hidden md:flex w-[380px] md:w-[480px] lg:w-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]" aria-label="Background video">
        {/* Use multiple sources for broader browser compatibility (MP4 is widely supported) */}
        <source src="/desktop.mp4" type="video/mp4" />
        {/* Fallback text for browsers that do not support the video tag */}
        Your browser does not support the video tag.
      </video>
          {/* LEFT CALIBRATION MARKS */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-3">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className={`h-[2px] ${i % 2 === 0 ? "w-10" : "w-6"} bg-white/70`} />
            ))}
          </div>

          {/* RIGHT CALIBRATION MARKS */}
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col space-y-3">
            {Array.from({ length: 14 }).map((_, i) => (
              <div key={i} className={`h-[2px] ${i % 2 === 0 ? "w-10" : "w-6"} bg-white/70`} />
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* BOTTOM RIGHT DESCRIPTION */}
      <p className="self-end text-xs max-w-md opacity-70 leading-relaxed hidden lg:block">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quia iste sit ut quam, nesciunt quas eaque voluptate provident doloribus adipisci aspernatur excepturi earum fuga, numquam autem sed nemo cum officia. Amet autem hic ratione pariatur dignissimos obcaecati alias est.
      </p>
    </section>
  );
}
