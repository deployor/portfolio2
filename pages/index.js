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
        <title>Deployor | Personal Portfolio & Software Engineering</title>
        <meta name="description" content="I'm Deployor, a passionate software engineer crafting digital experiences. Explore my personal projects and technical journey." />
        <meta name="keywords" content="deployor, personal portfolio, software engineer, developer portfolio, tech enthusiast" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Deployor | Personal Portfolio" />
        <meta property="og:description" content="Welcome to my personal space where I showcase my software engineering journey and projects." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://deployor.dev" />
        
        <link rel="canonical" href="https://deployor.dev" />
        
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Deployor",
              "url": "https://deployor.dev",
              "description": "Software engineer and tech enthusiast sharing my personal journey and projects",
              "sameAs": [
                "https://github.com/deployor"
              ],
              "jobTitle": "Software Engineer",
              "alumniOf": {
                "@type": "Organization",
                "name": "Gymnasium Maria-Veen"
              }
            })
          }}
        />
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
