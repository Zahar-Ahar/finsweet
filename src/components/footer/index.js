import Logo from '../../asset/icons/Logo.svg'
import './style.scss'
import Menu from "../menu";
import Registration from "../registration";
import PrivacyPolicy from "../privacyPolicy";

export default function Footer() {
    return (
        <div className={'footer'}>
            <div className={'container'}>
                <div className={'footer__info'}>
                    <div className={'footer__top'}>
                        <img src={Logo} alt="/"/>
                        <Menu menuElements={[
                            {
                                link: '/',
                                text: 'Home'
                            },
                            {
                                link: '/blog',
                                text: 'Blog'
                            },
                            {
                                link: '/about',
                                text: 'About us'
                            },
                            {
                                link: '/contact',
                                text: 'Contact us'
                            },
                            {
                                link: '/privacy-policy',
                                text: 'Privacy Policy'
                            },
                        ]}/>
                    </div>
                    <Registration/>
                    <PrivacyPolicy/>

                </div>
            </div>
        </div>
    )
}