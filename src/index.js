import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from "./page/home";
import './asset/styles/global.scss'
import Footer from "./components/footer";
import Header from "./components/header";
import Blog from "./page/blog";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        {/*<Home/>*/}
        <Blog/>
        <Footer/>
    </React.StrictMode>
);

