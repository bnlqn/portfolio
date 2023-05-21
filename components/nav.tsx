import Link from 'next/link';
import React from 'react';

export default function Nav() {
  const links = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Skills & Experiences',
      href: '#skills',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-12 py-6 text-2xl shadow shadow-slate-200 dark:bg-slate-950 dark:shadow-slate-800">
      <h3 className="cursor-pointer font-bold text-slate-900 dark:text-slate-300">
        Benjamin Lurquin
      </h3>
      <ul className="hidden gap-8 text-base font-semibold md:flex">
        {links.map((item) => (
          <li>
            <Link
              href={item.href}
              className="transition duration-200 hover:text-indigo-500 dark:text-slate-300 dark:hover:text-indigo-400"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
