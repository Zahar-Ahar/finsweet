import Header from "../../components/header";
import Banner from "../../feature/banner";
import Category from "../../feature/category";
import FeaturedPost from "../../feature/posts";
import {Component} from "react";
import Posts from "../../feature/posts";

class Post extends Component {
    render() {
        return null;
    }
}

export default function Home() {
    return (
        <div className={'home'}>
            <Banner/>
            <Posts/>
            <Category/>
        </div>
    )
}