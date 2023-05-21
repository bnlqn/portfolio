import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Nav from '@/components/nav';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
