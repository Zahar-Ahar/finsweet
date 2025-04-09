import Banner from "../../feature/banner";
import Category from "../../feature/category";
import Posts from "../../feature/posts";
import Testimonials from "../../feature/testimonials";

export default function Home() {
    return (
        <div className={'home'}>
            <Banner/>
            <Posts/>
            <Category/>
            <Testimonials/>
        </div>
    )
}