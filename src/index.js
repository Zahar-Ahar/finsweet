import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./page/home";
import './asset/styles/global.scss'
import Footer from "./components/footer";
import Header from "./components/header";
import Blog from "./page/blog";
import {BrowserRouter, Route, Routes} from "react-router";
import AboutUs from "./page/aboutUs";
import ContactUs from "./page/contactUs";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/blog'} element={<Blog/>}/>
                <Route path={'/about'} element={<AboutUs/>}/>
                <Route path={'/contact'} element={<ContactUs/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
);

