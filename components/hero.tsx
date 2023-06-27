import Image from 'next/image';
import Link from 'next/link';
import H1 from './ui/h1';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import csharp from '../public/csharp.svg';
import angular from '../public/angular.svg';
import react from '../public/react.svg';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

export default function Hero() {
  const technologies = [
    {
      name: 'C#',
      image: csharp,
    },
    {
      name: 'Angular',
      image: angular,
    },
    {
      name: 'React',
      image: react,
    },
  ];

  const socials = [
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/blurquin/',
      icon: BsLinkedin,
    },
    {
      name: 'Github',
      href: 'https://github.com/bnlqn',
      icon: BsGithub,
    },
  ];

  return (
    <section
      id="home"
      className="mt-12 flex min-h-screen w-full flex-col bg-zinc-100 pt-20 dark:bg-slate-900"
    >
      <div className="mx-auto my-0 w-full max-w-sm px-4 sm:max-w-lg md:max-w-2xl lg:max-w-screen-lg">
        <div className="relative flex flex-col justify-center gap-10">
          <div className="relative flex flex-col-reverse items-center gap-28 lg:flex-row">
            <div className="relative flex flex-col">
              <H1 size={'lg'} className="my-8 text-slate-900">
                Full-Stack .NET Developer
                <span className="ml-4">👋🏼</span>
              </H1>
              <p className="text-base font-medium text-slate-500 dark:text-slate-200">
                Hi, I'm Benjamin. A passionate Full-Stack .NET Developer based
                in Warsaw, Poland. 📍
              </p>
              <span className="my-10 flex cursor-pointer gap-5">
                {socials.map((item) => (
                  <Link target="_blank" href={item.href} title={item.name}>
                    <item.icon className="h-8 w-8 transition hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400" />
                  </Link>
                ))}
              </span>
            </div>
            <div className="relative h-96 w-96 animate-[morph_8s_ease-in-out_infinite] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-4 border-slate-900 bg-[url('/profile.webp')] bg-cover bg-center bg-no-repeat dark:border-indigo-900"></div>
          </div>
          <div className="mb-16 flex flex-col items-center lg:flex-row">
            <p className="mb-12 border-b border-slate-800 pb-4 font-semibold dark:border-slate-300 lg:mb-0 lg:mr-28 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              Tech Stack
            </p>
            <div id="logos" className="">
              <TooltipProvider delayDuration={100}>
                <ul className="flex list-none flex-wrap gap-9">
                  {technologies.map((item) => (
                    <li className="flex cursor-pointer items-center rounded-full bg-white p-4 shadow-md dark:bg-slate-700">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Image
                            src={item.image}
                            className="h-10 w-10"
                            alt={item.name}
                          />
                        </TooltipTrigger>
                        <TooltipContent className="mb-4">
                          <p>{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
