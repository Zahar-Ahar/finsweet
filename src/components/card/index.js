import './style.scss'
import Startup from '../../asset/image/startup.png'

export default function Card({ post }) {
    return (
        <div className={'card'}>
            <img className={'previewImage'} src={Startup} alt=""/>
            <div className={'info'}>
                <div className={'info__category'}>
                    {post.category}
                </div>
                <div className="info__bottom">
                    <div className={'info__name'}>
                        {post.title}
                    </div>
                    <div className={'info__description'}>
                        {post.description}
                    </div>
                </div>
            </div>
        </div>

    )
}