import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Nav from './Nav'
import About from './About'
import Services from './Services'
import Work from './Work'
import Contact from './Contact'

const Portfolio = () => {
    return (
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Header />
            <Banner />
            <Nav />
            <About />
            <Services />
            <Work />
            <Contact />
        </div>
    )
}

export default Portfolio