import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Review from '../Review/Review';
import Footer from '../Footer/Footer';
import './Home.css';
import Navmenu from '../Navbar/Navmenu';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navmenu></Navmenu>
            <Main></Main>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;