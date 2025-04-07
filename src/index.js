import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./page/home";
import './asset/styles/global.scss'
import Banner from "./feature/banner";
import Footer from "./components/footer";
import Header from "./components/header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header/>
        <Home/>
        <Footer/>
    </React.StrictMode>
);

