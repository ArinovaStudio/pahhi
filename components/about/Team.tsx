import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Arjun Mehta",
      role: "Founder & Director",
      img: "/person.png",
      link: "#",
    },
    {
      name: "Sarah Jen",
      role: "Business Head",
      img: "/person.png",
      link: "#",
    },
    {
      name: "Dev Patel",
      role: "Creative Director",
      img: "/person.png",
      link: "#",
    },
    {
      name: "Ananya R",
      role: "Lead Producer",
      img: "/person.png",
      link: "#",
    },
  ];

  return (
    <section
      className="
        w-full py-24 px-6
        bg-white text-black
        dark:bg-black dark:text-white
      "
    >
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-serif mb-16">
        Meet The Team
      </h2>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {team.map((member, index) => (
          <div key={index}>
            {/* Circular Image */}
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden grayscale hover:grayscale-0 duration-300">
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Role */}
            <h3 className="mt-6 text-lg font-serif">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm tracking-wide">
              {member.role}
            </p>

            {/* LinkedIn Icon */}
            <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center w-10 h-10 
                border rounded-full mt-4
                border-gray-400 dark:border-gray-600 
                hover:bg-gray-200 dark:hover:bg-gray-800 
                transition
              "
            >
              <Linkedin size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
