import React from 'react';
import H2 from './ui/h2';
import H1 from './ui/h1';
import { BsEnvelopeAt, BsPhone } from 'react-icons/bs';

export default function Contact() {
  return (
    <section className="bg-white px-4 py-20 dark:bg-slate-950 " id="contact">
      <div className="mx-auto w-full sm:max-w-xl md:max-w-full lg:max-w-screen-lg">
        <H2>Contact</H2>
        <H1>Don't be shy! Hit me up! 👇</H1>
        <div className="mt-16 flex flex-wrap gap-32">
          <div className="flex items-center gap-6">
            <span className="rounded-full border bg-white p-4 shadow-md dark:bg-slate-700">
              <BsEnvelopeAt className="h-10 w-10 text-indigo-500" />
            </span>
            <div className="flex flex-col">
              <div className="font-bold">Mail</div>
              <div className="text-slate-500">hello@bnlqn.com</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="rounded-full border bg-white p-4 shadow-md dark:bg-slate-700">
              <BsPhone className="h-10 w-10 text-indigo-500" />
            </span>
            <div className="flex flex-col">
              <div className="font-bold">Phone</div>
              <div className="text-slate-500">+32 473 22 22 94</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
