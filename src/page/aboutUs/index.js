import React from "react"
import Category from "../../feature/category";
import JoinOurTeam from "../../feature/joinOurTeam";
import AboutUsHeader from "../../feature/aboutUsHeader";
import Overview from "../../feature/overview";
import ListOfAuthors from "../../feature/listOfAuthors";

export default function AboutUs() {
    return (
        <div className={'aboutUs'}>
            <AboutUsHeader/>
            <Overview/>
            <ListOfAuthors/>
            <Category/>
            <JoinOurTeam/>
        </div>
    )
}