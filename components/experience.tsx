import Link from 'next/link';

export default function Experience() {
  const experiences = [
    {
      start: 'Jan 2021',
      end: 'Dec 2023',
      position: 'Senior .NET Engineer',
      company: 'Swift',
      href: 'https://www.swift.com',
      description:
        "Swift is a global member-owned cooperative and the world's leading provider of secure financial messaging services.",
      technologies: [
        'C#',
        '.NET Core',
        'Xamarin',
        'Azure',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Blazor',
      ],
    },
    {
      start: 'Jul 2020',
      end: 'Dec 2020',
      position: '.NET Architect',
      company: 'RingRing',
      href: 'https://www.ringring.be',
      description:
        'The RingRing Company is the Belgian leader in CPaaS (Communication Platform as a Service), the multi-channel cloud communication platform industry.',
      technologies: [
        'C#',
        '.NET Core',
        'Microservice Architecture',
        'Kafka',
        'Redis',
      ],
    },
    {
      start: 'Jan 2019',
      end: 'Jun 2020',
      position: 'Software Engineer',
      company: 'Audatex',
      href: 'https://www.audatex.com',
      description:
        'Audatex is a major player in the automotive industry, offering a software-as-a-service (SaaS) platform aimed at the market of resellers of used or damaged vehicles.',
      technologies: [
        'C#',
        '.NET Core',
        'Microservice Architecture',
        'Azure',
        'RabbitMQ',
        'TypeScript',
        'Angular',
      ],
    },
    {
      start: '2017',
      position: 'Software Developer',
      company: 'Engie',
      href: 'https://www.engie.be',
      description:
        '“New Innovative Solutions” team member to support business of Global Energy Market department at Engie. Building several complex business APIs, Backend, Web & Mobile applications for real time access to trading market.',
      technologies: [
        'C#',
        '.NET Core',
        'Azure',
        'JavaScript',
        'TypeScript',
        'Angular',
        'SignalR',
      ],
    },
    {
      start: '2016',
      position: '.NET Architect',
      company: 'Emakina',
      href: 'https://www.emakina.com',
      description:
        'Creator and owner of the digital architecture as well as the technical analyses combined with workload estimations and project approaches.',
    },
    {
      start: '2015',
      position: 'Senior .NET Developer',
      company: 'ORES',
      href: 'https://www.ores.be',
      description:
        'Geographic information system (GIS) designed to capture, store, manipulate, analyze, manage, and present all types of spatial or geographical data in order to manage the electricity and gas network in Belgium.',
    },
    {
      start: '2014',
      position: 'ASP.NET Developer',
      company: 'BNP Paribas',
      href: 'https://group.bnpparibas',
      description:
        'In the banking sector, design and development of reporting application.',
    },
    {
      start: '2012',
      position: 'Software Solution Analyst',
      company: 'Cogen',
      href: 'https://www.cogen.be',
      description:
        'Analysis and creation of new business applications in a translation industry, as well as improving existing business tools and a second line helpdesk assistance for process issues.',
    },
    {
      start: '2011',
      position: 'Frontend developer',
      company: 'CogniTIC',
      href: 'https://www.cognitic.be',
      description:
        'Development of software solutions (mostly web applications) as well as many missions as trainer in a training center (Technofutur TIC) for Web and Microsoft technologies',
    },
  ];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((item) => (
            <li className="mb-12" key={item.company}>
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="July to December 2017"
                >
                  {item.start} — {item.end}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <Link
                        href={item.href}
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200  hover:text-teal-300 focus-visible:text-teal-300"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <span
                          className="- absolute -inset-x-4
                        inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
                        ></span>
                        <span>{item.position}</span>
                        <span className="mx-2">·</span>
                        <span className="inline-block">
                          {item.company}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {item.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {item.technologies?.map((technology) => (
                      <li className="mr-1.5 mt-2" key={technology}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {technology}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <Link
            className="group/link inline-flex items-baseline text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full{' '}
              <span className="inline-block">
                Résumé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
