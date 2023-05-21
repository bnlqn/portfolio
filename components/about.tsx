import React from 'react';
import H2 from './ui/h2';
import H1 from './ui/h1';
import Image from 'next/image';
import aboutPic from '../public/about.webp';

export default function About() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-slate-950 " id="about">
      <div className="mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-lg">
        <div className="flex justify-between gap-20">
          <div className="relative w-1/2">
            <span className="absolute bottom-3 right-3 z-40 text-7xl">👨‍💻</span>
            <Image src={aboutPic} className="rounded-2xl" alt="About image" />
            <span className="absolute -bottom-10 -right-9 h-40 w-40 rounded-full bg-white dark:bg-slate-900"></span>
          </div>
          <div className="w-1/2">
            <H2>About me</H2>
            <H1 className="mb-4">
              An experienced .NET Developer based in Brussels, Belgium 📍
            </H1>
            <p className="mb-4 font-medium text-slate-500 dark:text-slate-300">
              I'm an experienced .NET Developer with over 10+ years of expertise
              in C#, .NET Core, Angular, and React. I excel in both Back-End and
              Front-End development, delivering outstanding software solutions.
              My curiosity extends beyond coding to encompass UI design,
              leadership, marketing strategies, lean thinking, and economy. By
              understanding these areas, I craft well-rounded solutions aligned
              with business goals.
            </p>
            <p className="mb-4 font-medium text-slate-500 dark:text-slate-300">
              With a track record of successfully delivering numerous projects,
              I confidently navigate complex requirements while staying
              up-to-date with the latest technologies and best practices. I
              bring value to development teams, conquer challenges, and
              consistently exceed expectations. If you're looking for a talented
              .NET Developer who blends technical expertise with a thirst for
              innovation, I'm here to make a positive impact on your team!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
