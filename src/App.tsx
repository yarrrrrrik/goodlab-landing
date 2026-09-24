import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Stack from './components/Stack'
import Why from './components/Why'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        К основному содержанию
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <Stack />
        <Why />
        <About />
      </main>
      <Footer />
    </>
  )
}
