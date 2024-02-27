import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Nav() {
  const links = [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Experience',
      href: '#experience',
    },
    {
      name: 'Projects',
      href: '#projects',
    },
  ];

  const socials = [
    {
      name: 'Github',
      href: 'https://github.com/bnlqn',
      icon: BsGithub,
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/blurquin/',
      icon: BsLinkedin,
    },
  ];
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Benjamin Lurquin</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Senior .NET Engineer at Elia
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {links.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="active group flex items-center py-3"
                >
                  <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        {socials.map((item) => (
          <li className="mr-5 shrink-0 text-xs" key={item.name}>
            <Link
              className="block hover:text-slate-200"
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub (opens in a new tab)"
              title={item.name}
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" />
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
