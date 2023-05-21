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

  const experiences = [
    {
      year: '2021',
      position: 'Senior .NET Engineer',
      company: 'Swift',
      description:
        "Swift is a global member-owned cooperative and the world's leading provider of secure financial messaging services.",
    },
    {
      year: '2020',
      position: 'Senior .Net software Engineer/Architect',
      company: 'RingRing',
      description:
        'The RingRing Company is the Belgian leader in CPaaS (Communication Platform as a Service), the multi-channel cloud communication platform industry.',
    },
    {
      year: '2019',
      position: 'Software Engineer',
      company: 'Audatex (PL)',
      description:
        'Audatex is a major player in the automotive industry, offering a software-as-a-service (SaaS) platform aimed at the market of resellers of used or damaged vehicles.',
    },
    {
      year: '2017',
      position: 'Software Developer',
      company: 'Engie',
      description:
        '“New Innovative Solutions” team member to support business of Global Energy Market department at Engie. Building several complex business APIs, Backend, Web & Mobile applications for real time access to trading market.',
    },
    {
      year: '2016',
      position: '.NET Architect',
      company: 'Emakina',
      description:
        'Creator and owner of the digital architecture as well as the technical analyses combined with workload estimations and project approaches.',
    },
    {
      year: '2015',
      position: 'Senior .NET Developer',
      company: 'ORES',
      description:
        'Geographic information system (GIS) designed to capture, store, manipulate, analyze, manage, and present all types of spatial or geographical data in order to manage the electricity and gas network in Belgium.',
    },
    {
      year: '2014',
      position: 'ASP.NET Developer',
      company: 'BNP Paribas Investment Partners',
      description:
        'In the banking sector, design and development of reporting application.',
    },
    {
      year: '2012',
      position: 'Software Solution Analyst',
      company: 'Cogen',
      description:
        'Analysis and creation of new business applications in a translation industry, as well as improving existing business tools and a second line helpdesk assistance for process issues.',
    },
    {
      year: '2011',
      position: 'Frontend developer',
      company: 'CogniTIC',
      description:
        'Development of software solutions (mostly web applications) as well as many missions as trainer in a training center (Technofutur TIC) for Web and Microsoft technologies',
    },
  ];

  return (
    <section className="bg-zinc-100 px-4 py-20 dark:bg-slate-950" id="skills">
      <div className="mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-lg">
        <H2>Skills & Experiences</H2>
        <H1 className="mb-16">
          Showcasing achievements and technical expertise 💪
        </H1>
        <div className="mt-4 flex flex-row gap-24">
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
          <div className="flex flex-1 flex-col items-start justify-start">
            {experiences.map((item) => (
              <div className="my-4 flex flex-row items-start justify-start">
                <div className="mr-12">
                  <div className="font-bold text-indigo-500">{item.year}</div>
                </div>
                <div className="flex-1">
                  <div className="mb-4 flex flex-col items-start justify-start">
                    <div className="font-medium">{item.position}</div>
                    <div className="mt-2 text-sm font-normal text-slate-500">
                      {item.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
