import React from "react";
import Banner from "../../feature/banner";
import Category from "../../feature/category";
import AllPosts from "../../feature/allPosts";
import JoinOurTeam from "../../feature/joinOurTeam";

export default function Blog() {
    return (
        <div className={'blog'}>
            <Banner/>
            <AllPosts/>
            <Category/>
            <JoinOurTeam/>
        </div>
    )
}