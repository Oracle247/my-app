import React from 'react'
import About from './component/about/About'
import Contact from './component/contact/Contact'
import Experience from './component/experience/Experience'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Nav from './component/nav/Nav'
import Portfolio from './component/portfolio/Portfolio'
import Services from './component/services/Services'
import Testimonials from './component/testimonials/Testimonials'
const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> 
    </>
  )
}

export default app