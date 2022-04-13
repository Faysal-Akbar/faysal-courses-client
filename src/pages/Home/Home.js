import React from 'react';
import Courses from '../Courses/Courses';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;