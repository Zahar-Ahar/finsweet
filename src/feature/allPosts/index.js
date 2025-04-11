import './style.scss'
import Card from "../../components/card";
import Posts from "../../page/blog/posts.json";

export default function AllPosts() {
    return (
        <div className={'container'}>
            <div className={'allPosts'}>
                <div className={'allPosts__headline'}>
                    All Posts
                </div>
                <div className={'allPosts__posts'}>
                    {Posts.map((post) => {
                        return (
                            <Card post={post}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}