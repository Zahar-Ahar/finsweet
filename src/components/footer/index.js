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
                        <Menu menuElements={[ 'Home', 'Blog', 'About us', 'Contact us', 'Privacy Policy' ]}/>
                    </div>
                    <Registration/>
                    <PrivacyPolicy/>

                </div>
            </div>
        </div>
    )
}