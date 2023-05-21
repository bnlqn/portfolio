import React from 'react';
import H2 from './ui/h2';
import H1 from './ui/h1';
import Image from 'next/image';
import aboutPic from '../public/about.webp';

export default function About() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-slate-950 " id="about">
      <div className="mx-auto w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-screen-lg">
        <div className="flex flex-col justify-between gap-20 lg:flex-row">
          <div className="lg:w-1/2">
            <Image src={aboutPic} className="rounded-2xl" alt="About image" />
          </div>
          <div className="lg:w-1/2">
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
