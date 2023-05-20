import React from 'react';
import H2 from './ui/h2';
import H1 from './ui/h1';
import Image from 'next/image';
import aboutPic from '../public/about.webp';
import aboutText from '../public/about1.svg';

export default function About() {
  return (
    <section
      className="mx-auto bg-white px-4 py-20 sm:max-w-xl  md:max-w-full lg:max-w-screen-lg"
      id="about"
    >
      <div className="flex justify-between gap-20">
        <div className="relative w-1/2">
          <span className="absolute bottom-3 right-3 z-40 text-7xl">👨‍💻</span>
          <Image src={aboutPic} className="rounded-2xl" alt="About image" />
          <span className="absolute -bottom-10 -right-9 h-40 w-40 rounded-full bg-white">
            {/* <Image
              src={aboutText}
              alt="Full-Stack .NET Developer"
              className="h-52 w-52"
            /> */}
          </span>
        </div>
        <div className="w-1/2">
          <H2>About me</H2>
          <H1 className="mb-4">
            A dedicated Front-end Developer based in Brussels, Belgium 📍
          </H1>
          <p className="font-medium text-slate-500">
            .NET Architect with customer-oriented and service-minded attitude.
            Expertise in software architecture, C#, .NET Core, Angular, ASP.Net
            (MVC & Web API),Back-End & Frond-End development.
            <br />
            <br />
            Curious about everything that concerns leadership & management, big
            ideas & innovation, marketing strategies, lean thinking, social
            media, economy and UX design.
          </p>
        </div>
      </div>
    </section>
  );
}
