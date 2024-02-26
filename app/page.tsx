import About from '@/components/about';
import CustomCursor from '@/components/custom-cursor';
import Experience from '@/components/experience';
import Nav from '@/components/nav';

export default function Home() {
  return (
    <>
      <div className="relative">
        <CustomCursor />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <a
            href="#content"
            className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
          >
            Skip to Content
          </a>
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Nav />
            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
              <About />
              <Experience />
              {/* <Contact /> */}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
