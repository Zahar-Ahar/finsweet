import './style.scss'
import Post from "../../components/post";
import {NavLink} from "react-router";

export default function Posts() {
    return (
        <div className={'container'}>
            <div className={'posts'}>
                <div className={'featuredPost'}>
                    <div className={'headline'}>
                        Featured Post
                    </div>
                    <Post isBig={true}/>
                </div>
                <div className={'allPosts'}>
                    <div className={'allPosts__info'}>
                        <div className={'headline'}>
                            All Post
                        </div>
                        <NavLink to={'/blog'} className={'link'} end>
                            View All
                        </NavLink>
                    </div>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}