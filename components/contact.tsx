import React from 'react';
import H2 from './ui/h2';
import H1 from './ui/h1';
import { BsEnvelopeAt, BsPhone } from 'react-icons/bs';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-slate-950 " id="contact">
      <div className="mx-auto w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-screen-lg">
        <H2>Contact</H2>
        <H1>Don't be shy! Hit me up! 👇</H1>
        <div className="mt-16 flex flex-wrap gap-32">
          <div className="flex items-center gap-6">
            <span className="rounded-full border bg-white p-4 shadow-md dark:border-0 dark:bg-slate-700">
              <BsEnvelopeAt className="h-10 w-10 text-indigo-500" />
            </span>
            <div className="flex flex-col">
              <div className="font-bold">Mail</div>
              <div>
                <Link
                  className="text-slate-500 transition hover:text-indigo-500 dark:text-slate-400"
                  href="mailto:hello@bnlqn.com"
                >
                  hello@bnlqn.com
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="rounded-full border bg-white p-4 shadow-md dark:border-0 dark:bg-slate-700">
              <BsPhone className="h-10 w-10 text-indigo-500" />
            </span>
            <div className="flex flex-col">
              <div className="font-bold">Phone</div>
              <div>
                <Link
                  className="text-slate-500 transition hover:text-indigo-500 dark:text-slate-400"
                  href="tel:+32473222294"
                >
                  +32 473 22 22 94
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
