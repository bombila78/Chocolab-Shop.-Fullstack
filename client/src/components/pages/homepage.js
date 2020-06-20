import React from 'react'
import Introdution from '../introdution/introdution';
import Info from '../info/info';
import Header from '../header/header';
import Footer from '../footer/footer';

const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <Introdution />
            <Info />
            <Footer />
        </React.Fragment>
    )
}

export default HomePage;