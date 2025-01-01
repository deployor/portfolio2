import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Testimonials from '../components/Testimonials';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Awards from '../components/Awards';

export default function Home() {
  return (
    <>
      <Head>
        <title>Deployor</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Testimonials />
        <Certifications />
          <Awards/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
