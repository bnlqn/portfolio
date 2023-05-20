import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-12 py-6 text-2xl shadow shadow-slate-200">
      <h3 className="cursor-pointer font-bold text-slate-900">
        Benjamin Lurquin
      </h3>
      <ul className="flex gap-8 text-base font-semibold">
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
