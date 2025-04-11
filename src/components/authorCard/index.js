import './style.scss'
import ProfileIcon from '../../asset/image/Floyd Miles.png'
import SocialNetworks from "../socialNetworks";

export default function AuthorCard({card}) {
    return (
        <div className={'card'}>
            <img className={'profileIcon'} src={ProfileIcon} alt=""/>
            <div className={'name'}>
                {card.name}
            </div>
            <div className={'major'}>
                {card.position} {card.company}
            </div>
            <SocialNetworks socials={card.socials}/>
        </div>
    )
}