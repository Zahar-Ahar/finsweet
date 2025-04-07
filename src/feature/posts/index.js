import './style.scss'
import Post from "../../components/post";

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
                    <div className={'headline'}>
                        All Post
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