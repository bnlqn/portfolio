import Image from 'next/image';
import Link from 'next/link';
import H1 from './ui/h1';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import csharp from '../public/csharp.svg';
import angular from '../public/angular.svg';
import react from '../public/react.svg';

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
      name: 'Angular',
      href: 'https://github.com/bnlqn',
      icon: BsGithub,
    },
  ];

  return (
    <section
      id="home"
      className="mt-12 flex h-screen w-full flex-col bg-zinc-100 pt-20 dark:bg-slate-900"
    >
      <div
        className="mx-auto my-0 px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-lg"
        id="container"
      >
        <div
          className="relative flex flex-col justify-center gap-10"
          id="content"
        >
          <div className="relative flex items-center gap-28">
            <div className="relative flex flex-col">
              <H1 size={'lg'} className="my-8 text-slate-900">
                Full-Stack .NET Developer
                <span className="ml-4">👋🏼</span>
              </H1>
              <p className="text-base font-medium text-slate-500 dark:text-slate-200">
                Hi, I'm Benjamin. A passionate Full-Stack .NET Developer based
                in Brussels, Belgium. 📍
              </p>
              <span className="my-10 flex cursor-pointer gap-5">
                {socials.map((item) => (
                  <Link target="_blank" href={item.href}>
                    <item.icon className="h-8 w-8 transition hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400" />
                  </Link>
                ))}
              </span>
            </div>
            <div className="relative h-96 w-96 animate-[morph_8s_ease-in-out_infinite] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-4 border-slate-900 bg-[url('/bnlqn.jpeg')] bg-cover bg-center bg-no-repeat dark:border-indigo-900"></div>
          </div>
          <div id="skills" className="flex items-center ">
            <p className="mr-28 border-r border-slate-800 pr-8 font-semibold dark:border-slate-300">
              Tech Stack
            </p>
            <div id="logos" className="">
              <ul className="flex list-none flex-wrap gap-9">
                {technologies.map((item) => (
                  <li className="flex cursor-pointer items-center rounded-full bg-white p-4 shadow-md dark:bg-slate-700">
                    <Image
                      src={item.image}
                      className="h-10 w-10"
                      alt={item.name}
                      title={item.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
