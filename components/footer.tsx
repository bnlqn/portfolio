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
    <section className="bg-slate-950 px-4 py-12">
      <div className="mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-zinc-100">
            Copyright &copy; 2023. All rights are reserved
          </h3>
          <div className="flex gap-8">
            {socials.map((item) => (
              <Link target="_blank" href={item.href}>
                <item.icon className="h-6 w-6 text-zinc-100 transition hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
