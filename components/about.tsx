import Link from 'next/link';

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-pretty">
          I specialize in building user interfaces that merge elegant design
          with technical excellence. My work focuses on creating accessible
          experiences where no detail is overlooked – from pixel-perfect layouts
          to optimized performance. What drives me is the sweet spot between
          visual design and engineering, where beautiful interfaces meet
          rock-solid implementation.
        </p>
        <p className="mb-4 text-pretty">
          Today, I work at{' '}
          <Link
            href="https://elia.be"
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="banking (opens in a new tab)"
          >
            Elia
          </Link>
          , where we manage Belgium's electricity grid to keep the lights on for
          millions of people. My job is to help the company make better use of
          its data. I set up systems in the cloud that make important
          information easy to find and use. By writing clear guidelines and
          building reliable systems, I help my colleagues use data to improve
          how we deliver electricity to homes and businesses.
        </p>
        <p className="text-pretty">
          When I'm not knee-deep in code or immersed in client projects, you'll
          likely find me pursuing my passions outside of work. Music has always
          been a huge part of my life, and I love nothing more than strumming
          away on my guitar. I'm also a bit of a knowledge junkie, always eager
          to dive into topics like leadership, marketing strategies, and UX
          design.
        </p>
      </div>
    </section>
  );
}
