import H1 from './ui/h1';
import H2 from './ui/h2';
import html from '../public/html.svg';
import react from '../public/react.svg';
import angular from '../public/angular.svg';
import node from '../public/node.svg';
import chsarp from '../public/csharp.svg';
import tailwind from '../public/tailwind.svg';
import css from '../public/css3.svg';
import javascript from '../public/javascript.svg';
import typescript from '../public/typescript.svg';
import nextjs from '../public/next.svg';
import dotnet from '../public/dotnet.svg';
import git from '../public/git.svg';
import sass from '../public/sass.svg';
import azure from '../public/azure.svg';
import xamarin from '../public/xamarin.svg';
import Image from 'next/image';

export default function Skills() {
  const skills = [
    {
      name: 'C#',
      icon: chsarp,
    },
    {
      name: '.NET',
      icon: dotnet,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
    },
    {
      name: 'JavaScript',
      icon: javascript,
    },
    {
      name: 'TypeScript',
      icon: typescript,
    },
    {
      name: 'Next.js',
      icon: nextjs,
    },
    {
      name: 'Git',
      icon: git,
    },
    {
      name: 'HTML 5',
      icon: html,
    },
    {
      name: 'Angular',
      icon: angular,
    },
    {
      name: 'CSS',
      icon: css,
    },
    {
      name: 'Azure',
      icon: azure,
    },
    {
      name: 'Sass',
      icon: sass,
    },
    {
      name: 'React',
      icon: react,
    },
    {
      name: 'Node.js',
      icon: node,
    },
    {
      name: 'Xamarin',
      icon: xamarin,
    },
  ];

  return (
    <section className="bg-zinc-100 px-4 py-20 dark:bg-slate-950 " id="about">
      <div className="mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-lg">
        <H2>Skills & Experiences</H2>
        <H1></H1>
        <div className="mt-4 flex flex-row">
          <div className="flex flex-1 flex-wrap items-start justify-start gap-8">
            {skills
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((item) => (
                <div className="flex w-28 flex-col items-center justify-center">
                  <div className="rounded-full bg-white p-4 shadow-md dark:bg-slate-700">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      className="h-10 w-10"
                    />
                  </div>
                  <div className="mt-2 text-sm">{item.name}</div>
                </div>
              ))}
          </div>
          <div className="flex flex-1 flex-col items-start justify-start"></div>
        </div>
      </div>
    </section>
  );
}
