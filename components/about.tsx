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
          As a kid, I was that wide-eyed youngster who couldn't get enough of
          tinkering with computers. At the tender age of 7, I dipped my toes
          into the{' '}
          <Link
            href="/ms-vb.png"
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="world of coding (opens in a new tab)"
          >
            world of coding
          </Link>
          , and from that moment on, I was hooked. By 12, I'd already crafted my
          first website, setting the stage for a lifelong journey in digital
          creation. Fast forward to today, and those childhood experiences have
          shaped who I am and what I do.
        </p>
        <p className="mb-4 text-pretty">
          Today, I'm a seasoned consultant, specializing mostly in the{' '}
          <Link
            href="https://swift.com"
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="banking (opens in a new tab)"
          >
            banking
          </Link>{' '}
          and{' '}
          <Link
            href="https://engie.be"
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="energy (opens in a new tab)"
          >
            energy
          </Link>{' '}
          sectors. It's been quite the ride since graduating in 2011,
          collaborating with a diverse range of clients, from{' '}
          <Link
            href="https://group.bnpparibas"
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="industry giants (opens in a new tab)"
          >
            industry giants
          </Link>{' '}
          to{' '}
          <Link
            href="https://ringring.be"
            className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="smaller enterprises (opens in a new tab)"
          >
            smaller enterprises
          </Link>
          . What really drives me is the sweet spot where design and engineering
          intersect. I thrive on building software that not only looks sleek but
          also functions flawlessly under the hood, delivering top-notch
          experiences to users.
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
