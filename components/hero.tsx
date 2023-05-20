import Image from 'next/image';
import Link from 'next/link';
import H1 from './ui/h1';

export default function Hero() {
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
              <p className="text-base font-medium text-slate-500 dark:text-slate-400">
                Hi, I'm Benjamin Lurquin. A passionate Full-Stack .NET Developer
                based in Brussels, Belgium. 📍
              </p>
              <span className="my-10 flex cursor-pointer gap-5">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/blurquin/"
                >
                  <Image
                    src="linkedin.svg"
                    alt="LinkedIn"
                    height="30"
                    width="30"
                    className="dark:bg-slate-300"
                  />
                </Link>
              </span>
            </div>
            <div className="relative h-96 w-96 animate-[morph_8s_ease-in-out_infinite] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-4 border-slate-900 bg-[url('/bnlqn.jpeg')] bg-cover bg-center bg-no-repeat"></div>
          </div>
          <div id="skills" className="flex items-center text-slate-800">
            <p className="mr-28 border-r border-slate-800 pr-8 font-semibold">
              Tech Stack
            </p>
            <div id="logos" className="">
              <ul className="flex list-none flex-wrap gap-9">
                <li className="flex cursor-pointer items-center rounded-full bg-white p-4 shadow-md">
                  <Image src="html.svg" alt="HTML 5" width="34" height="34" />
                </li>
                <li className="flex cursor-pointer items-center rounded-full bg-white p-4 shadow-md">
                  <Image src="csharp.svg" alt="C#" width="34" height="34" />
                </li>
                <li className="flex cursor-pointer items-center rounded-full bg-white p-4 shadow-md">
                  <Image
                    src="angular.svg"
                    alt="Angular"
                    width="34"
                    height="34"
                  />
                </li>
                <li className="flex cursor-pointer items-center rounded-full bg-white p-4 shadow-md">
                  <Image src="react.svg" alt="React" width="34" height="34" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
