import './style.scss'
import SocialNetworks from "../socialNetworks";

export default function PrivacyPolicy() {
    return (
            <div className={'privacyPolicy'}>
                <div className={'privacyPolicy__info'}>
                    <div className={'privacyPolicy__contacts'}>
                        Finstreet 118 2561 Fintown <br/> Hello@finsweet.com 020 7993 2905
                    </div>
                    <SocialNetworks/>
                </div>
        </div>
    )
}