import Banner from "../../feature/banner";
import Category from "../../feature/category";
import Posts from "../../feature/posts";
import Testimonials from "../../feature/testimonials";
import JoinOurTeam from "../../feature/joinOurTeam";

export default function Home() {
    return (
        <div className={'home'}>
            <Banner/>
            <Posts/>
            <Category/>
            <Testimonials/>
            <JoinOurTeam/>
        </div>
    )
}