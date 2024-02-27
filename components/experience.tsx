import Link from 'next/link';

export default function Experience() {
  const experiences = [
    {
      start: '2024',
      end: 'Present',
      position: 'Senior .NET Engineer',
      company: 'Elia',
      href: 'https://www.elia.be',
      description:
        'Transform data into a valuable product. My focus lies in treating data as a strategic asset, ensuring its accessibility and usability across our organization. This involves leveraging cloud infrastructure and redundancy mechanisms to guarantee high availability of datasets, establishing clear contracts and SLAs to provide clarity on data usage, and offering comprehensive guidance and documentation throughout the data lifecycle. Through these efforts, I empower stakeholders to harness the full potential of our datasets, enabling informed decision-making and driving innovation within our organization.',
      technologies: ['C#', '.NET Core', 'Azure', 'Redis', 'RabbitMQ'],
    },
    {
      start: '2021',
      end: 'Dec 2023',
      position: 'Senior .NET Engineer',
      company: 'Swift',
      href: 'https://www.swift.com',
      description:
        "Optimized productivity and efficiency by developing corporate platforms, CI/CD solutions, and workplace tools. I led web and mobile app development, prioritizing high performance and security for internal systems. My contributions enhanced Swift's operational effectiveness and supported its strategic goals.",
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
      start: 'Jul',
      end: 'Dec 2020',
      position: '.NET Architect',
      company: 'RingRing',
      href: 'https://www.ringring.be',
      description:
        "Designed APIs with a micro-services architecture, implementing cutting-edge clean architecture for new projects, and seamlessly integrating with third-party infrastructure and systems. Additionally, I provided mentorship and guidance to junior developers, fostering their growth and ensuring the continued success of our team's projects.",
      technologies: [
        'C#',
        '.NET Core',
        'Microservice Architecture',
        'Kafka',
        'Redis',
      ],
    },
    {
      start: '2019',
      end: 'Jun 2020',
      position: 'Software Engineer',
      company: 'Audatex',
      href: 'https://www.audatex.com',
      description:
        'At Audatex, a key player in the automotive industry, I focused on enhancing our software-as-a-service (SaaS) platform tailored for resellers of used or damaged vehicles. My responsibilities included overhauling legacy code for existing solutions, developing new solutions with a micro-service architecture and Domain-Driven Design (DDD) principles, seamlessly integrating with existing systems, and conducting daily code reviews to ensure the highest standards of quality and performance.',
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
      start: 'Mar 2017',
      end: '2018',
      position: 'Software Developer',
      company: 'Engie',
      href: 'https://www.engie.be',
      description:
        'Supported the Global Energy Market department by being focused on developing cutting-edge solutions to drive business growth. My role involved constructing intricate business APIs, backend systems, as well as web and mobile applications. These solutions were designed to provide real-time access to trading markets, enabling swift and informed decision-making within the dynamic energy sector.',
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
      start: 'Apr 2016',
      end: 'Mar 2017',
      position: '.NET Architect',
      company: 'Emakina',
      href: 'https://www.emakina.com',
      description:
        'As the creator and custodian of the digital architecture, I conducted technical analyses, estimated workloads, and devised project approaches. Additionally, I mentored other developers, established best practices, and ensured adherence to quality standards throughout project lifecycles. While overseeing project execution, I remained actively involved in development by writing code, ensuring alignment with established strategies and objectives.',
      technologies: [
        'C#',
        'ASP .NET',
        'Amazon Cloud Services',
        'MS Bot Framework',
      ],
    },
    {
      start: '2015',
      end: 'Mar 2016',
      position: 'Senior .NET Developer',
      company: 'ORES',
      href: 'https://www.ores.be',
      description:
        "Developped and shipped CapGis, the geographical information system (GIS) pivotal to managing Belgium's electricity and gas network, I undertook multifaceted responsibilities to enhance its functionality and efficiency. This included implementing new features to bolster its capabilities, refactoring existing modules to adhere to SOLID principles and Domain Driven Design methodology, and ensuring robustness through comprehensive unit and integration testing. Additionally, I focused on optimizing the user interface to improve usability and streamline operations. Through these endeavors, I contributed to the continuous improvement and effectiveness of CapGis in facilitating the management of critical infrastructure for energy distribution in Belgium.",
      technologies: ['C#', 'ASP .NET', 'JavaScript'],
    },
    {
      start: '2014',
      position: 'ASP.NET Developer',
      company: 'BNP Paribas',
      href: 'https://group.bnpparibas',
      description:
        "Led the design and development of a robust reporting application tailored for Business Intelligence needs, resulting in significant achievements such as providing Test Managers with a comprehensive view across all projects and actionable insights. Leveraging ASP.Net MVC 5 and HP Quality Center, I developed BI reports that collected data from multiple databases, offering a transversal view for Test Managers. Additionally, I established a Center of Excellence for BNP's applications, implementing a portal for code analysis to mitigate software risks, enhance productivity, and elevate code quality standards across the organization.",
      technologies: ['C#', 'ASP .NET', 'CAST', 'HP Quality Center'],
    },
    {
      start: 'Nov 2012',
      end: '2013',
      position: 'Software Solution Analyst',
      company: 'Cogen',
      href: 'https://www.cogen.be',
      description:
        'In my role, I undertook the analysis and development of new business applications while enhancing existing tools and providing second-line helpdesk support for process issues. Notable accomplishments include the end-to-end involvement in the main project management software (ERP) at Cogen, encompassing technical design, UX design, architecture, development, documentation, and testing using WPF technology. I also led technical and functional analysis, architecture, and development for a purchase management software, further demonstrating my expertise in WPF. Additionally, I spearheaded initiatives such as the development of a new website, maintenance, and improvement of customer portals using Web Services, ASP, and Silverlight, and enhanced linguistic tools developed for Cogen using WinForms.',
      technologies: ['C#', 'WPF', 'WinForms', 'WordPress'],
    },
    {
      start: '2011',
      end: 'Oct 2012',
      position: 'Frontend developer',
      company: 'CogniTIC',
      href: 'https://www.cognitic.be',
      description:
        'Built, styled, and shipped high-quality websites, while concurrently serving as a trainer at Technofutur TIC for Web and Microsoft technologies. Noteworthy contributions include the analysis, development, and enhancement of numerous websites, with a particular emphasis on Search Engine Optimization (SEO) strategies to maximize online visibility and engagement. ',
      technologies: ['C#', 'ASP .NET', 'PHP', 'WordPress'],
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
              <div className="group relative grid pb-1 transition-all sm:grid-cols-10 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-3"
                  aria-label="July to December 2017"
                >
                  {item.start} {item.end ? ' — ' + item.end : ''}
                </header>
                <div className="z-10 sm:col-span-7">
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
                  <p className="mt-2 text-pretty text-sm leading-normal">
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
