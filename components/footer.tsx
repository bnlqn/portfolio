import Link from 'next/link';
import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Footer() {
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
    <section className="bg-slate-950 px-4 py-12 dark:bg-slate-800">
      <div className="mx-auto w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-screen-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-zinc-100 sm:text-sm lg:text-xl">
            Copyright &copy; 2023. All rights are reserved
          </h3>
          <div className="flex gap-8">
            {socials.map((item) => (
              <Link target="_blank" href={item.href}>
                <item.icon className="h-4 w-4 text-zinc-100 transition hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400 lg:h-6 lg:w-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
